const num = Number(process.arg[2]);
if(isNan(num)){
    console.log("Not a number");
}else{
    console.log(`My number: ${num}`);
}