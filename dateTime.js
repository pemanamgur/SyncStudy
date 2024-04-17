// let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getTime()); //epoch time
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());

// let myCreated = new Date(2024, 5, 17, 4, 5, 4);
// let myCreated = new Date(2024, 5, 17, 4, 5, 4);
// let myCreated = new Date(2024, 5, 17);

// let myCreated = new Date("2024-01-17");
// let myCreated = new Date("01-17-2024");
// console.log(myCreated.toLocaleString());
// console.log(myCreated.toDateString());

// let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(Math.floor(Date.now() / 1000));

let myDate = new Date();
console.log(
  myDate.toLocaleString("default", {
    weekday: "long",
  })
);
