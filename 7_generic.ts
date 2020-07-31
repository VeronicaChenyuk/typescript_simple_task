const arrayOfNumbers: Array<number> = [1, 5, 6, 8]
const arrayOfStrings: Array<string> = ['Hello', 'My', 'Name', 'Is', 'Veronica']


function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
