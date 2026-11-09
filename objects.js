let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 300
};
console.log(book.title);
console.log(book.pages);

let testscores = [70, 80, 95];
for (let i=0; i < testscores.length; i++){
    console.log(testscores[i]);
}

let dog = {
    name: "Tommy",
    age: 3,
    bark: function() {
        console.log("Woof! I am " + this.name);
    }
};
dog.bark();