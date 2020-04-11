const accumulatorFactory = require("./accumulatorFactory");

const acc = accumulatorFactory();
console.log(acc.add(5));
console.log(acc.getResult());
