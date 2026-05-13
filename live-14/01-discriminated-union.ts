export { };

console.log("==========================================");
console.log("   BAGIAN 1: DISCRIMINATED UNION");
console.log("==========================================\n");

type Result<T> =
  | { type: "success"; data: T }
  | { type: "error"; message: string };

function fetchUser(id: number): Result<{ nama: string; umur: number }> {
  if (id === 1) {
    return { type: "success", data: { nama: "Budi", umur: 35 } };
  }

  return { type: "error", message: "Jarak kejauhan" };
}

const hasil1 = fetchUser(1);
const hasil2 = fetchUser(99);

console.log("driver berhasil ditemukan", hasil1);
console.log("gagal mencari driver", hasil2);

if (hasil1.type === "success") {
  console.log(
    "Sukses ambil user:",
    hasil1.data.nama,
    "-",
    hasil1.data.umur,
    "th",
  );
} else {
  console.log("Gagal:", hasil1.message);
}
console.log();

// tanpa tag
type ResultJelek = { data: { nama: string } } | { message: string };

function badCode(r: ResultJelek) {
  //
  if ("data" in r) {
    console.log("Data ada:", r.data.nama);
  } else {
    console.log("Error:", r.message);
  }
}
