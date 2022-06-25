// ClassDiagram_Circle.
class Circle {
    constructor(radius) {
        this.radius = 1.0;
        this.color = "red";
    }
    Circle(radius) {
        this.radius = radius;
    }
    Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return "red";
    }
    setColor(color) {
        this.color = color;
    }
    toString() {
        return "Circle[radius=" + this.radius + ",color=" + this.color + "]";
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

}


