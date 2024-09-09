# Built-in Class Pada JavaScript

**Built-in class** di JavaScript adalah kelas bawaan yang disediakan oleh bahasa untuk membantu kita dalam memanipulasi data seperti tanggal, angka, dan teks. Kelas-kelas ini sangat berguna untuk mempercepat pengembangan aplikasi karena menyediakan fungsionalitas dasar yang sering digunakan.

## Built-in Class Date

Kelas `Date` digunakan untuk bekerja dengan tanggal dan waktu. Dengan menggunakan `Date`, kita dapat membuat objek yang mewakili waktu saat ini, mendapatkan bagian-bagian dari tanggal (seperti tahun, bulan, dan hari), serta melakukan operasi lain yang berkaitan dengan waktu.

Contoh:

```javascript
const now = new Date();
console.log(now); // Mendapatkan tanggal dan waktu saat ini
console.log(now.getDate()); // Mendapatkan tanggal
console.log(now.getMonth() + 1); // Mendapatkan bulan (dimulai dari 0, jadi ditambah 1)
console.log(now.getFullYear()); // Mendapatkan tahun
console.log(now.getDay()); // Mendapatkan hari dalam minggu (0 = Minggu, 6 = Sabtu)
```

## Built-in Class Math

Kelas `Math` menyediakan fungsi-fungsi matematis yang sering digunakan, seperti mendapatkan nilai PI, akar kuadrat, angka acak, pembulatan angka, dan mendapatkan nilai maksimum dari sekumpulan angka.

```javascript
console.log(Math.PI); // Mendapatkan nilai PI
console.log(Math.round(10.5)); // Pembulatan angka ke atas
console.log(Math.floor(10.5)); // Pembulatan angka ke bawah
console.log(Math.sqrt(16)); // Mendapatkan akar kuadrat dari 16
console.log(Math.max(1, 2, 3)); // Mendapatkan nilai terbesar
console.log(Math.random()); // Mendapatkan angka acak antara 0 dan 1
```

## Built-in Class Intl

Kelas `Intl` digunakan untuk internasionalisasi, seperti pemformatan tanggal, angka, dan mata uang sesuai dengan lokal (locale) yang ditentukan. Ini sangat berguna untuk membuat aplikasi yang mendukung berbagai wilayah dan format lokal.

```javascript
const date = new Date();
const formatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(formatter.format(date)); // Memformat tanggal dalam format internasional

const amount = 25000;
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});
console.log(currencyFormatter.format(amount)); // Memformat angka ke dalam mata uang USD
```

## Kesimpulan

JavaScript menyediakan beberapa built-in class seperti `Date`, `Math`, dan `Intl` yang memudahkan kita dalam memanipulasi data dan menyelesaikan tugas-tugas umum seperti bekerja dengan waktu, angka, dan format internasional. Dengan menggunakan built-in class ini, kita dapat mempercepat pengembangan aplikasi dan menghindari menulis ulang fungsi yang sudah umum digunakan.
