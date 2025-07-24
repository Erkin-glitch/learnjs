#### finding the length of element
```
let word = "hello"

function findLength(word) {
        console.log(word.length);
        return "works"
}
console.log(findLength(word));

```
#### task 2
```
let text = " space "
let trim =   text.trim()

function findElements(trim){
       console.log(trim.length);
    return "stop"
}
console.log(findElements(trim));
```
#### task 3
```
let str = ""

function checkEmpty(str){
    for (let i = -1; i < str.length; i++) {
      if (str.length === 0) {
        console.log("empty");
      } 
      else {
        console.log(str[i]);
        
      }
        
    }
    return "stop"
}
console.log(checkEmpty(str));

```
#### task 4
```
let string = "hello, everyone"

function shortenToTen(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.length>10) {
        console.log(string.slice(0,10));
     } else {
        console.log(string);
        
     }
      }
      return "working"
}
console.log(shortenToTen(string));
```
#### task 5
```
let arr = [1,2,3,4]
let mass = [1,2,]

function pushElement(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < mass.length; j++) {
        }
        if (mass.length >= 3) {
            console.log(arr ,  mass); 
            
        } else {
            console.log(arr);
        }
    }
    return "stop"
}
console.log(pushElement(arr));
```
