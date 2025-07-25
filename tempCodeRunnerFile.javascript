console.log('Program dimulai');
setTimeout(function() {
  console.log('Fungsi 1 selesai dieksekusi');
}, 2000);
console.log('Ini adalah fungsi 2');


function hitungluas(panjang, lebar) {
  return panjang * lebar;
}

console.log('Luas persegi panjang dengan panjang 5 dan lebar 3 adalah: ' + hitungluas(5, 3));