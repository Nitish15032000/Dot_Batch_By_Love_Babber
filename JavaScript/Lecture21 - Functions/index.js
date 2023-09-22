

// stand();

// // Anonymous Function 
// let sit = function()
// {
//     console.log("Sitting");
// }

// sit();


// let x = 0;
// console.log(x);

// x='a';
// console.log(x);


// Rest Operator 

function sum(...args){
    let sum = 0;
    for(let i of args)
    sum += i;
    
    return sum;
}

console.log(sum(1,2,3,4,5,6,7,8));

// Default Parameter
function mulitplication(a,b,c=1){
    return a * b * c;
}

console.log(mulitplication(2,3,4));//24
console.log(mulitplication(2,3));//6

let person = {
    firstName : "Priyansh",
    lastName : "Patel",
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) 
    {
        if(typeof value !== "string")
        {
            throw `You have to give a string value but you give ${typeof value}`;
        }
        let path = value.split(" ");
        this.firstName = path[0];
        this.lastName = path[1];
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
person.fullName = "Harshit Devda";
console.log(person.fullName);

// Try Catch 
// try{
//     person.fullName = true;
// }
// catch(err){
//     alert(err);
// }
console.log(person.fullName);
