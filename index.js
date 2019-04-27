var angka = Math.floor(Math.random() * 9) + 1;
var random = 'button' + angka;
var jumlah = 0;
var ketemu = 'belum';
function answer(id) {
  var jwb = 'Jawaban benar adalah = ' + angka;
  var e = document.getElementById(id);
  e.innerHTML = jwb;
  if (e.style.display == 'none' || e.style.display == '') {
    e.style.display = 'block';
  } else {
    e.style.display = 'none';
  }
}
function a(id) {
  if (random == id) {
    document.getElementById(id).style.background = 'green';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= 3) {
      document.getElementById('menang').innerHTML = 'Selamat Anda Benar!!!';
    }
  } else {
    document.getElementById(id).style.background = 'red';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah >= 3) {
      alert('maaf anda gagal tebakan akan di acak kembali');
      location.reload();
    }
  }
}