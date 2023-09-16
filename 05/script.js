let emp = [
  {
    name: "abc",
    age: 30,
  },

  {
    name: "edf",
    age: 20,
  },

  {
    name: "ghj",
    age: 25,
  },

  {
    name: "xyz",
    age: 28,
  },
];

const result = emp.filter((value)=>{
  return value.age>26;
});

// Function to format and print the values in the div
function printValuesInDiv(values) {
  const div = document.getElementById("app");
  
  // Create an HTML string to display the values
  const htmlString = values.map((value) => {
    return `<p>Name: ${value.name}, Age: ${value.age}</p>`;
  }).join("");

  div.innerHTML = htmlString;
}

printValuesInDiv(result);


// What is hoisting
// Diff b/w var let
// What is scope and what types of scopes in js
// Map and filter
// Types of events in js
// What is onBlur()
// How to handle errors in js
// What is promise
// Call back function
// Example of promise function
// What is prototype
// What is closure































