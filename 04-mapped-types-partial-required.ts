// required = "wajib diisi semua"
// partial = "boleh sebagian"
// read-only = "baca doang"

interface Produk {
  id: number;
  nama: string;
  harga: number;
  stok: number;
}

const produkAsli: Produk = {
  id: 1,
  nama: "Kopi ABC Susu",
  harga: 3000,
  stok: 50,
};

// console.log(produkAsli);

type ProdukUpdate = Partial<Produk>;

// const update1: ProdukUpdate = { harga: 5000 };
// const update2: ProdukUpdate = { stok: 100, nama: "Kopi Kapal Api" };
// const update3: ProdukUpdate = {};

// console.log(update1);
// console.log(update2);
// console.log(update3);

function updateProduk(asli: Produk, perubahan: Partial<Produk>): Produk {
  return { ...asli, ...perubahan };
}

const produkBaru1 = updateProduk(produkAsli, { harga: 7000 });
const produkBaru2 = updateProduk(produkAsli, {
  nama: "Kopi Kapal Api",
  stok: 100,
});

// console.log(produkBaru1);
// console.log(produkBaru2);

// required

interface ProdukOpsional {
  id?: number;
  nama?: string;
  harga?: number;
  stok?: number;
}

const draft: ProdukOpsional = { nama: "Mie Goreng" };

type ProdukLengkap = Required<ProdukOpsional>;

const produkLengkap: ProdukLengkap = {
  id: 1,
  nama: "Mie Goreng",
  harga: 15000,
  stok: 30,
};

console.log("produk optional", draft);
console.log("produk lengkap pake required", produkLengkap);

// readonly

type ProdukKunci = Readonly<Produk>;

const produkKunci: ProdukKunci = {
  id: 7,
  nama: "Produk special",
  harga: 10000,
  stok: 5,
};

console.log(
  "materi dengan readonly, akses object produkKunci",
  produkKunci.harga,
);

// produkKunci.harga = 20000;
