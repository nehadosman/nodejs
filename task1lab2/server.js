var myMod = require("./module");
console.log(myMod);
let myClass = myMod.myClass;
let user1 = new myClass();
user1.display();
console.log("------------------------");

let user2 = new myClass();
user2.getTicket(2);

console.log("------------------------");

user2.update(2,3,3,3,3,3);
user2.getTicket(2);
