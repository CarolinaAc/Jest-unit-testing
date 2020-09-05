const isAanagram = require('./anagram')

test('isAnagram function exist', () => {
  expect(typeof isAanagram).toEqual('function')
})

test('"cinema"  is an anagram of "iceman"', () => {
  expect(isAanagram('cinema', 'iceman')).toBeTruthy()
})

test('"Dormitory"  is an anagram of "dirty room##"', () => {
  expect(isAanagram('Dormitory', 'dirty Room')).toBeTruthy()
})

test('"Hello"  is NOT an anagram of "aloha"', () => {
  expect(isAanagram('Hello', 'aloha Room')).toBeFalsy()
})
