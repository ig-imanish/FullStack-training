// console.log(this);

let obj = {
  name: "Manish",
  lastname: "kumar",
  age: 19,
  subjects: ["html", "css", "js", "react"],
  // subjects: {
  //   1: ["math", "physics"],
  //   spec: {
  //     3: ["SE"],
  //   },
  // },
  college: "RB",
  fn: function () {
    console.log(this.name);
  },
};

// console.log(obj.subjects.spec["3"][0]);
// obj.fn();
// console.log(obj.fn())
// console.log(obj)
// console.log(obj.name)
// console.log(obj["name"])

// let a = 10;
// let b = 10;
// console.log(a==b)
// console.log(a===b)

let str = "Manish Kumar";
// for(let i=0; i<str.length; i++){
//   console.log(i , " - ", str[i])
// }

// let i=0;
// while(i<str.length){
//   console.log(i , " - ", str[i]);
//   i++;
// }

// for(let ch of str){
//   console.log(ch)
// }
// let arr = [2,3,5,5]
for (let key in obj) {
  if (typeof obj[key] == "string") {
    console.log(obj[key]);
  }
}


// Higher order functions
// map
// forEach
// filter
// reduce