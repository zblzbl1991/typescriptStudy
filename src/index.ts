function sum(a: number, b: number) {
    return a + b;
}


class Person {
    name: string
    age: number


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    console(): string {

        return `${this.name}今年${this.age}`
    }
}

const p = new Person('zbl', 29)
console.log(p.console())