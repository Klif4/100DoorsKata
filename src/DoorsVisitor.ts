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
        return this.openOrCloseCorrectDoors(this.visitDoors(times - 1), times)
    };

    private openOrCloseCorrectDoors = (doors: boolean[], correctDoors: number): boolean[] => {
       return doors.map((door, index) => (index + 1) % correctDoors === 0 ? !door : door)
    }
}