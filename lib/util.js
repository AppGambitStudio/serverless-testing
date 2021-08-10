
const funcs = {
    helloWorld : (val) => {
        return `Hello world to ${val}`
    },

    reverseStr : (val) => {
        return val.split('').reverse().join('');
    }
}

module.exports = funcs;