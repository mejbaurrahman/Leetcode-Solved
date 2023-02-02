let checkPalinDrome=(number)=>{
    // console.log(number)
    let count =0;
    let lengthNumber = number.length;
    for(let i=0; i<Math.floor(lengthNumber/2); i++){
        if(number[i]!==number[lengthNumber-1-i]){
            return false;
        }
    }
    if(count==0){
        return true;
    }
}

let isPalindrome = (x)=> {
    // console.log(x)
    if(x<0){
        return false;
    }
    let i=1;
    let n = x;
    // let lastDigit;
    let number = []
    while(i){
        let lastDigit = n % 10;
        number.push(lastDigit)
        if(n<10){
            i=0
        }
        n = Math.floor(n/10);
        // console.log(n)
    }
// console.log(number)
  const checkBool=  checkPalinDrome(number)
  return checkBool;
}
const a=isPalindrome(9999)
console.log(a)