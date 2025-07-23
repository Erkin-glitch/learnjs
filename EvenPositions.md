#### finding uneven positions of elements
```
let numbers = [6,5,8,4]
function evenPosition(numbers){
let k = 0
while  ( k!=numbers.length) {
    if( k % 2 != 0){
    console.log(numbers[k]);
    }
    k++;
}
return "working"
}
console.log(evenPosition(numbers));
```
