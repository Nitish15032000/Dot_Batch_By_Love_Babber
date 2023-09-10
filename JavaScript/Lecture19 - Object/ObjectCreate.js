let student = {
  // object name
  firstName: "Koushik", // list of properties and values
  lastName: "Sadhu",
  age: 20,
  height: 175,
  fullName: function () {
    // object function
    return this.firstName + " " + this.lastName;
  },
};

// console.log(student.age)
// console.log(student.height)
// console.log(student.fullName())

student.age = 19; // setting value
console.log("value is updated " + student.age)
student.age++; // incrementing value
console.log("after update increase the value " + student.age)
name = student.fullName(); // call object function
console.log("full name is " + name)
