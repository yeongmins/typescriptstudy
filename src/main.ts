// // 문자
// let str: string
// let red: string = "Red"
// let green: string = "Green" 
// let myColor: string = `My color is ${red}.` // 템플릿 리터럴 방식
// let yourColor: string = "Your color is" + green

// // 숫자
// // let num: number
// let integer: number = 6
// let float: number = 3.14
// let infinity: number = Infinity
// let nan: number = NaN

// // 불린
// let isBoolean: boolean
// let isDone: boolean = false

// // Null / Undifined
// let nul: null
// let und: undefined
// let num: number
// num = 123

// // 배열
// const fruits: string[] = ["Apple", "banana", "Cherry"]
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7]
// const union: (string|number)[] = ["Apple", 1, 2, "Banana", 3]
// const array: number[] = [1, 2, 3] 

// // 객체
// const obj: object = {}
// const arr: object = []
// const func: object = function () {}

// interface User {
//   name: string
//   age: number
//   isValid: boolean
// }

// const userA: User = {
//   name: "Heropy",
//   age: 85,
//   isValid: true
// }

// const userB: User = {
//   name: "Neo",
//   age: 22,
//   isValid: false
// }

// // 함수
// const add = function (x: number, y: number): number {
//   return x + y
// }

// const a: number = add(1, 2)

// const hello = function (): void{
//   console.log("Hello world~")
// }

// const h: void = hello()

// Any
// let hello: any = "Hello world"
// hello = 123
// hello = false
// hello = null
// hello = {}
// hello = []
// hello = function () {}

// Unknown
// const a: any = 123
// const u: unknown = 123

// const any: any = a
// const boo: boolean = a
// const num: number = a
// const arr: string[] = a
// const obj: { x: string, y: number } = u

// Tuple
// const tuple: [string, number, boolean] = ["a", 1, false]
// const users: [number, string, boolean][]
//  = [[1, "Neo", true], [2, "Evan", false], [3, "Lewis", true]]

// Void
// function hello(msg: string): void {
//   console.log(`Hello ${msg}`)
// }
// const hi: void = hello("world")

// Never
// const nev: string[] = []
// nev.push(3)

// Union
// let union: (string | number | boolean)[]
// union = "Hello type!"
// union = 123
// union = false

// Intersection
interface User {
  name: string,
  age: number
}
interface Validation {
  isValid: boolean
}
const heropy: User & Validation = {
  name: "Neo",
  age: 85,
  isValid: false
}