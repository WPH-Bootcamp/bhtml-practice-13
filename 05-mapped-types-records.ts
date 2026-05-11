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

type ThemeColor = "primary" | "secondary" | "success" | "danger" | "warning";

interface ColorValue {
  bg: string;
  text: string;
}

const theme: Record<ThemeColor, ColorValue> = {
  primary: { bg: "#3b82f6", text: "#ffffff" },
  secondary: { bg: "#6b7280", text: "#ffffff" },
  success: { bg: "#10b981", text: "#ffffff" },
  danger: { bg: "#ef4444", text: "#ffffff" },
  warning: { bg: "#f59e0b", text: "#000000" },
};
