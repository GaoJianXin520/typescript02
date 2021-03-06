import { a } from './a';
function sum(a: number, b: number): number {
    return a + b;
}

const name = {name: 'abc'}
console.log(name);

let res = sum(1, 2);
console.log(res);
console.log(a);

class Person {
    name: string;
    static readonly age: number = 10;

    constructor(name: string) {
        this.name = name;
    }

    say() {
        console.log('abc');
    }
}

let p = new Person('abc');
p.say();


abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract say(): void;
}

class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    say() {
        console.log('dog');
    }
}

class Cat extends Animal {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    say() {
        console.log('cat');
    }
}

const dog = new Dog('dog1', 10);
const cat = new Cat('cat1', 10);
console.log(dog);
console.log(cat);

type mytype = {
    name: string,
    age: number
};

const obj: mytype = {
    name: 'abc',
    age: 10
}

interface myInterface {
    name: string;
    age: number;
}

const obj2: myInterface = {
    name: 'abc',
    age: 10
}

interface myInterface2 {
    name: string;
    age: number;

    say(): void;
}

class MyClass implements myInterface2 {
    public name: string;
    age: number;
    private _num: number;

    constructor(name: string, age: number, num: number) {
        this.name = name;
        this.age = age;
        this._num = num;
    }

    get num() {
        return this._num;
    }

    set num(num: number) {
        this._num = num;
    }

    say() {
        console.log('abc');
    }
}

function fn<T>(a: T): T {
    return a;
}

let fnRes = fn<string>('abc');
let fnRes2 = fn<number>(123);


function fn2<T, K>(a: T, b: K): K {
    return b;
}

fn2<string, number>('abc', 123);

interface myInterFace3 {
    name: string
}

function fn3<T extends myInterFace3>(a: T): string {
    return a.name;
}

fn3({name: 'abc'});

class Class1<T> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }
}

const c1 = new Class1<string>('abc');
console.log(c1);
