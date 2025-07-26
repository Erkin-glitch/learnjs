#### finding the length of element
```
let word = "hello"

function findLength(word) {
        console.log(word.length);
        return "works"
}
console.log(findLength(word));

```
#### finding length of element without probels
```
let text = " space "
let trim =   text.trim()

function findElements(trim){
       console.log(trim.length);
    return "stop"
}
console.log(findElements(trim));
```
#### Checking if the string is empty
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
#### task 12
```
let word = "privet"

function printThirdLetter(word) {
    return word[2]
}
printThirdLetter(word)
console.log(printThirdLetter(word));
```
#### task 13
```
let word = ["fun", "drink", "party"]

function printFirstLetterS(arr) {
         let str="";
      for (let i = 0; i < arr.length; i++) {
        str+=arr[i][0];
      }
      return str;
}
console.log(printFirstLetterS(word))
```
#### task 14
```
let str1 = "work"
let str2 = "jobs"
 
let result = ""
function findJemini(str){
    let sum = 0;
 for (let i = 0; i < str.length; i++) {
    sum+=str[i].codePointAt(0);
    console.log(str[i].codePointAt(0));
 }
 return sum;
}
console.log(findJemini(str1));
console.log(findJemini(str2));
```
#### task 15
```
let word = ["hello", "commotion", "promotion"]

function printSecondLetters(arr) {
         let str="";
      for (let i = 0; i < arr.length; i++) {
        str+=arr[i][1];
      }
      return str;
}
console.log(printSecondLetters(word))
```
#### task 16
```
let word = "hello"

function opposite(word) {
  let reverse = ""
    for (let i = word.length - 1; i>=0; i--) {
      reverse+= word[i]
    }
    return reverse
   }
console.log(opposite(word));
```
#### task 17
```
let text = "i have to go"

function unevenIndexes(text) {
   let result = ""
    for (let i = 0; i < text.length; i++) {
    if (i % 2 !== 0) {
      result += text[i];
    }
   
}
return result;
}
console.log(unevenIndexes(text));
```
#### task 18
```
let str = "hello"

function encrypt(str){
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum+=str[i].codePointAt(0)
      
    }
    return sum + 1
    
}
console.log(encrypt(str));
```
#### task 19
```
let text = "jow aro ybu "

function print3Indexes(text) {
    let sum = ""
    for (let i = 0; i < text.length; i++) {
        if (i % 3 === 0) {
            sum+=text[i]
        }
    }
    return sum
}
console.log(print3Indexes(text));
```
#### task 20
```
let str1 = "Erkin"
let str2 = "jobs"
 
let result = ""
function findJemini(str){
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum+=str[i].codePointAt(0) / str.length;;
    }
    return sum 
}
console.log(findJemini(str1));
console.log(findJemini(str2));
```
#### task 21
```
function checkIndex(word){
    return word.indexOf('a')
    
}
console.log(checkIndex("apple"));
```
#### task 22
```
let text = "hello"

function checkIndexes(text) {
    return text.indexOf("lo")
}
console.log(checkIndexes(text));
```
#### task 23
```
let str = "hello"

function checkFirstIndexes(str){
    return str.indexOf("he") 
}
console.log(checkFirstIndexes(str));
```
#### task 24
```
let word = "task-24.js"
function checkLasrIndexes(word) {
    return word.indexOf(".js")
}
console.log(checkLasrIndexes(word));
```
#### task 25
```


function checkForIndex(str) {
    let i = str.lastIndexOf("l")
    return i
}
console.log(checkForIndex("hello"));
```
#### checking for index
```

function checkForIndex(text,part) {
    if (text.indexOf(part) != -1) {
       return "Yes"
    }
    return "No"
}
console.log(checkForIndex("hello","erkin"));        
```
#### finding index
```
let text = "goose"

function findIndex(text){
    return text.lastIndexOf('o')
}
console.log(findIndex(text));
```
#### finding repeated "a's"
```
let str = "i'm a webaaaaa-programmer "

function findRepeats(str){
    let k = 0
    while (str.indexOf("a") > -1) {
        k++
        str = str.replace("a", " ")
    }
    return k;
}
console.log(findRepeats(str));
```
#### finding repeated "cats"
```
let str = " i love my cat, cat is my everything"

function findCats(str) {
    let k = 0
      while (str.indexOf("cat") > -1) {
        k++
        str = str.replace("cat", " ")
    }
    return k;
}
console.log(findCats(str));
```
#### finding amount of repeats
```
let str = "helloo"

function findAmountOfRepeats(str){
    let k = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            k++
        }
    }
    return k;
}
console.log(findAmountOfRepeats(str));
```
#### changing string to LowerCase
```
let str = "Hello"

function lowerCase(str) {
    return str.toLowerCase("h")
}
console.log(lowerCase(str));
```
#### changing string to UpperCase
```
let str = "hello"

function UpperCase(str){
    return str.toUpperCase()
}
console.log(UpperCase(str));
```
