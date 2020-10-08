import {Door} from "../src/Door";
import {HundredDoors} from "../src/HundredDoors";

test('100 closed doors', () => {
    const hundredClosedDoors: Door[] = [];
    for (let i = 0; i < 100; i++) {
        hundredClosedDoors.push(new Door(false));
    }
    const hundredDoors = new HundredDoors();
    expect(hundredDoors.visit(0)).toStrictEqual(hundredClosedDoors)
})