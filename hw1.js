 //question 1
 function firstLetter(fullName){
   const names = fullName.split(' ');
  const firstLetters = names.map(name => name.charAt(0));
  return firstLetters.join('');
 }
 
 var str = "Azad Ram Madiha Yash"
 console.log(firstLetter(str))
 

 //question2
 function sumOfPositive(arr) {
    let length = arr.length;
    let sum=0;
    for (let index = 0; index < length; index++) {
       if(arr[index]>= 0){
        sum=sum+arr[index]
       } 
    }
    return sum;
 }
 const arr = [1,-4,12,0,-3,-150];
 console.log(sumOfPositive(arr))

 //question 3
function square(nums) {
    let len=nums.length;
    const num=[];
    for(let i=0;i<len;i++){
        num[i]=nums[i]*nums[i];
    }
    
    for(let i =0;i<len;i++){
        console.log(num[i])
    }
}

 const nums = [1,2,3,4,5];
 square(nums)

 //question 4
 function multiplyBy(factor){
    return function(number){
        return factor * number;
    }
 }

 console.log(`Multipied number is:  ${multiplyBy(5)(6)}`)
 //question 5
 function pangram(str){
    len = str.length;
    const unique = new Set;
    let lower = str.toLowerCase()
    for(let i = 0;i<len;i++){
        let ch=lower.charAt(i);
        if (ch>= 'a' && ch<= 'z') {
            unique.add(ch)
        }
    }
    return unique.size == 26;
 }

 let str2 = "The quick brown fox jumps over the lazy dog.";
console.log(`The string is: ${pangram(str2)? "Pangram": "Not Pangram"}`);