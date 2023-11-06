// Seleksi terlebih dahulu
const pilihan = document.getElementById("pilihan");
const nilaiAwal = document.getElementById("nilaiAwal");
const nilaiAkhir = document.getElementById("nilaiAkhir");
const kirimHasil = document.getElementById("btn");
const cetakHasil = document.getElementById("cetakHasil");

kirimHasil.addEventListener("click", function (e) {
  // Mengecek jika inputan dari nilai awal dan nilai akhir kosong, maka tampilkan alert
  if (nilaiAwal.value === "") {
    alert("Isi terlebih dahulu Nilai Awal!");
  } else if (nilaiAkhir.value === "") {
    alert("Isi terlebih dahulu Nilai Akhir!");
    // Jika user memilih pilihan Genap
  } else if (pilihan.value === "Genap") {
    // Mengecek jika user memasukkan nilai ganjil pada nilai awal
    if (nilaiAwal.value % 2 === 1) {
      alert("Nilai awal bukan angka genap!");
      // Mengecek jika user memasukkan nilai ganjil pada nilai akhir
    } else if (nilaiAkhir.value % 2 === 1) {
      alert("Nilai akhir bukan angka genap!");
      // Jika user memasukkan nilai genap
    } else {
      // Mengubah tipe data dari nilai input nilaiAwal dari string menjadi number
      let count = Number(nilaiAwal.value);
      // Membuat array kosong
      const arrGenap = [];
      for (count; count <= nilaiAkhir.value; count++) {
        // Di cek, jika pembagian yang kita inputkan nilai nya dan sisa bagi nya 0, maka dia otomatis genap
        if (count % 2 == 0) {
          // Jika benar genap, maka push nilai genap itu kedalam arrGenap
          arrGenap.push(count);
          // Memberikan method join agar koma nya ada spasi
          cetakHasil.innerText = `Bilangan Genap: ${arrGenap.join(", ")}`;
        }
      }
    }

    // Jika user memilih pilihan Ganjil
  } else if (pilihan.value === "Ganjil") {
    // Mengecek jika user memasukkan nilai genap pada nilai awal
    if (nilaiAwal.value % 2 === 0) {
      alert("Nilai awal bukan angka ganjil!");
      // Mengecek jika user memasukkan nilai genap pada nilai akhir
    } else if (nilaiAkhir.value % 2 === 0) {
      alert("Nilai akhir bukan angka ganjil!");
      // Jika user memasukkan nilai ganjil
    } else {
      // Mengubah tipe data dari nilai input nilaiAwal dari string menjadi number
      let count = Number(nilaiAwal.value);
      // Membuat array kosong
      const arrGanjil = [];
      for (count; count <= nilaiAkhir.value; count++) {
        // Di cek, jika pembagian yang kita inputkan nilai nya dan sisa bagi nya 1, maka dia otomatis ganjil
        if (count % 2 == 1) {
          // Jika benar ganjil, maka push nilai ganjil itu kedalam arrGanjil
          arrGanjil.push(count);
          // Memberikan method join agar koma nya ada spasi
          cetakHasil.innerText = `Bilangan Ganjil: ${arrGanjil.join(", ")}`;
        }
      }
    }
  }
  e.preventDefault();
});