document
  .getElementById("searchDataPenumpang")
  .addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const tiketItems = document.querySelectorAll(".tiket-item");

    tiketItems.forEach((item) => {
      const namaElement = item.querySelector(".nama-penumpang");
      const nama = namaElement ? namaElement.textContent.toLowerCase() : "";

      item.style.display = nama.includes(keyword) ? "block" : "none";
    });
  });
