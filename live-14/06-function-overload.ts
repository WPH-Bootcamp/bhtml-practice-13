function badCode(input: string | number): string | number {
  if (typeof input === "string") return input + " " + input;
  return input * 2;
}

const badCode1 = badCode("Hallo");
const badCode2 = badCode(10);

console.log("Hasil string", badCode1);
console.log("Hasil number", badCode2);

// function overload
function cleanCode(input: string): string;
function cleanCode(input: number): number;

function cleanCode(input: string | number): string | number {
  if (typeof input === "string") return input + " " + input;
  return input * 3;
}

const cleanCode1 = cleanCode("Welcome");
const cleanCode2 = cleanCode(15);

console.log("Hasil string: ", cleanCode1);
console.log("Hasil number: ", cleanCode2);

console.log("uppercase hasil string:", cleanCode1.toUpperCase());
console.log("Fixed hasil number:", cleanCode2.toFixed(2));
