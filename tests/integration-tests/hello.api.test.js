
const util = require('./utils/init');
const axios = require('axios');

describe('Calling the AWS APIs for Integration Testing', () => {
    beforeAll(() => {
        util();
    });
    
    test('Test the Hello API using the API Gateway', async () => {
        // Arrange
        const apiUrl = `${process.env.API_BASE_URL}/hello?name=Lambda`;

        // Act 
        const response = await axios.get(apiUrl);        

        // Assert
        expect(response.status).toBe(200);
        expect(response.data.message).toBe("Hello world to Lambda");
    })
})