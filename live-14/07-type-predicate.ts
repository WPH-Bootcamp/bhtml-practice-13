type Kucing = { nama: string; meong: () => void };
type Sapi = { nama: string; mooo: () => void };

function apaKucing(hewan: Kucing | Sapi): boolean {
  return "meong" in hewan;
}

const hewan1: Kucing | Sapi = {
  nama: "Misty",
  meong: () => console.log(" Meongggg"),
};

if (apaKucing(hewan1)) {
  hewan1.meong();
}

console.log();

// solusi pake type predicate

function apaKucingBenar(hewan: Kucing | Sapi): hewan is Kucing {
  return "meong" in hewan;
}

function hewanAcak(pilih: "Kucing" | "Sapi"): Kucing | Sapi {
  if (pilih === "Kucing") {
    return { nama: "Misty", meong: () => console.log("Meongggg") };
  }
  return { nama: "Brown", mooo: () => console.log("mooooo") };
}

const hewan2 = hewanAcak("Kucing");
const hewan3 = hewanAcak("Sapi");

if (apaKucingBenar(hewan2)) {
  hewan2.meong();
} else {
  hewan2.mooo();
}

if (apaKucingBenar(hewan3)) {
  hewan3.meong();
} else {
  hewan3.mooo();
}

console.log();
