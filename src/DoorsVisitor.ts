export class DoorsVisitor {
    private readonly doors: boolean[];

    constructor() {
        this.doors = [];
        for (let i = 0; i < 100; i++) {
            this.doors.push(false);
        }
    };

    visitDoors = (times: number): boolean[] => {
        if (times === 0) {
            return this.doors;
        }
        if (times === 1) {
            return this.doors.map(door => true)
        }
        return this.doors.map(door => true).map((door, index) => {
            if((index + 1) % times === 0) {
                return !door
            }
            return door
        })
    };
}