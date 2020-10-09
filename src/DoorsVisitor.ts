import {door} from "./door";

export class DoorsVisitor {
    private readonly doors: door[];

    constructor() {
        this.doors = [];
        for (let i = 0; i < 100; i++) {
            this.doors.push(false);
        }
    };

    visitDoors = (times: number): door[] => {
        return times === 0 ?
            this.doors :
            this.visitDoors(times - 1)
                .map((door, index) => (index + 1) % times === 0 ? !door : door);
    };
}