"use strict";
{
    const sumArray = (array) => {
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        });
        return sum;
    };
    console.log(sumArray([1, 2, 3, 4, 5]));
}
