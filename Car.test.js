
const Car = require("./Car")


describe('can get and set properties in Car', () =>{
    
    car = new Car("Toyota", 5, "motor");
    
    test('can get car manufacturer', () => {
        expected = "Toyota";
        actual = car.getManufacturer();
        expect(actual).toBe(expected);
    });

    test('can get car price', () => {
        expected = 5;
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
        expected = 6;
        car.setPrice(6);
        actual = car.getPrice();
        expect(actual).toBe(expected);
    });

    test('can set car engineType', () => {
        expected = "diesel";
        car.setEngineType("diesel");
        actual = car.getEngineType();
        expect(actual).toBe(expected);
    });
})
