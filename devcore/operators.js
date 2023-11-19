module.exports = class Operators {
  constructor(){
    const ops = {
      add: function (a, b) {
        return a + b;
      },
      subtract: function (a, b) {
        return a - b;
      },
      multiply: function (a, b) {
        return a * b;
      },
      divide: function (a, b) {
        return a / b;
      },
      modulus: function (a, b) {
        return a % b;
      },
      // increment: function (a) {
      //   return ++a;
      // },
      // decrement: function (a) {
      //   return --a;
      // },
      // not: function (a) {
      //   return !a;
      // },
      and: function (a, b) {
        return a && b;
      },
      or: function (a, b) {
        return a || b;
      },
      xor: function (a, b) {
        return a ^ b;
      },
      equal: function (a, b) {
        return a === b;
      },
      notEqual: function (a, b) {
        return a !== b;
      },
      strictEqual: function (a, b) {
        return a === b;
      },
      strictNotEqual: function (a, b) {
        return a !== b;
      },
      greaterThan: function (a, b) {
        return a > b;
      },
      lessThan: function (a, b) {
        return a < b;
      },
      greaterThanOrEqual: function (a, b) {
        return a >= b;
      },
      lessThanOrEqual: function (a, b) {
        return a <= b;
      },
      leftShift: function (a, b) {
        return a << b;
      },
      rightShift: function (a, b) {
        return a >> b;
      },
      // assignment: function (a, b) {
      //   return a = b;
      // },
      // plusEquals: function (a, b) {
      //   return a += b;
      // },
      // minusEquals: function (a, b) {
      //   return a -= b;
      // },
      // multiplyEquals: function (a, b) {
      //   return a *= b;
      // },
      // divideEquals: function (a, b) {
      //   return a /= b;
      // },
      // modulusEquals: function (a, b) {
      //   return a %= b;
      // },
    };
    for (let key in ops) {
      this[key] = ops[key];
    }
  }
};