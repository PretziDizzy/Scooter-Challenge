const User = require(‘..src/user’)

describe('User class', () => {
test(‘must have a username’, () => {
    const userName1 = new User("Preeti")
    expect(userName1.userName).toBe("Preeti")
})
})