let arr = [8,7,2,96,7,1,9,71,96];

console.log(arr);
// remove from last index
console.log(arr.pop());
console.log(arr);

// remove index no 2 and 4 element
console.log(arr.splice(2));
console.log(arr.sort((a,b)=>a-b));

// it will copy the reference 
arr1 = arr;
// so empty both arrays 
arr.splice(0, arr.length)
console.log(arr)
console.log(arr1)

let arr3 = [8,7,2,96,7,1,9,71,96];
for (let value of arr3){
    console.log(value)
}

        // or

arr3.forEach(value => console.log(value))

