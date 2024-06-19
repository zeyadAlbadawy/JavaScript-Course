'using strict';

const mark = {
    name: 'Mark Miller', 
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
}

const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(john.calcBmi());