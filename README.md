# Serverless Testing
Software Testing is a key part of any application development irrespective of the tools, frameworks or methodologies in use. This simple project is created to put up few examples on how to create Unit tests for Lambda functions using the Jest and other libraries.

Run the following command to run unit tests. For unit testing, update the `.env` with AWS region and Lambda Endpoint to local offline endpoint. Refer the [sample.env](./sample.env) file for the required environment variables.


```
npm test
```

For initgration testing, make sure the project is deployed to AWS account. Update the `.env` with AWS region and API Gateway Endpoint. Refer the [sample.env](./sample.env) file for the required environment variables.

```
npm run test-integration
```

## References

* [Jest Framework](https://jestjs.io/) - Effortless JavaScript Testing Framework
* [Sinon.JS](https://sinonjs.org/) - Easy to create Mocks, Stubs and Spies
* [AWS SDK Client Mocks](https://github.com/m-radzikowski/aws-sdk-client-mock) - Easy and powerful mocking of AWS SDK v3 Clients
* [Serverless Offline](https://github.com/dherault/serverless-offline) - Emulate AWS λ and API Gateway locally when developing your Serverless project