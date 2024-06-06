"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
class BusinessMan {
    name;
    schedules;
    constructor(name) {
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
    checkSchedule(day, time) {
        return this.schedules[day] || "No schedule found for this day.";
    }
}
function main() {
    let choice = 'y';
    const name = "Raheel";
    const raheel = new BusinessMan(name);
    do {
        console.log(`Welcome, ${name}!`);
        let day = parseInt(readlineSync.question("Enter the day (1-7): "));
        let time = parseInt(readlineSync.question("Enter the time (0-23): "));
        let schedule = raheel.checkSchedule(day, time);
        console.log(schedule);
        choice = readlineSync.question("Do you want to check another day? (y/n): ");
    } while (choice.toLowerCase() === 'y');
    console.log(`Goodbye, ${name}!`);
}
main();
