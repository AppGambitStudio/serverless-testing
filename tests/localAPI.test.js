jest.setTimeout(60000);

const { stopSlsOffline, startSlsOffline } = require('./offlineserver');
const req = require('request');
const request = require('request-promise');

beforeAll( async () => {
    await startSlsOffline()
})

afterAll( async () => {
    await stopSlsOffline();
})


test('Test Hello API with HTTP request and response', done => {
    request.get("http://localhost:4000/dev/hello?name=Lambda")
    .then((data) => {
        expect(data).toBe(JSON.stringify({"message":"Hello world to Lambda"}));
        done();
    });
});

test('Test Reverse API with HTTP request and response', () => {
    return request.get("http://localhost:4000/dev/reverse?val=this is a test")
    .then((data) => {
        return expect(data).toBe(JSON.stringify({"val":"tset a si siht"}));        
    })
    .catch((err) => {
        console.log(err);        
        throw new Error(`Test failed due to ${err.name}`)
    });
});