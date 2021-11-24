
const User = require('..src/user')
const Scooter = require('..src/scooter')

class ScooterApp {
  static registeredUsers = []
  constructor() {
    this.stations = {
      'Main Street': []
      }
  }
  register(user) {
    if(!ScooterApp.registeredUsers.includes(user.username, user.password, user.age)) {
        ScooterApp.registeredUsers.push(user.username, user.password, user.age)
        console.log('You have been registered')
    } else {
      console.log('user is already registered or age is invalid')
    }
    }
  }


module.exports = ScooterApp

