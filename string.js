
let text = "hello"

function ucFirst(text) {
    if (!text) return ''
        return text[0] .toUpperCase() +
        text.slice(1).toLowerCase();
}
console.log(ucFirst(text));
let guestList = `people:
 * Atajan
 * Erkin
 * Shovket
`;

console.log(guestList);
let word = "hello"

console.log(word[0]);
console.log(word[1])
console.log(word[2])
console.log(word[3])
 
delete word[4]

let number = [6, 3, 8, 7]

function even(number){
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            console.log(number[i], "even");
            
        } else {
            console.log(number[i], "uneven");
            
        } 
    }
    return "enough"
}
console.log(even(number));


