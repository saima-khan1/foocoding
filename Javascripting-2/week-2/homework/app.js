// #1. write a program that doubles the odd numbers in an array using map and filter
const myNumbers = [1, 2, 3, 4];
const doubleOddNumbers = myNumbers.filter((n) => n % 2 !== 0).map((n) => n * 2);
console.log(doubleOddNumbers);

// #2. computes how much Maartje has earned by completing these tasks, using map and filter, For the 'summing part' you can try your luck with reduce; alternatively, you may use forEach or a for loop.
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
];
const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
  {
    name: 'Look at application assignments new student',
    duration: 40,
  },
];

const tasks = monday.concat(tuesday);

const durations = tasks.map((task) => task.duration / 60);
console.log('durations in hours: ', durations);
const filteredDurations = durations.filter((duration) => duration >= 2);
console.log('List of durations which are 2hrs or more : ', filteredDurations);
const totalEarnings = filteredDurations.reduce(
  (acc, duration) => acc + duration * 20,
  0
);
const formattedEarnings = `€${totalEarnings.toFixed(2)}`;

console.log('Total earnings of  Maartje is: ', formattedEarnings);
