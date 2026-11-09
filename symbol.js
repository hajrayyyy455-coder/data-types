let id1 =  Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);

let userId = Symbol("user");
console.log(userId.description);

let secretKey = Symbol("secret");
let account = {name: "Ali", [secretKey]: "12345"};
console.log(account[secretKey]);