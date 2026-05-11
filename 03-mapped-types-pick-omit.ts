//bayangin ambil data user

//Pick = "kasih saya data ini"
//Omit = "Kasih saya semua data ini, kecuali"

interface User {
  id: number;
  nama: string;
  email: string;
  password: string;
  umur: number;
  alamat: string;
}

const userLengkap: User = {
  id: 1,
  nama: "Budi",
  alamat: "Indonesia",
  email: "budi@gmail.com",
  password: "rahasia123",
  umur: 25,
};

console.log("data user lengkap ", userLengkap);

//contoh 1:Pick<T,K>
//format = Pick<T, "key 1", "key 2", "key 3"

type UserPublik = Pick<User, "id" | "nama" | "email">;

const userPublik: UserPublik = {
  id: 1,
  nama: "Budi",
  email: "budi@gmail.com",
};

console.log("User publik ", userPublik);

// OMIT = Ambil semua, kecuali...

type UserAman = Omit<User, "password" | "alamat">;

const userAman: UserAman = {
  id: 1,
  nama: "Budi",
  email: "budi@gmail.com",
  umur: 25,
};

console.log("User aman pake omit", userAman);
