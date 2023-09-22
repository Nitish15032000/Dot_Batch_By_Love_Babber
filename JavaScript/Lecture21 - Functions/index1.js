// Function 
run();

function run()
{
    console.log("Function running");
}

// Function Assignment 
let stand = function walk(){
    console.log("Walking");
}

function add(a,b)
{
    let sum = 0;
    // console.log(arguments);
    for(let value of arguments)sum+=value;
    return sum;
}

console.log(add(1,2)); // 1 + 2 = 3
console.log(add(1)); // 1 + Undefined = NaN
console.log(add()); // Undefined + Undefined = NaN
console.log(add(1,2,3,4,5,6,7,8)) // 1 + 2 = 3 [Rest 3 5 8] in Argunment 
