
const Car = require("./Car")


describe('can get and set properties in Car', () =>{
    
    car = new Car("Toyota", 500, "motor");
    
    test('can get car manufacturer', () => {
        expected = "Toyota";
        actual = car.getManufacturer();
        expect(actual).toBe(expected);
    });

    test('can get car price', () => {
        expected = 500;
        actual = car.getPrice();
        expect(actual).toBe(expected);
    });

    test('can get car engine type', () => {
        expected = "motor";
        actual = car.getEngineType();
        expect(actual).toBe(expected);
    });

    test('can set car manufacturer', () => {
        expected = "Ford";
        car.setManufacturer("Ford");
        actual = car.getManufacturer();
        expect(actual).toBe(expected);
    });

    test('can set car price', () => {
        expected = 600;
        car.setPrice(600);
        actual = car.getPrice();
        expect(actual).toBe(expected);
    });

    test('can set car engineType', () => {
        expected = "Diesel";
        car.setEngineType("Diesel");
        actual = car.getEngineType();
        expect(actual).toBe(expected);
    });
})
