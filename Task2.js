// Roots or zeros
let X1, X2;

// constants 
const a = 1;
const b = 4;
const c = 4;

// output when a == 0
if (a == 0) {

    X1 = X2 = (-c)/(b) ;
    console.log("The root is " +X1);

} else {

// output for different Discriminants 
let Discriminant = (b*b)-(4*a*c);

if (Discriminant < 0) {

    console.log("Roots don't exist as discriminant = 0");

} else if (Discriminant == 0) {

    X1 = X2 = -b / (2*a) ;
    console.log("The root of the equation is " + X1 );

} else {

    X1 = (-b + Math.sqrt(Discriminant)) / (2 * a);
    X2 = (-b - Math.sqrt(Discriminant)) / (2 * a);
    console.log("The roots of the equation are " + X1 + " and " + X2);

}
}