"use strict";
{
    const removeDuplicates = (array) => {
        const newArray = [];
        array.forEach((element) => {
            if (newArray.indexOf(element) === -1) {
                newArray.push(element);
            }
        });
        return newArray;
    };
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
