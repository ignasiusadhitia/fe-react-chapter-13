// Komponen dasar untuk menggambarkan engine
class Engine {
    constructor(type, horsePower) {
        this.type = type;
        this.horsePower = horsePower;
    }

    getEngineInfo() {
        return `Type: ${this.type}, Horse Power: ${this.horsePower} HP`;
    }
}

// Komponen dasar untuk menggambarkan transmission
class Transmission {
    constructor(type) {
        this.type = type;
    }

    getTransmissionType() {
        return `Transmission Type: ${this.type}`;
    }
}

// Komponen dasar untuk menggambarkan wheels
class Wheels {
    constructor(size, type) {
        this.size = size;
        this.type = type;
    }

    getWheelsInfo() {
        return `Size: ${this.size}-inch, Type: ${this.type}`;
    }
}

// Class utama yang menggabungkan komponen engine, transmission, dan wheels
class Car {
    constructor(brand, model, engine, transmission, wheels) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.transmission = transmission;
        this.wheels = wheels;
    }

    getCarInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}\n` +
            `Engine: ${this.engine.getEngineInfo()}\n` +
            `Transmission: ${this.transmission.getTransmissionType()}\n` +
            `Wheels: ${this.wheels.getWheelsInfo()}`;
    }
}

// Membuat instance Engine, Transmission, dan Wheels
const engine = new Engine("V8", 450);
const transmission = new Transmission("Automatic");
const wheels = new Wheels(18, "Alloy");

// Membuat instance Car dengan komponen Engine, Transmission, dan Wheels
const car = new Car("Ford", "Mustang", engine, transmission, wheels);

console.log(car.getCarInfo());
