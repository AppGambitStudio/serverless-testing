const util = require('../lib/util');

test('check the helloWorld message', () => {
    expect(util.helloWorld('Lambda')).toBe("Hello world to Lambda");
});

test('string reverse - single word', () => {
    expect(util.reverseStr('Hello')).toBe('olleH');
});

test('string reverse - multi word sentense', () => {
    expect(util.reverseStr('Reverse a String in JavaScript')).toBe('tpircSavaJ ni gnirtS a esreveR');
});