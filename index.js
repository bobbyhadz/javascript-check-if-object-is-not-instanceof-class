// EXAMPLE 1 - Check if Object is an instance of Class in JavaScript

class Person {}

const p1 = new Person();

if (p1 instanceof Person) {
  console.log('✅ is instance of Person');
} else {
  console.log('⛔️ is not instance of Person');
}

class Animal {}
console.log(p1 instanceof Animal); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if an Object is NOT an instanceof a Class in JavaScript

// class Person {}
// class Animal {}

// const p1 = new Person();

// if (!(p1 instanceof Animal)) {
//   console.log('✅ Object is not instance of Animal');
// } else {
//   console.log('⛔️ Object is instance of Animal');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if an Object is NOT an instanceof a Class using boolean comparison

// class Person {}
// class Animal {}

// const p1 = new Person();

// if (p1 instanceof Animal === false) {
//   console.log('✅ Object is not instance of Animal');
// } else {
//   console.log('⛔️ Object is instance of Animal');
// }
