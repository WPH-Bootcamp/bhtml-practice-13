type Mobil = {
  nama: string;
  warna: "merah" | "biru" | "hitam";
};

const mobilA: Mobil = {
  nama: "Avanza",
  warna: "merah",
};

const mobilB = {
  nama: "Avanza",
  warna: "merah",
} satisfies Mobil;

type PortConfig = Record<string, number>;

const portsA: PortConfig = {
  http: 80,
  https: 443,
  ssh: 22,
};

const portsB = {
  http: 80,
  https: 443,
  ssh: 22,
} satisfies PortConfig;
