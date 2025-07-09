let arr = [1, 23, 4, 5, 99,44,56,66];

// map HOF
// let TwiceNumOut = arr.map((element, index) => {
//   return element * 2;
// });
// console.log(TwiceNumOut);


// forEach HOF
// arr.forEach((element, index)=> {
    
// console.log(element/2)
// });


// filter HOF
// let evenNumOut = arr.filter((element, index)=>{
//     return element%2==0
// })

// console.log(evenNumOut)


// reduce HOF
let addNumOut = arr.reduce((acc, curr)=> {
    return acc + curr
})

console.log(addNumOut)