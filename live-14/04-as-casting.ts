const elementPalsu = { tagName: "INPUT", value: "halo" };
const sebagaiInput = elementPalsu as { tagName: string; value: string };
console.log("Value input: ", sebagaiInput.value);
console.log();

interface User {
  nama: string;
  umur: number;
}

function validasiUser(obj: unknown): obj is User {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "nama" in obj &&
    "umur" in obj &&
    typeof (obj as User).nama === "string" &&
    typeof (obj as User).umur === "number"
  );
}

const jsonString = '{"nama":"Budi", "umur":25}';
const raw: unknown = JSON.parse(jsonString);

if (validasiUser(raw)) {
  console.log("user valid:", raw.nama, raw.umur);
} else {
  console.log("JSON tidak valid");
}

console.log();

//kapan bahanya

const angka = 42 as unknown as string;
try {
  console.log("Hasil:", angka.toUpperCase());
} catch (err) {
  console.log((err as Error).message);
}

console.log();
