import { sendConfirmationEmail } from '../../util/nodemailer.config';
const { connectToDatabase } = require('../../util/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // console.log('REQUEST obj :',req);
    switch (req.method) {
        case 'GET': {
            // return getEmailSubscribers(req, res);
            return validateEmailSubscriber(req, res);
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
        let emailsFound = await db.collection('emails').find({isValid : true})
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

function computeTokenString(){
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let token = '';
    for (let i = 0; i < 25; i++) {
        token += characters[Math.floor(Math.random() * characters.length )];
    }
    return token;
}

async function sendEmailToUser(emailData){
    try {
        console.log('Sending Email :', emailData, emailData.emailId);
        let res = await sendConfirmationEmail(
            emailData.emailId,
            emailData.emailId,
            emailData.confirmationCode
        );
        return res;
    } catch (error) {
        console.log('Error:sendEmailToUser:', error);
        return error;
    }    
}

async function updateEmailSubscriber(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
  
        let emailData = JSON.parse(req.body);
        // console.log('emailData update:', emailData);
        
        if(emailData.emailId){
            console.log('Fetching emaildata :');
            let emailsFound = await db.collection('emails').find({emailId : emailData.emailId})
            .sort({ metacritic: -1 })
            .toArray();
            let isNewUser = false;
            let messageToUser = '';
            let token;
            console.log('Fetched emails :', emailsFound);
            if(emailsFound.length === 0){
                isNewUser = true;
                emailData.isValid = false;
                token = computeTokenString();
                // console.log('TokenString :',token);
                emailData.confirmationCode = token;
                emailData.emailSentTimeStamp = Number(Date.now());
                messageToUser = "Please check your inbox and click on subscribe."
            } else {
                isNewUser = false;
                if(emailsFound[0].isValid){
                    messageToUser = 'You have already subscribed';
                }else {
                    token = computeTokenString();
                    console.log('TokenString :',token);
                    emailData.confirmationCode = token;
                    messageToUser = 'Pending approval, please verify your email.'
                }
            }

            if(!isNewUser &&  emailData.userAddress === ''){
                console.log('Return with message :', messageToUser);
                return res.json({
                    message: messageToUser,
                    success: true,
                    dbMessge: ''
                });
            }

            console.log('Upserting email data...');
            //send email link to user
            let rs = await sendEmailToUser(emailData);
            // console.log('Email Sent response :',res);

            let result = await db.collection('emails').updateOne(
                {
                    emailId: emailData.emailId,
                },
                {   
                    $set: emailData,
                },
                {upsert: true}
            );

            console.log('Updated emailId :', result);
            return res.json({
                message: messageToUser,
                success: true,
                dbMessge: result
            });
        } else 
        {
            console.log('No email found to update/insert :', emailData);
        }
        return res.json({
            message: 'Email subscribe failed',
            success: false,
            dbMessge: ''
        });
    } catch (error) {
        // return an error
        console.log('Error occured :', error);
        return res.json({
            message: new Error(error).message,
            success: false,
            dbMessge: ''
        });
    }
}

async function validateEmailSubscriber(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        console.log('Email validation called........... :',req.query,';', typeof req.query);

        let userData = req.query;
        // console.log('link data: ', userData);
        if(userData){
            // console.log('Fetching emaildata :');
            let emailDataList = await db.collection('emails').find({emailId : userData.email})
            .sort({ metacritic: -1 })
            .toArray();
            console.log('Fetched email for the link :', emailDataList);
            
            if(emailDataList.length > 0){
                let email = emailDataList[0];
                // console.log('Email found :',email);
                if(userData.r === "subscribe" ){
                    if(email.isValid){
                        return res.send("<html><body style='max-width:500px;margin:auto;color:red;'><h1>&nbsp;</h1><h3>This email is already subscribed</h3></body></html>");
                    }
                    if(email.confirmationCode === userData.code){
                        email.isValid = true;
                        let result = await db.collection('emails').updateOne(
                            {
                                emailId: email.emailId,
                            },
                            {   
                                $set: email,
                            },
                            {upsert: false}
                        );
                        // console.log('Email db update result :',result);
                        return res.send("<html><body style='max-width:500px;margin:auto;color:green;'><h1>&nbsp;</h1><h3>Email subscribed successfully</h3></body></html>");
                    }
                    return res.send("<html><body style='max-width:500px;margin:auto;color:red;'><h1>&nbsp;</h1><h3>Email validation failed, link has expired</h3></body></html>");
    
                }else if(userData.r === "unsubscribe" ){
                    if(!email.isValid){
                        return res.send("<html><body style='max-width:500px;margin:auto;color:red;'><h1>&nbsp;</h1><h3>This email is already unsubscribed</h3></body></html>");
                    }
                    if(email.confirmationCode === userData.code){
                        email.isValid = false;
                        let result = await db.collection('emails').updateOne(
                            {
                                emailId: email.emailId,
                            },
                            {   
                                $set: email,
                            },
                            {upsert: false}
                        );
                        // console.log('Email db update result :',result);
                        return res.send("<html><body style='max-width:500px;margin:auto;color:green;'><h1>&nbsp;</h1><h3>Email unsubscribed successfully</h3></body></html>");
                    }
                } 
                return res.send("<html><body style='max-width:500px;margin:auto;color:red;'><h1>&nbsp;</h1><h3>Email validation failed, link has expired</h3></body></html>");

            }
            else{
                return res.send("<html><body style='max-width:500px;margin:auto;color:red;'><h1>&nbsp;</h1><h3>Invalid Request, link has expired</h3></body></html>");
            }
        }
    }catch (error) {
        // return an error
        // console.log('ERROR :', error);
        return res.send("<html><body><h3>Email subscribed successfully</h3><h5>"+new Error(error).message+"</h5></body></html>");
    }
}
