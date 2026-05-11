// analogi nya: todo list, hari, senin, selasa, rabu, kamis, jumat, sabtu, minggu
// isi dari kegiatannya

// object biasa = key bebas, values bebas

//  Records = key terbatas = hanya yang kita defined, valuenya ini seragama

// contoh 1

type TodoActivity = Record<
  "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat" | "Sabtu" | "Minggu",
  string
>;

const jadwal: TodoActivity = {
  Senin: "Gym",
  Selasa: "Belajar JS",
  Rabu: "Ikut conference",
  Kamis: "Meeting",
  Jumat: "Hackathon",
  Sabtu: "Pitching Startup",
  Minggu: "Ketemu investor",
};

console.log(jadwal);
