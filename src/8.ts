{
  const validateKeys = <X extends object, Y extends keyof X>(
    obj: X,
    keys: Y[]
  ): boolean => {
    return keys.every((element) => element in obj);
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
}
