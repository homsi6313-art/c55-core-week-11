const Time = require('./task-1/Time');

const myTime = new Time(12, 35, 0);

console.log(myTime.toString()); // 12:35:00

myTime.addMinutes(25);
console.log(myTime.toString()); // 13:00:00

myTime.addHours(12);
console.log(myTime.toString()); // 01:00:00

myTime.addSeconds(-3600);
console.log(myTime.toString()); // 00:00:00