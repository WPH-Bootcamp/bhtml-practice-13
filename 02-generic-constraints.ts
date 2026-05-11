// kalian suatu tempat
// kalian boleh bawa makanan apa saja ke tempat ini, asal tidak berbau menyengat

// masalah tanpa syarat asal bebas
function panjangGenerikSalah<T>(item: T) {
  return item;
}

// console.log(panjangGenerikSalah("halo"));

// harus kasih syarat

interface PunyaLength {
  length: number;
}

function ambilPanjang<T extends PunyaLength>(item: T): number {
  return item.length;
}

// console.log(ambilPanjang("Hello world"));
// console.log(ambilPanjang([10, 15, 20]));
// console.log(ambilPanjang({ length: 100 }));

// keyof constraint = ambil property object, pastikan key nya valid

// k extends keyof T =
// k hanya boleh berisi nama nama yang ada di T

function ambilProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  nama: "budi",
  umur: 25,
  email: "budi@gmail.com",
  alamat: "Indonesia",
};

console.log(user["nama"]);

console.log(user.alamat);

console.log(ambilProperty(user, "nama"));

console.log(ambilProperty(user, "umur"));
console.log(ambilProperty(user, "email"));
console.log(ambilProperty(user, "alamat"));
