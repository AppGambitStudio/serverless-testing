"use strict";
const { helloWorld } = require('../lib/util');
const { Lambda } = require('aws-sdk');

let lambda;

const getLambdaObj = () => {
    console.log('Using Local Lambda Endpoint');
    if(process.env.IS_OFFLINE){
        lambda = new Lambda({
            region: 'us-east-1',
            endpoint: process.env.LAMBDA_ENDPOINT
        });
    }else{
        lambda = new Lambda({});
    }

    return lambda;
}

lambda = getLambdaObj();

module.exports.hello = async (event, context) => {
    const { name } = event.queryStringParameters || event;
    const params = {
        FunctionName: process.env.WORLD_FUNC,
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify({ val: name }),
    }
    
    const response = await lambda.invoke(params).promise()
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