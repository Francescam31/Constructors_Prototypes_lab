const Dealership = require("./Dealership")
const Car = require("./Car")

describe('added methods', () =>{

    car1 = new Car("Toyota", 5, "motor");
    car2 = new Car("Honda", 6, "motor");
    car3 = new Car("Ford", 7, "diesel");
    car4 = new Car("Ford", 8, "diesel");
    
    dealership = new Dealership("Car Dealership", 100, [car1, car2, car3]);

    test('can count number of cars in stock', () => {
        expected = 3;
        actual = dealership.countNumberOfCarsInStock();
        expect(actual).toBe(expected);
    });

    test('can add car to stock', () => {
        expected = 4;
        dealership.addCarToStock(car4)
        actual = dealership.countNumberOfCarsInStock();
        expect(actual).toBe(expected);
    });

    test('can return each car\'s manufacturer', () => {
        expected = ["Toyota", "Honda", "Ford", "Ford",];
        actual = dealership.getCarManufacturers();
        expect(actual).toStrictEqual(expected);
    });

    // test('can return all cars for a given manufacturer', () => {
    //     expected = [car3, car4];
    //     actual = dealership.getCarsGivenManufacturer("Ford");
    //     expect(actual).toBe(expected);
    // });

    test('can return total value of cars in stock', () => {
        expected = 26;
        actual = dealership.getTotalValueOfCarsInStock();
        expect(actual).toStrictEqual(expected);
    });
})