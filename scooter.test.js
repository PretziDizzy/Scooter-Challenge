const Scooter = require('./scooter')

test('must have a serial number', ()=> {
    const serialno = new Scooter()
    expect(serialno.serialNumber).toBe(102)
})

test('must have a station', ()=> {
    const station1 = new Scooter("DFW")
    expect(station1.station).toBe("DFW")
})

test('must have a user', ()=> {
    const user1 = new Scooter("name")
    expect(user1.user).toBe("name")
})