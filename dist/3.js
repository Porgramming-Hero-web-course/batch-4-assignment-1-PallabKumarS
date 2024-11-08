"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        let count = 0;
        const words = sentence.toLowerCase().split(" ");
        words.forEach((element) => {
            if (element === word.toLowerCase()) {
                count++;
            }
        });
        return count;
    };
    console.log(countWordOccurrences("I love typescript", "Typescript"));
}
