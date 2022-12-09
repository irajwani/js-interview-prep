// Write a function that reverses the words of a string
// "i like imad" => "i ekil dami"

const a = "donuts";

let reversed = "";

function reverse(str, len) {
  if (str.length == len) return;
  reverse(str, len + 1)
  reversed += str[len];
}

reverse(a, 0);

console.log(reversed);
