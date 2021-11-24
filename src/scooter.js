class Scooter{

    static serialNumberCount= 100
    constructor(station, user) {
        this.serialNumber = Scooter.serialNumberCount
        Scooter.serialNumber += 1
        this.station = station
        this.user = user 
    }
    // recharge() {
    //     return console.log("")
    // }
}

module.exports = Scooter;

const Scooter1 = new Scooter('main','Preeti');
const Scooter2 = new Scooter('main','Michael');
console.log(Scooter1.serialNumber);
console.log(Scooter2.serialNumber);
