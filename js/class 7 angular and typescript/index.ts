
let x :number;

let y :string;

let z :boolean;

let z1:any;

//never

let arr: number [] = [1,2];

// let arr1: [number,string,number] =  [1,"hello",89];
// let arr1: [number,string,boolean] =  [1,"hello",true];
let arr1: [number,string,boolean] = [1,"hello" , false];
// arr1[0] = 34;
arr1.push("hello1");
// arr1.push(true);
console.log(arr1);


let arr2: [number,string,number][] =  [[1,"hello",89],[2,"hello2",90]];
//arr2[0][1] = true //error
arr2.push([3,"hello3",91]);

let arr3: (number|string) []  =  [1,"hello",89,2,"hello2",90];

let arr4: number []  =  [1,89,2,90];


// let x ;
// x.

export {}