// Contoh penggunaan Built-in Class Date
const now = new Date();
console.log(now);  // Mendapatkan tanggal dan waktu saat ini
console.log(now.getDate());  // Mendapatkan tanggal
console.log(now.getMonth() + 1);  // Mendapatkan bulan (dimulai dari 0, jadi ditambah 1)
console.log(now.getFullYear());  // Mendapatkan tahun
console.log(now.getDay());  // Mendapatkan hari dalam minggu (0 = Minggu, 6 = Sabtu)

// Contoh penggunaan Built-in Class Math
console.log(Math.PI);  // Mendapatkan nilai PI
console.log(Math.round(10.5));  // Pembulatan angka ke atas
console.log(Math.floor(10.5));  // Pembulatan angka ke bawah
console.log(Math.sqrt(16));  // Mendapatkan akar kuadrat dari 16
console.log(Math.max(1, 2, 3));  // Mendapatkan nilai terbesar
console.log(Math.random());  // Mendapatkan angka acak antara 0 dan 1

// Contoh penggunaan Built-in Class Intl
const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});
console.log(formatter.format(date));  // Memformat tanggal dalam format internasional

const amount = 25000;
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', minimumFractionDigits: 0
});
console.log(currencyFormatter.format(amount));  // Memformat angka ke dalam mata uang USD
