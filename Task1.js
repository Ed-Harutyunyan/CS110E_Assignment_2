// Triangle sides and area
let heightT = 2;
let baseT = 4;
let areaT = (baseT * heightT)/2;

//Rectangle sides and area
let widthR = 2;
let heightR = 2;
let areaR = widthR * heightR;

if (areaR > areaT) {
    console.log("Rectangle has bigger area");
} else if (areaR < areaT){
    console.log("Triangle has bigger area");
} else {
    console.log("Areas are equal");
}
