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

console.log(produkAsli);
