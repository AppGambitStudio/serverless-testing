const AWS = require('aws-sdk');
const AWSMock = require('aws-sdk-mock');

test('validate the Hello Lambda function with input and output parameters', async () => {
    AWSMock.setSDKInstance(AWS);

    const inputName = "my test"
    const inputObj = {name: inputName};
    const outputObj = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello world to ${inputName}`
        })
    };

    AWSMock.mock('Lambda', 'invoke', function (params, callback){
        callback(null, { Payload: JSON.stringify({message: `Hello world to ${inputName}`})});
    });

    const {hello} = require('../../functions/index');
    const resObj = await hello(inputObj);    

    expect(resObj).toMatchObject(outputObj);

    AWSMock.restore('Lambda');
});



