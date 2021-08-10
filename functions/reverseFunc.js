const { reverseStr } = require('../lib/util');

module.exports.handler = async (event, context) => {
    const { val } = event.queryStringParameters || event;    
    const revVal = reverseStr(val);

    return {
        statusCode: 200,
        body: JSON.stringify({
            val: revVal
        })
    };
}