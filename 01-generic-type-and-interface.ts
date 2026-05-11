export { };

console.log("==========================================");
console.log("   BAGIAN 1: GENERIC TYPE & INTERFACE");
console.log("==========================================\n");

// masalah tanpa generic type
interface BoxString {
  isi: string;
}

interface BoxNumber {
  isi: number;
}

interface BoxUser {
  isi: { nama: string; umur: number };
}

const box1: BoxString = { isi: "Tanpa generic type" };
const box2: BoxNumber = { isi: 20 };
const box3: BoxUser = { isi: { nama: "Budi", umur: 30 } };

console.log(box1);
console.log(box2);
console.log(box3);

// solusi dengan generic type

interface Box<T> {
  isi: T;
}

const box4: Box<string> = { isi: "Pake Generic type" };
const box5: Box<number> = { isi: 100 };
const box6: Box<{ nama: string; umur: number }> = {
  isi: { nama: "Andi", umur: 35 },
};

console.log(box4);
console.log(box5);
console.log(box6);

type Pasangan<A, B> = {
  pertama: A;
  kedua: B;
};

const p1: Pasangan<string, number> = { pertama: "umur", kedua: 25 };
const p2: Pasangan<boolean, string> = { pertama: true, kedua: "lulus" };

console.log(p1);
console.log(p2);

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

interface User {
  id: number;
  nama: string;
}

interface Product {
  id: number;
  harga: number;
  nama: string;
}

function getUser(): ApiResponse<User> {
  return {
    success: true,
    data: { id: 1, nama: "Budi" },
    message: "OK",
  };
}

function getProducts(): ApiResponse<Product> {
  return {
    success: true,
    data: { id: 1, nama: "Laptop", harga: 10000000 },
    message: "OK",
  };
}

const resUser = getUser();
const resProducts = getProducts();

console.log(resUser);
console.log(resProducts);
