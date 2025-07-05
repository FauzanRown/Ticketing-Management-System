function hitungTotal() {
  const select = document.getElementById("namaKereta");
  const jumlah = parseInt(document.getElementById("jumlah").value) || 0;
  const harga = parseInt(select.value) || 0;

  const tampilkanHarga = document.getElementById("displaybayar");

  // Tampilkan total harga di span
  tampilkanHarga.textContent =
    "Rp. " + (harga * jumlah).toLocaleString("id-ID");
}

// Jalankan saat select berubah
document.getElementById("namaKereta").addEventListener("change", hitungTotal);
document.getElementById("jumlah").addEventListener("input", hitungTotal);
