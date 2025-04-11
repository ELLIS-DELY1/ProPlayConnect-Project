// Day 4: Arrays & Objects

// 1. Array of Favorite Movies
const favoriteMovies = ["RISE", "CREED 1", "CREED 2", "CREED 3"];

// Loop through the array and print each movie
console.log("My Favorite Movies:");
favoriteMovies.forEach((movie, index) => {
  console.log(`${index + 1}. ${movie}`);
});

// 2. Object for a Student
const student = {
  name: "Delys",
  age: 17,
  grades: [85, 90, 78]
};

// Print student details
console.log("\nStudent Details:");
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`); 
console.log(`Grades: ${student.grades.join(", ")}`);