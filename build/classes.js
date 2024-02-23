"use strict";
class Persona {
    constructor(nome, stregth, skill) {
        this.nome = nome;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Persona("ryu", 10, 80);
p1.attack();
class Magia extends Persona {
    constructor(nome, stregth, skill, magicPoints) {
        super(nome, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magia("Mago", 9, 30, 100);
