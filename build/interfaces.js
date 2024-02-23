"use strict";
const bot1 = {
    id: "1",
    name: "giga"
};
const bot2 = {
    id: 1,
    name: "giga",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log("---------------------");
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm  ${this.name}`;
    }
}
const p = new Pessoa(1, "titan");
console.log(p.sayHello());
