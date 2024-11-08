1.The significance of union and intersection types in Typescript.

Ans:

Union

Union type allows a value to be of multiple types. Useful if the outcome can be of multiple types while retaining strict type checking.

Example: 
type Car = "low cost" | "high cost"
type Shape = "circle" | "rectangle"

const car:Car = "high cost" which is valid.

Intersection

Intersection types requires all multiple values to specified values. Useful for merging and combining multiple types into one type.

Example:

type User = {name:string; age:number}
type Role = { Role:string }

type Worker = User & Role
const worker1:Worker = {name:string; age:number,role:User}