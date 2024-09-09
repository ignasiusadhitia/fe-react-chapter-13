# Konsep Object Composition

**Object Composition** adalah pendekatan dalam pengembangan perangkat lunak yang digunakan untuk membangun objek kompleks dari beberapa objek yang lebih sederhana. Berbeda dengan pewarisan (inheritance), object composition menawarkan fleksibilitas dan modularitas yang lebih besar karena tidak mengharuskan kita untuk menggunakan hierarki class yang dalam dan kaku. Objek yang dibangun melalui composition dapat menggabungkan beberapa komponen atau fungsi.

## Keuntungan Menggunakan Object Composition

1. **Fleksibilitas**: Memungkinkan objek untuk memiliki perilaku yang berbeda tanpa memerlukan pewarisan hierarki yang rumit.
2. **Keterpisahan Tugas**: Setiap komponen atau objek dapat fokus pada tugas tertentu, yang memudahkan dalam pemeliharaan dan pengembangan.
3. **Pemeliharaan Kode yang Lebih Mudah**: Karena komponennya terpisah, lebih mudah memodifikasi atau memperbarui bagian kode tertentu tanpa memengaruhi bagian lainnya.

## Contoh Penggunaan Object Composition

Di sini kita menggunakan beberapa class seperti `Engine`, `Transmission`, dan `Wheels`, yang masing-masing bertanggung jawab atas satu komponen dari mobil. Class `Car` menggabungkan ketiga class ini untuk membentuk objek mobil yang lebih kompleks.

### Komponen Dasar

1. **Engine**: Mewakili mesin dengan properti `type` dan `horsePower`.
2. **Transmission**: Mewakili sistem transmisi dengan properti `type`.
3. **Wheels**: Mewakili roda dengan properti `size` dan `type`.

```javascript
class Engine {
  constructor(type, horsePower) {
    this.type = type;
    this.horsePower = horsePower;
  }

  getEngineInfo() {
    return `Type: ${this.type}, Horse Power: ${this.horsePower} HP`;
  }
}

class Transmission {
  constructor(type) {
    this.type = type;
  }

  getTransmissionType() {
    return `Transmission Type: ${this.type}`;
  }
}

class Wheels {
  constructor(size, type) {
    this.size = size;
    this.type = type;
  }

  getWheelsInfo() {
    return `Size: ${this.size}-inch, Type: ${this.type}`;
  }
}
```

## Menggabungkan Komponen dalam Class Car

Class `Car` menggabungkan objek `Engine`, `Transmission`, dan `Wheels` ke dalam satu kesatuan.

```javascript
class Car {
  constructor(brand, model, engine, transmission, wheels) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.transmission = transmission;
    this.wheels = wheels;
  }

  getCarInfo() {
    return (
      `Brand: ${this.brand}, Model: ${this.model}\n` +
      `Engine: ${this.engine.getEngineInfo()}\n` +
      `Transmission: ${this.transmission.getTransmissionType()}\n` +
      `Wheels: ${this.wheels.getWheelsInfo()}`
    );
  }
}

// Membuat instance Engine, Transmission, dan Wheels
const engine = new Engine("V8", 450);
const transmission = new Transmission("Automatic");
const wheels = new Wheels(18, "Alloy");

// Membuat instance Car
const car = new Car("Ford", "Mustang", engine, transmission, wheels);
console.log(car.getCarInfo());
```

## Kelebihan Menggunakan Object Composition

- **Fleksibilitas**: Setiap komponen dari `Car` bisa dimodifikasi atau diganti tanpa harus mengubah class utama. Misalnya, kita bisa mengganti `Engine` atau `Wheels` dengan tipe yang berbeda.
- **Modularitas**: Setiap bagian dari objek disusun dari komponen yang terpisah, yang membuat kode lebih modular dan mudah untuk dikembangkan.
- **Keterpisahan Tugas**: Tanggung jawab dipecah menjadi bagian-bagian kecil yang lebih mudah diatur dan diuji.

## Kesimpulan

Object Composition adalah pendekatan yang kuat dan fleksibel dalam membangun objek kompleks dengan cara menggabungkan beberapa objek yang lebih sederhana. Dengan menggunakan object composition, kita dapat memisahkan tanggung jawab dan membuat kode yang lebih modular serta mudah dirawat.
