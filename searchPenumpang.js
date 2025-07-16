document.addEventListener("DOMContentLoaded", function () {
  const inputSearch = document.getElementById("searchDataPenumpang");
  const tiketItems = document.querySelectorAll(".tiket-item");

  inputSearch.addEventListener("input", function () {
    tiketItems.forEach((item) => {
      item.querySelector(".nama-penumpang")?.textContent.toLowerCase() || "";
    });
  });
});
