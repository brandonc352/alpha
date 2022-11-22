const numberInput = Number(process.argv[2]);
let output = Number(process.argv[2]);

if (numberInput % 3 ==0) {
  output = 'Java';
}

if (numberInput % 5 ==0) {
  output = 'Script';
}

if (numberInput % 5 ==0 && numberInput % 3 ==0) {
  output = "JavaScript";
}

console.log(output);