

const Dealership = function(name, maxNumOfCars, carsInStock) {
    this.name = name;
    this.maxNumOfCars = maxNumOfCars;
    this.carsInStock = carsInStock;
}

Dealership.prototype.setName = function(newName) {
    this.name = newName;
}
Dealership.prototype.setMaxNumOfCars = function(newMaxNumOfCars) {
    this.maxNumOfCars = newMaxNumOfCars;
}
Dealership.prototype.setCarsInStock = function(newCarsInStock) {
    this.carsInStock = newCarsInStock;
}

Dealership.prototype.getName = function() {return this.name}
Dealership.prototype.getMaxNumOfCars = function() {return this.maxNumOfCars}
Dealership.prototype.getCarsInStock = function() {return this.carsInStock}




Dealership.prototype.countNumberOfCarsInStock = function() {
    totalCars = 0;
    for(car of this.carsInStock){
        totalCars++;
    }
    return totalCars;
}

Dealership.prototype.addCarToStock = function(car) {
    this.carsInStock.push(car);
}

Dealership.prototype.getCarManufacters = function() {
    manufacturers = [];
    for(car of this.carsInStock){

    }
}



module.exports = Dealership;
