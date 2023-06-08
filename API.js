const API = require("./API");

const s = new API("http://api.com/api/hello");
console.log(s.isSecure());

s.updateUrl("https://api. com/api/hello");
console.log(s.isSecure()); // true

console.log(s.url); // https://api. com/api/hello

console.log(s.method); // GET

console.log(s.secure); // undefined (because private field)
