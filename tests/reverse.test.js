const {handler} = require('../functions/reverseFunc');

test('validate the Reverse Lambda function with input and output', async () => {
    // Arrange
    const input = {val: 'Reverse'}
    const expectedOutput = {
        statusCode: 200,
        body: JSON.stringify({
            val: 'esreveR'
        })
    }    

    // Act
    const output = await handler(input);

    // Assert
    expect(output).toMatchObject(expectedOutput);
})


test('validate the Reverse Lambda function with long input and output', async () => {
    // Arrange
    const input = {val: 'Reverse Lambda function with long input and output'}
    const expectedOutput = {statusCode: 200, body: JSON.stringify({val: 'tuptuo dna tupni gnol htiw noitcnuf adbmaL esreveR'})};

    // Act
    const output = await handler(input);

    // Assert
    expect(output).toMatchObject(expectedOutput);
})