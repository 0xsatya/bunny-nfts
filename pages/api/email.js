const { connectToDatabase } = require('../../util/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getEmailSubscribers(req, res);
        }
        case 'POST': {
            return updateEmailSubscriber(req, res);
        }
    }
}

async function getEmailSubscribers(req,res){
    try {
        let { db } = await connectToDatabase();
        console.log('getEmailSubscribers ...');
        let emails = await db
            .collection('nfts')
            .find(
                {subscribeStatus: true}, 
                {_id: 0, emailId: 1, buyerAddress: 0}
                )
            .sort({ metacritic: -1 })
            .toArray();
        console.log('emails list:', emails);
        return res.json({
            message: JSON.parse(JSON.stringify(emails)),
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

async function updateEmailSubscriber(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
  
        let emailData = JSON.parse(req.body);
        console.log('emailData update:', emailData);
        // update the published status of the post
        let result = await db.collection('nfts').updateOne(
            {
                buyerAddress: emailData.buyerAddress,
            },
            { $set: emailData },
            {upsert: true}
        );

        console.log('Result:', result);
        // return a message
        return res.json({
            message: 'Post updated successfully',
            success: true,
        });


    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
