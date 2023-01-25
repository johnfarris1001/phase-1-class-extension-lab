// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let perimeter = 0
        this.sides.forEach(side => perimeter += side)
        return perimeter
    }
}

class Triangle extends Polygon {
    constructor(sides) {
        super(sides)
    }

    get isValid() {
        return (this.sides.length === 3) && (this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[2] + this.sides[0] > this.sides[1])
    }
}

class Square extends Polygon {
    constructor(sides) {
        super(sides)

    }
    get isValid() {
        return (this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3])
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}
