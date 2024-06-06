import * as readlineSync from 'readline-sync';

class BusinessMan {
    name: string;
    schedules: Record<number, string>;

    constructor(name: string) {
        this.name = name;
        this.schedules = {
            1: "Work from 9 AM to 5 PM",
            2: "Go on a business trip",
            3: "Attend meetings from 10 AM to 3 PM",
            4: "Work remotely from 12 PM to 6 PM",
            5: "Take a day off",
            6: "Work from home from 8 AM to 12 PM",
            7: "Work on projects from 2 PM to 8 PM"
        };
    }

    checkSchedule(day: number, time: number): string {
        return this.schedules[day] || "No schedule found for this day.";
    }
}

function main() {
    let choice: string = 'y';
    const name: string = "Raheel";
    const raheel = new BusinessMan(name);

    do {
        console.log(`Welcome, ${name}!`);
        let day: number = parseInt(readlineSync.question("Enter the day (1-7): "));
        let time: number = parseInt(readlineSync.question("Enter the time (0-23): "));

        let schedule: string = raheel.checkSchedule(day, time);
        console.log(schedule);

        choice = readlineSync.question("Do you want to check another day? (y/n): ");
    } while (choice.toLowerCase() === 'y');

    console.log(`Goodbye, ${name}!`);
}

main();
