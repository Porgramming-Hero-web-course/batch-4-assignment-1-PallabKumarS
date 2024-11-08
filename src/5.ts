{
  function getProperty<X extends object, Y extends keyof X>(obj: X, key: Y) {
    if (String(key) in obj) {
      return obj[key];
    }
  }

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
}
