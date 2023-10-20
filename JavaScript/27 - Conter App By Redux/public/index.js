// console.log("hello")
let mypromise1 = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("I am inside promise 1");
    },8000);
});


let mypromise2 = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("I am inside promise 2");
    },3000);
});

console.log("hlw promise")