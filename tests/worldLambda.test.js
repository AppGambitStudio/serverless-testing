const {world } = require('../functions/index');

test('validate the World Lambda function with input and output', async () => {
    const input = { val: 'Lambda'};
    const output = { message: 'Hello world to Lambda'};

    const res = await world(input);    
    expect(res).toMatchObject(output);
});