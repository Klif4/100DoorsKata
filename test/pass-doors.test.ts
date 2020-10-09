import {DoorsVisitor} from "../src/DoorsVisitor";
import {door} from "../src/door";

const doorsVisitor = new DoorsVisitor();

test('100 closed doors', () => {
    const hundredClosedDoors: door[] = [];
    for (let i = 0; i < 100; i++) {
        hundredClosedDoors.push(false);
    }
    expect(doorsVisitor.visitDoors(0)).toStrictEqual(hundredClosedDoors)
})

test('first visit must open all doors', () => {
    const hundredOpenDoors: door[] = [];
    for (let i = 0; i < 100; i++) {
        hundredOpenDoors.push(true);
    }
    expect(doorsVisitor.visitDoors(1)).toStrictEqual(hundredOpenDoors)
})

test('second visit must close all second doors', () => {
    const hundredDoors: door[] = [];
    for (let i = 0; i<100; i++) {
        hundredDoors.push(true)
    }
    for (let i = 1; i<100; i+=2) {
        hundredDoors[i] = !hundredDoors[i]
    }
    expect(doorsVisitor.visitDoors(2)).toStrictEqual(hundredDoors)
})

test('thirst visit must close all thirst doors', () => {
    const hundredDoors: door[] = [];
    for (let i = 0; i<100; i++) {
        hundredDoors.push(true)
    }
    for (let i = 1; i<100; i+=2) {
        hundredDoors[i] = !hundredDoors[i]
    }
    for (let i = 2; i<100; i+=3) {
        hundredDoors[i] = !hundredDoors[i]
    }
    expect(doorsVisitor.visitDoors(3)).toStrictEqual(hundredDoors)
})

test('fourth visit must close all fourth doors', () => {
    const hundredDoors: door[] = [];
    for (let i = 0; i<100; i++) {
        hundredDoors.push(true)
    }
    for (let i = 1; i<100; i+=2) {
        hundredDoors[i] = !hundredDoors[i]
    }
    for (let i = 2; i<100; i+=3) {
        hundredDoors[i] = !hundredDoors[i]
    }
    for (let i = 3; i<100; i+=4) {
        hundredDoors[i] = !hundredDoors[i]
    }
    expect(doorsVisitor.visitDoors(4)).toStrictEqual(hundredDoors)
})