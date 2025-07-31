#### finding the length of element #1
```
let word = "hello"

function findLength(word) {
        console.log(word.length);
        return "works"
}
console.log(findLength(word));

```
#### finding length of element without probels #2
```
let text = " space "
let trim =   text.trim()

function findElements(trim){
       console.log(trim.length);
    return "stop"
}
console.log(findElements(trim));
```
#### Checking if the string is empty #3
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
#### deleting part of the string if the length more than 10 #4
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
#### adding array to another array if its length more than or equal 3 #5
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
#### comparing the length of elements #6
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
#### slicing element to its half #7
```
let text = "website"
 
function divideLength(text){
    return text.slice(0, Math.floor(text.length/2))
}
divideLength(text)
console.log(divideLength(text));
```
#### deleting probels from string #8
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
#### deleting last 3 indexes if elements length more than 5 #9
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
#### printing only first letters #10
```
let text = "hello"

function printFirstLetter(text) {
    return text[0]
}
printFirstLetter(text)
console.log(printFirstLetter(text));
```
#### printing last letters #11
```
let text = "hello" 

function printLastLetter(text){
    return text[4];
}
printLastLetter(text)
console.log(printLastLetter(text));
```
#### printing the third letter #12
```
let word = "privet"

function printThirdLetter(word) {
    return word[2]
}
printThirdLetter(word)
console.log(printThirdLetter(word));
```
#### printin first letters of every word in array #13
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
#### finding sum of Unicode #14
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
#### printing every second letter of words in array #15
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
#### reversing word "hello #16
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
#### printing uneven indexes #17
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
#### encrypting string #18
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
#### collecting word from third indexes #19
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
#### printing sum of two strings #20
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
#### checking index #21
```
function checkIndex(word){
    return word.indexOf('a')
    
}
console.log(checkIndex("apple"));
```
#### finding indexes of "lo" #22
```
let text = "hello"

function checkIndexes(text) {
    return text.indexOf("lo")
}
console.log(checkIndexes(text));
```
#### checking first indexes #23
```
let str = "hello"

function checkFirstIndexes(str){
    return str.indexOf("he") 
}
console.log(checkFirstIndexes(str));
```
#### checking last indexes #24
```
let word = "task-24.js"
function checkLasrIndexes(word) {
    return word.indexOf(".js")
}
console.log(checkLasrIndexes(word));
```
#### checking with lastIndexOf #25
```


function checkForIndex(str) {
    let i = str.lastIndexOf("l")
    return i
}
console.log(checkForIndex("hello"));
```
#### checking for index #26
```

function checkForIndex(text,part) {
    if (text.indexOf(part) != -1) {
       return "Yes"
    }
    return "No"
}
console.log(checkForIndex("hello","erkin"));        
```
#### finding index #27
```
let text = "goose"

function findIndex(text){
    return text.lastIndexOf('o')
}
console.log(findIndex(text));
```
#### finding repeated "a's" #28
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
#### finding repeated "cats" #29
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
#### finding amount of repeats #30
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
#### changing string to LowerCase #31
```
let str = "Hello"

function lowerCase(str) {
    return str.toLowerCase("h")
}
console.log(lowerCase(str));
```
#### changing string to UpperCase #32
```
let str = "hello"

function UpperCase(str){
    return str.toUpperCase()
}
console.log(UpperCase(str));
```
#### comparing without register #33
```
let word = "hello"
let text = "Hello"

function comparingWithouRegiste(){
    if (word.toLowerCase === text.toLowerCase) {
        console.log("equal");
        
    } else{
        console.log("not equal");
        
    }
    return "works"
}
console.log(comparingWithouRegiste());
```
#### checking letters #34
```
let str = "Hello"

function checkLetter(str){
    let result = str.toUpperCase()
    if (result === str.toLowerCase()) {
        return true
    }else{
        return false
    }
}
console.log(checkLetter(str));
```
#### return first letter big #35
```
let word = "hello"

function firstLetterBig(word){
    return word[0].toUpperCase()
}
console.log(firstLetterBig(word));
```
#### return word in uppercase #36
```
let word = "hello, world"

function UpperCase(word){
        for (let i = 0; i < word.length; i++) {
      if (word[i] === 0) {
        return " "
      }
      return word[0].toUpperCase() + word.slice(1).toLowerCase()   
     } 
}
console.log(UpperCase(word));
```
#### return vowels in uppercase #37
```
let str = "tired "
let vowels = "aeuio"
let result = ""
function vowelsToUpperCase(str){
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        result += str[i].toUpperCase()
    } else{
        console.log(result);
        result += str[i]
    }
  }
  
}
console.log(vowelsToUpperCase(str));
```
#### return string to CamelCase
```
let str = "hello world"
    let k = ""
    let i = 0
        while (i < str.length) {
        if (str[i] != " ") {
            k += str[i]
        } else {
         k += str [i + 1].toUpperCase()
         i++;
      }
       i++;

    }
    console.log(k);
```
#### return to snakecase
```
let str = "hello world"

str = str.replace(" ", "_")
console.log(str);
```
