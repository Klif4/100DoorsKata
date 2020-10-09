import {DoorsVisitor} from "../src/DoorsVisitor";

const doorsVisitor = new DoorsVisitor();

test('100 closed doors', () => {
    const hundredClosedDoors: boolean[] = [];
    for (let i = 0; i < 100; i++) {
        hundredClosedDoors.push(false);
    }
    expect(doorsVisitor.visitDoors(0)).toStrictEqual(hundredClosedDoors)
})

test('first visit must open all doors', () => {
    const hundredOpenDoors: boolean[] = [];
    for (let i = 0; i < 100; i++) {
        hundredOpenDoors.push(true);
    }
    expect(doorsVisitor.visitDoors(1)).toStrictEqual(hundredOpenDoors)
})

test('second visit must close all second doors', () => {
    const hundredDoors: boolean[] = [];
    for (let i = 0; i<100; i++) {
        hundredDoors.push(true)
    }
    for (let i = 1; i<100; i+=2) {
        hundredDoors[i] = false
    }
    expect(doorsVisitor.visitDoors(2)).toStrictEqual(hundredDoors)
})