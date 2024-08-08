const { connectToDatabase } = require('../../util/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getAssets(req, res);
        }

        case 'POST': {
            return updateAssets(req, res);
        }

        case 'PUT': {
            return putAsset(req, res);
        }

        case 'DELETE': {
            return deleteAsset(req, res);
        }
    }
}


async function getAssets(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        console.log('assets:getAssets...');
        let nfts = await db
            .collection('nfts')
            .find({}, {_id: 0})
            .sort({ metacritic: -1 })
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(nfts)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function updateAssets(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();            
        let assetData = JSON.parse(req.body);
        console.log('assetData update:', assetData);
        let normalTokenIds = assetData["normalTokenIds"];
        let rareTokenIds =  assetData["rareTokenIds"];
        let amount = Number(assetData["totalPricePaid"]) ? Number(assetData["totalPricePaid"]) : 0;
        // let pushObj = {};

        // if(normalTokenIds) pushObj.normalTokenIds = normalTokenIds;
        // if(rareTokenIds) pushObj.rareTokenIds = rareTokenIds;

        delete assetData["normalTokenIds"];
        delete assetData["rareTokenIds"];
        delete assetData["totalPricePaid"];
        // update the published status of the post
        // console.log('TokenIds to be updated:', pushObj);

        let result = [];
        console.log( 'Token Ids: ', normalTokenIds, rareTokenIds, rareTokenIds.length);

        if(normalTokenIds && normalTokenIds.length > 0 && rareTokenIds && rareTokenIds.length > 0){
            console.log('Updating both normal and rare token Ids...');
            result = await db.collection('nfts').updateOne(
                {
                    buyerAddress: assetData.buyerAddress,
                },
                {   
                    $set: assetData,
                    $inc:{totalPricePaid: amount},
                    $push: {
                        normalTokenIds: {$each: normalTokenIds},
                        rareTokenIds: {$each: rareTokenIds}
                    }
                },
                {upsert: true}
            );
        }
        else if(normalTokenIds && normalTokenIds.length > 0){
            console.log('Updating normal token Ids...');
            result = await db.collection('nfts').updateOne(
                {
                    buyerAddress: assetData.buyerAddress,
                },
                {   
                    $set: assetData,
                    $inc:{totalPricePaid: amount},
                    $push: {
                        normalTokenIds: {$each: normalTokenIds}
                    }
                },
                {upsert: true}
            );
        }
        else if(rareTokenIds && rareTokenIds.length > 0){
            console.log('Updating rare token Ids...');
            result = await db.collection('nfts').updateOne(
                {
                    buyerAddress: assetData.buyerAddress,
                },
                {   $set: assetData,
                    $inc:{totalPricePaid: amount},
                    $push: {
                        rareTokenIds: {$each: rareTokenIds}
                    }
                },
                {upsert: true}
            );
        }
        else {
            console.log('Updating other details...');
            result = await db.collection('nfts').updateOne(
                {
                    buyerAddress: assetData.buyerAddress,
                },
                { 
                    $set: assetData,
                    $inc:{totalPricePaid: amount}
                },
                {upsert: true}
            );
        }

        console.log('assets:updateAssets:Result:', result);
        // return a message
        return res.json({
            message: 'Asset updated successfully',
            success: true,
        });

    } catch (error) {
        // return an error
        console.log('ERROR:', error);
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


// };