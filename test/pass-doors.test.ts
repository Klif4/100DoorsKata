class Door {
    private isOpen: boolean;

    constructor(isOpen: boolean) {
        this.isOpen = isOpen;
    }
}

class HundredDoors {
    private readonly doors: Door[];

    constructor() {
        this.doors = [];
        for (let i = 0; i < 100; i++) {
            this.doors.push(new Door(false));
        }
    };

    visit = (times: number): Door[] => {
        return this.doors;
    };
}

test('100 closed doors', () => {
    const hundredClosedDoors: Door[] = [];
    for (let i = 0; i < 100; i++) {
        hundredClosedDoors.push(new Door(false));
    }
    const hundredDoors = new HundredDoors();
    expect(hundredDoors.visit(0)).toStrictEqual(hundredClosedDoors)
})