// write a class to calculate uber price.
class Uber {
    constructor(name, start, end) {
        this.name = name;
        this.start = start;
        this.end = end;
    }
    calculatePrice(distance, time) {
        let price = distance * time;
        return price;
    }
}
