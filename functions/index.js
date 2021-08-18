"use strict";
const { helloWorld } = require('../lib/util');
const AWS = require('aws-sdk');

let lambda;

const getLambdaObj = () => {
    if(lambda) return lambda;

    if(process.env.IS_OFFLINE){        
        const AWSMock = require('aws-sdk-mock');
        AWSMock.setSDKInstance(AWS);

        console.log('returning lambda offline endpoint')
        lambda = new AWS.Lambda({
            region: process.env.AWS_REGION,
            endpoint: process.env.LAMBDA_ENDPOINT            
        });
    }else{
        lambda = new AWS.Lambda({});
    }

    return lambda;
}

module.exports.hello = async (event, context) => {    
    const { name } = event.queryStringParameters || event;
    const params = {
        FunctionName: process.env.WORLD_FUNC,
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify({ val: name }),
    }
    
    const response = await getLambdaObj().invoke(params).promise()
    const res = JSON.parse(response.Payload);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: res.message
        })
    };
}

module.exports.world = async (event, context) => {
    const { val } = event;
    const message = helloWorld(val);
    return {        
        message: message
    }
}