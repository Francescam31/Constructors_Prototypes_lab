
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
        actual = car.setManufacturer("Ford");
        expect(actual).toBe(expected);
    });
})
