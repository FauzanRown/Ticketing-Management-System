const inputSearch = document.getElementById("searchDataPenumpang");
const tiketItems = document.querySelectorAll(".tiket-item");

inputSearch.addEventListener("input", function () {
  const keyword = inputSearch.value.toLowerCase();

  tiketItems.forEach((item) => {
    const nama =
      item.querySelector(".nama-penumpang")?.textContent.toLowerCase() || "";
    if (nama.includes(keyword)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
