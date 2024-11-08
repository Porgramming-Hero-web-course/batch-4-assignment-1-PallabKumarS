{
  const countWordOccurrences = (sentence: string, word: string): number => {
    let count = 0;
    const words: string[] = sentence.toLowerCase().split(" ");

    words.forEach((element) => {
      if (element === word) {
        count++;
      }
    });

    return count;
  };

  console.log(countWordOccurrences("I love typescript", "typescript"));
}
