#### print numbers one by one
```
let array = [1,5,8,4]
function numbers(array) {
    for (let i = 0; i < array.length; i++){
       console.log(array[i]);
        
    }
    return "stop"
}
console.log(numbers(array))

let numbers = [6,5,8,4]
function multiply(numbers){
    let k = 0
       while (k!=numbers.length) {
        console.log(numbers[k]);
        k++
       }
         
    return "enough"
}
console.log(multiply(numbers));
```
