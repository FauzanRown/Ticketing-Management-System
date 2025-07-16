document.addEventListener("DOMContentLoaded", function () {
  const inputSearch = document.getElementById("searchDataPenumpang");
  const tiketItems = document.querySelectorAll(".tiket-item");

  inputSearch.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    tiketItems.forEach((item) => {
      const nama =
        item.querySelector(".nama-penumpang")?.textContent.toLowerCase() || "";
    });
  });
});
