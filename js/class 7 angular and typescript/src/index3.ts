// let obj : {name:string , age:number}


// type User = {name:string , age:number , gender?:string}
// // type User = {
// //     [key:string]:number
// // }
// let obj :User;

// obj = {
//     name:"Archi",
//     age:34
// }
// console.log(obj);


type User1 = {name:string }
type User2 = {role:string }

let obj:User1 & User2;

obj ={
    name:"Archi",
    role:"Lead"
}


