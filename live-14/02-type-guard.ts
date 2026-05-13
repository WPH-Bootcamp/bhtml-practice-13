// type Ikan = { nama: string; berenang: () => void };
// type Burung = { nama: string; terbang: () => void };

// function bergerak(hewan: Ikan | Burung) {
//   if ("berenang" in hewan) {
//     console.log(hewan.nama, "lagi berenang");
//     hewan.berenang();
//     return;
//   }
//   console.log(hewan.nama, "lagi terbang");
//   hewan.terbang;
// }

// const nemo: Ikan = {
//   nama: "Nemo",
//   berenang: () => console.log("ikan berenang"),
// };

// const tweety: Burung = {
//   nama: "Tweety",
//   terbang: () => console.log("burung terbang"),
// };

// bergerak(nemo);
// bergerak(tweety);
// console.log();

type Guest = { isLogin: false };
type UserLogin = { isLogin: true; email: string; username: "Budi" };

function sapa(user: Guest | UserLogin) {
  if ("email" in user) {
    console.log("Hallo", user.username);
    return;
  }

  console.log("hallo, silahkan login dulu");
}

sapa({ isLogin: false });
sapa({ isLogin: true, email: "budi@gmail.com", username: "Budi" });

console.log();
