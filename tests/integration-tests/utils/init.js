const AWS = require('aws-sdk');

AWS.config.region = process.env.AWS_REGION;

function init(){    
}

module.exports = init;