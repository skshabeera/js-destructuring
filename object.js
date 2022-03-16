// const alphabet=["A","B","C","D","E","F"]
// const number=['1','2','3','4','5','6','7']
// const [a,b]=alphabet
// const[a,,c,...rest]=alphabet
// const newarray=[...alphabet,...numbers]
// const newarray1=alphabet.concat(numbers)
// // const b=alphabet[1]
// console.log(a)
// console.log(b)
function sumMultiply(a,b){
    return [a+b,a*b]
}
const [sum,multiply]=sumMultiply(2,4)
console.log(sum,multiply)