﻿var cat = require('./catjs.js');
var cat1 = new cat.Cat("大毛","黄色");
console.log(cat1.name);
console.log(cat1.color);
console.log(cat1.type);
cat1.eat();
console.log("========================");
var cat1 = new cat.Cat("二毛","黑色");
console.log(cat1.name);
console.log(cat1.color);
console.log(cat1.type);
cat1.eat();