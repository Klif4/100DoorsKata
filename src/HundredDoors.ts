import {Door} from "./Door";

export class HundredDoors {
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