class Person2{
    private _name:string
    private _sex:'男'|'女'

    constructor(name: string, sex: "男" | "女") {
        this._name = name;
        this._sex = sex;
    }

    say(){
        console.log('默认')
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get sex(): "男" | "女" {
        return this._sex;
    }

    set sex(value: "男" | "女") {
        this._sex = value;
    }
}
class Man extends Person2{


    say() {
       console.log(this.sex)
    }
}
class Woman extends Person2{

}
let man = new Man('zbl','男');
let woman = new Woman('lzh','女');
man.say()
woman.say()
