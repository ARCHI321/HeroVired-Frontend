// let x;

// function abc(x:number){
//     return x;
// }

// x = abc(10);
// console.log(x);

let x = 10;

function abc(x:number) :String|number{
    if(x)
       return "astring"
    else
        return x;
}

x = abc(10) as number;
console.log(x);


export{};