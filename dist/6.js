"use strict";
{
    const updateProfile = (obj, updates) => {
        return Object.assign(Object.assign({}, obj), updates);
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
}
