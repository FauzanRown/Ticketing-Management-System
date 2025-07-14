document.addEventListener("DOMContentLoaded", function () {
  const inputSearch = document.getElementById("searchDataPenumpang");
  const tiketItems = document.querySelectorAll(".tiket-item");

  inputSearch.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    tiketItems.forEach((item) => {
      const nama =
        item.querySelector(".nama-penumpang")?.textContent.toLowerCase() || "";

      if (nama.includes(keyword)) {
        item.style.removeProperty("display"); // 🟢 Kembalikan ke style asal
      } else {
        item.style.display = "none"; // 🔴 Sembunyikan yang tidak cocok
      }
    });
  });
});
