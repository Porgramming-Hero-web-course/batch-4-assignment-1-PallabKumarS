{
  const countWordOccurrences = (sentence: string, word: string): number => {
    let count:number = 0;
    const words: string[] = sentence.toLowerCase().split(" ");

    words.forEach((element) => {
      if (element === word.toLowerCase()) {
        count++;
      }
    });

    return count;
  };

  console.log(countWordOccurrences("I love typescript", "Typescript"));
}
