const user = {
    name: 'Isao',
    cities: ['Niigata', 'Tokyo', 'Osaka'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        });
    }
};

user.printPlacesLived();


const multiplier = {
    numbers: [2, 4, 6],
    muliblyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.muliblyBy)
    }
}

console.log(multiplier.multiply());