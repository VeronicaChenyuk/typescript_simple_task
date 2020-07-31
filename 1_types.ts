const isFetching: boolean = true
const idLoading: boolean = false
const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 2, 3, 4, 6, 5, 7, 8]
const numberArray2: Array<number> = [1, 2, 5, 1, 6, 1, 5, 9]// generic type

const words: string[] = ['Hello', 'TypeScript']

// Tuple 

const contact: [string, number] = ['Veronica', 89154451835]


// Any

let variable: any = 42

variable = 'New string'
variable = []


//  ====

function sayName(name: string): void {
  console.log(name)
}
sayName('Кукуруз')

// Never

function throwArray(message: string): never {
  throw new Error(message)
}

function infinite() {
  while (true) {

  }
}

// Type

type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 123
const id2: ID = '1236'

// Null Undefined

type SomeType = string | null | undefined

