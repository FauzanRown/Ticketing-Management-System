<?php
// Fungsi PHP untuk menghitung total harga
function hitungTotalHarga($jumlahTiket, $kategori) {
    $hargaDewasa = 150000;
    $hargaAnak = 75000;
    
    if ($kategori === 'Dewasa') {
        return $jumlahTiket * $hargaDewasa;
    } else {
        return $jumlahTiket * $hargaAnak;
    }
}


// Proses form jika ada data yang dikirim
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = htmlspecialchars($_POST['nama']);
    $tanggal = htmlspecialchars($_POST['tanggal']);
    $namaKereta = htmlspecialchars($_POST['namaKereta']);
    $jumlahTiket = (int)$_POST['jumlah'];
    $kategori = htmlspecialchars($_POST['kategori']);
    
    // Hitung total harga dengan fungsi PHP
    $totalHarga = hitungTotalHarga($jumlahTiket, $kategori);
}
?>