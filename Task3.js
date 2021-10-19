// Our Coordinates
let x1 = 2;
let x2 = 5;
let y1 = 0;
let y2 = 6;

if ((x1 | x2 | y1 | y2) < 0) {
    console.log("Please input numbers greater or equal to 0");
} else {
// equation for length
let length = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));

// output of length
console.log(length);
}