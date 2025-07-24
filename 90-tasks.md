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
      if (str.length === 0) {
        console.log("empty");
      } 
        
    return "stop"
}
console.log(checkEmpty(str));


```
#### task 4
```
let string = "hello, everyone"

function shortenToTen(string) {
        if (string.length>10) {
      string=string.slice(0,10);
     } 
      return string;
}
console.log(shortenToTen(string));

```
#### task 5
```
let arr = [1,2,3,4]
let mass = [1,2,5]

function pushElement(massive){
        if (mass.length >= 3) {
        for (let i = 0; i < mass.length; i++) {
            massive.push(mass[i])
            
    }
        } 
    return massive;
}
console.log(pushElement(arr));

```
#### task 6
```
let word = "salam"
let text = "aleykum"

function compare() {
          if (word.length>= text.length) {
            return word;
          }
           return text;
        }
compare()
console.log(compare());
```
#### task 7
```
let text = "website"
 
function divideLength(text){
    return text.slice(0, Math.floor(text.length/2))
}
divideLength(text)
console.log(divideLength(text));
```
#### task 8
```
let list = "i love studying"

function findLengthOfElement(list){
    let k=0;
    list+=" ";
  for (let i = 0; i < list.length; i++) {
    if (list[i] != " ") {
        k++;
    } else {
        console.log(k);
        k=0;
    }
  }
  return "stop";
}
findLengthOfElement(list);
```
#### task 9
```
let str = "good morning"

function chopLast3(str) {
    if (str.length>5) {
        return str.slice(0, 9)
    } else {
        return str
    }
}
chopLast3(str)
console.log(chopLast3(str)) 
```
#### task 10
```
let text = "hello"

function printFirstLetter(text) {
    return text[0]
}
printFirstLetter(text)
console.log(printFirstLetter(text));
```
#### task 11
```
let text = "hello" 

function printLastLetter(text){
    return text[4];
}
printLastLetter(text)
console.log(printLastLetter(text));
```
