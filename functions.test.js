const functions = require('./functions')
//will run before and after each test
// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())
//will run before all runs and ater all runs
// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

//will run in specific tests
const nameCheck = () => console.log('Checking name...')

describe('Checking Names', () => {
  beforeEach(() => nameCheck())
  test('user is Jeff', () => {
    const user = 'Jeff'
    expect(user).toBe('Jeff')
  })
  test('user is Karen', () => {
    const user = 'Karen'
    expect(user).toBe('Karen')
  })
})

const initDatabase = () => console.log('Database Initialize')
const closeDatabase = () => console.log('Database Closed')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 not to equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

test('Should be truthy', () => {
  expect(functions.checkValue(3)).toBeTruthy()
})

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

//toBe won't work in objects or arrays because of where they are stored in memory. Two objects are never the same
test('user should be brad traversy object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy',
  })
})

// Less than and greater than. there is also the option of <= and >=
test('Should be under 1600', () => {
  const load1 = 800
  const load2 = 700
  expect(load1 + load2).toBeLessThan(1600)
})

//Regex. works the same way as regexs.

test('There is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin']
  expect(usernames).toContain('admin')
})

// Working with Async data
// Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1) // if we don't use expect.assertions() and miss using the return fucntion it will pass even if the test shouldnt

  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham')
  })
})

//Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})
