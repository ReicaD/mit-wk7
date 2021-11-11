var salamu = "Elizabeth,jose,Anita";

function Greet(name) {
  if (typeof name === "null") {
    return "Hello, there";
  } else {
    return "HELLO" + " " + name.toUpperCase();
  }
}

console.log(Greet(salamu));


