// Object literal syntax
const persona = {
    name: "John",
    age: 30,
    sayHello: function() {
      console.log("Hello, my name is " + this.name + ".");
    }
};
  
  persona.sayHello(); // Output: "Hello, my name is John."
  
  // Constructor function syntax
function Person(name, age) {
    this.name = name;
    this.age = age;
}
  
Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + ".");
};
  
  const person = new Person("John", 30);
  person.sayHello(); // Output: "Hello, my name is John."