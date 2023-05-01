// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("sentenceMaker", () => {
  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {
    expect(sentenceMaker(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Test Output:
// FAIL  ./code-challenges.test.js
// sentenceMaker
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized

// ● sentenceMaker › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//   ReferenceError: sentenceMaker is not defined

//     29 |
//     30 |   it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {
//   > 31 |     expect(sentenceMaker(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//        |     ^
//     32 |   })
//     33 | })
//     34 | // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//     at Object.expect (code-challenges.test.js:31:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.172 s
// Ran all test suites.

// b) Create the function that makes the test pass.

// This function takes an array of people objects as an argument
// const sentenceMaker = (people) => {
     // Map over the array and for each person object, create a new sentence
//   return people.map(person => {
       // Create a new variable that capitalizes the first letter of each word in the person's name
//     const capitalizedName = person.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
       // Return a sentence that includes the capitalized name and the person's occupation
//     return `${capitalizedName} is ${person.occupation}.`
//   })
// }

// Output:
// PASS  ./code-challenges.test.js
// sentenceMaker
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.163 s, estimated 1 s
// Ran all test suites.

// Refactor:

// This function takes an array of people objects as an argument
const sentenceMaker = (people) => {
  // Map over the array and for each person object, create a new sentence
  people.map(person => {
    // Create a new variable that capitalizes the first letter of each word in the person's name and joins the words with a space
    const capitalizedName = person.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    // Return a sentence that includes the capitalized name and the person's occupation
    return `${capitalizedName} is ${person.occupation}.`
  })
}
  

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe('nothingButRemainders', () => {
  it('should return an array of only the remainders of the numbers when divided by 3', () => {
    expect(nothingButRemainders(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(nothingButRemainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// Test Output:
// FAIL  ./code-challenges.test.js
// sentenceMaker
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// nothingButRemainders
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// sumNumbersCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// ● nothingButRemainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//   ReferenceError: nothingButRemainders is not defined

//      96 | describe('nothingButRemainders', () => {
//      97 |   it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
//   >  98 |     expect(nothingButRemainders(hodgepodge1)).toEqual([23, "Heyyyy!", 45, -10, 0, "Yo", false])
//         |     ^
//      99 |     expect(nothingButRemainders(hodgepodge2)).toEqual([5, "Hola", 43, -34, "greetings", true])
//     100 |   })
//     101 | })

//     at Object.expect (code-challenges.test.js:98:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.195 s, estimated 1 s
// Ran all test suites.

// b) Create the function that makes the test pass.

// This function takes an array as an argument
const nothingButRemainders = (array) => {
  // Filter out all elements that are not of type 'number'
  const numbersOnly = array.filter((element) => typeof element === 'number')
  // Map over the filtered array and for each element, calculate the remainder when divided by 3
  const remainders = numbersOnly.map((element) => element % 3)
  // Return the array of remainders
  return remainders
}

// Output:
// PASS  ./code-challenges.test.js
// sentenceMaker
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// nothingButRemainders
//   ✓ should return an array of only the remainders of the numbers when divided by 3
// sumNumbersCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.171 s
// Ran all test suites.
// ✨  Done in 0.93s.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe('sumNumbersCubed', () => {
  it('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
    expect(sumNumbersCubed(cubeAndSum1)).toEqual(99)
    expect(sumNumbersCubed(cubeAndSum2)).toEqual(1125)
  })
})

// Test Output:
// FAIL  ./code-challenges.test.js
// sentenceMaker
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
// sumNumbersCubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed

// ● sumNumbersCubed › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: sumNumbersCubed is not defined

//     107 | describe('sumNumbersCubed', () => {
//     108 |   it('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
//   > 109 |     expect(sumNumbersCubed(cubeAndSum1)).toEqual(99)
//         |     ^
//     110 |     expect(sumNumbersCubed(cubeAndSum2)).toEqual(1125)
//     111 |   })
//     112 | })

//     at Object.expect (code-challenges.test.js:109:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.176 s, estimated 1 s
// Ran all test suites.


// b) Create the function that makes the test pass.

// This function takes an array as an argument
// const sumNumbersCubed = (array) => {
// Initialize a variable to hold the sum of the cubed numbers
//   let cubedArray = 0
// Loop through the array and for each element, cube the number and add it to the sum
//  for (let i = 0; i < array.length; i ++){
//     cubedArray += Math.pow(array[i],3)
//   }
// Return the sum of the cubed numbers
// return cubedArray
// }

// Output:
// PASS  ./code-challenges.test.js
// sentenceMaker
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// sumNumbersCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.165 s
// Ran all test suites.
// ✨  Done in 1.19s.

// Refactor:

// This function takes an array as an argument
const sumNumbersCubed = (array) => {
  // Use the `reduce` method to compute the sum of the cubed numbers in the array
  return array.reduce((sum, num) => sum + Math.pow(num, 3), 0)
}