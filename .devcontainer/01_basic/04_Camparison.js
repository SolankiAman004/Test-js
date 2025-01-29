"use strict";

console.log(null == undefined);  // true (loose equality comparison)
console.log(null === undefined); // false (strict comparison)
console.log(null < 0);  // false
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true (because `null` is converted to `0` in numerical comparison)
console.log(null <= 0); // true

console.log(undefined == null); // true (loose equality)
console.log(undefined === null); // false (strict comparison)
console.log(undefined < null);  // false
console.log(undefined > null);  // false
console.log(undefined <= 0); // false
console.log(undefined >= 0); // false
