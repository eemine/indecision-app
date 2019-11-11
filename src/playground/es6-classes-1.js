class Person {
constructor(name='Anonymous', age=0) {
this.name = name;
this.age = age;
}
getGretting() {
    return `Hi. I am ${this.name}!`;
}
getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
    }
};

const me = new Student ('Amina Rahimli', 27, 'Computer Science');
console.log(me.getDescription);

const other = new Student()
console.log(other.getDescription);
