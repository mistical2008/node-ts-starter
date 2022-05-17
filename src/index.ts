import { find } from './fp-ts/nullable'
import { findIndex } from './fp-ts'
import { parse } from './fp-ts/exeptions'

const array = [1, 2, 3, 4, 5]

const index = findIndex(array, (n) => n === 4)
console.log('findIndex of 4: %o', index)

const finded = find(array, (n) => n >= 3)
console.log('find > 3: %o', finded)

const parsedStr = parse('{"name": "hello" }')
console.log('parse: %o', parsedStr)
console.log({ parsedStr })
