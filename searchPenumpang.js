document
  .getElementById("searchDataPenumpang")
  .addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const tiketItems = document.querySelectorAll(".tiket-item");

    tiketItems.forEach((item) => {
      const nama =
        item
          .querySelector(".ticket-penumpang-detail strong + text")
          ?.textContent?.toLowerCase() || "";
      const namaAlt = item.innerText.toLowerCase(); // fallback cari di semua text
      if (namaAlt.includes(keyword)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
