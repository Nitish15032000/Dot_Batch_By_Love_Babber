// // Create Constructor function
// function rectangle(){
//   this.length = 5;
//   this.breadth = 5;

//   this.area = function () {
//     console.log(rectangle.length * rectangle.breadth);
//   }
// }

// let obj = new rectangle(5,5);
// console.log(obj.len);


// Factory Function is a fucntion which produces objects when we called it
function createRectangle(length,breadth) {
  const rectangle = {
    length,
    breadth,

    draw: function () {
      console.log("Drawing rectangle");
    },

    area: function () {
      console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
    },
  };
  return rectangle;
}

let rectangle1 = createRectangle(5,6);
console.log(rectangle1.length);
rectangle1.area();

let rectangle2 = createRectangle(15,60);
console.log(rectangle2.length);
rectangle2.area();
