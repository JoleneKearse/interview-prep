// Following along to a freeCodeCamp post: JavaScript Coding Interview Practice – Sample Interview Questions and Solutions at https://www.freecodecamp.org/news/javascript-coding-interview-practice/.

const passengers = [
    {
        id: 1,
        passengerName: "Freddie Mercury",
        isVegetarianOrVegan: false,
        connectedFlights: 2,
    },
    {
        id: 2,
        passengerName: "Amy Winehouse",
        isVegetarianOrVegan: true,
        connectedFlights: 4,
    },
    {
        id: 3,
        passengerName: "Kurt Cobain",
        isVegetarianOrVegan: true,
        connectedFlights: 3,
    },
    {
        id: 3,
        passengerName: "Michael Jackson",
        isVegetarianOrVegan: true,
        connectedFlights: 1,
    },
];

// TODO: Get the passenger's names using the data provided

// Use dot notation on each object in array
const passengerNames = passengers.map((passenger) => passenger.passengerName);
// console.log(passengerNames.join("\n"));

// RESULTS:
// Freddie Mercury
// Amy Winehouse
// Kurt Cobain
// Michael Jackson

// TODO: Return vegetarians/vegans
// filter through array, then return new array of names
const dietRestrictions = passengers
    .filter((passenger) => passenger.isVegetarianOrVegan)
    .map((passenger) => passenger.passengerName);
// console.log(dietRestrictions.join("\n"));

// TODO: Sort passengers by number of connected flights in descending order.
// sort array, then reverse
const numOfConnections = passengers
    .sort(
        (passenger1, passenger2) =>
            passenger2.connectedFlights - passenger1.connectedFlights
    )
    .map((passenger) => passenger.passengerName);
console.log(numOfConnections.join("\n"));
