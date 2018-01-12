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
function a() {
  if (random == 'button1') {
    document.getElementById('button1').style.background = 'green';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= 3) {
      document.getElementById('menang').innerHTML = 'Selamat Anda Benar!!!';
    }
  } else {
    document.getElementById('button1').style.background = 'red';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah >= 3) {
      alert('maaf anda gagal tebakan akan di acak kembali');
      location.reload();
    }
  }
}
function b() {
  if (random == 'button2') {
    document.getElementById('button2').style.background = 'green';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= 3) {
      document.getElementById('menang').innerHTML = 'Selamat Anda Benar!!!';
    }
  } else {
    document.getElementById('button2').style.background = 'red';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah >= 3) {
      alert('maaf anda gagal tebakan akan di acak kembali');
      location.reload();
    }
  }
}
function c() {
  if (random == 'button3') {
    document.getElementById('button3').style.background = 'green';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= 3) {
      document.getElementById('menang').innerHTML = 'Selamat Anda Benar!!!';
    }
  } else {
    document.getElementById('button3').style.background = 'red';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah >= 3) {
      alert('maaf anda gagal tebakan akan di acak kembali');
      location.reload();
    }
  }
}
function d() {
  if (random == 'button4') {
    document.getElementById('button4').style.background = 'green';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= 3) {
      document.getElementById('menang').innerHTML = 'Selamat Anda Benar!!!';
    }
  } else {
    document.getElementById('button4').style.background = 'red';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah >= 3) {
      alert('maaf anda gagal tebakan akan di acak kembali');
      location.reload();
    }
  }
}
function e() {
  if (random == 'button5') {
    document.getElementById('button5').style.background = 'green';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= 3) {
      document.getElementById('menang').innerHTML = 'Selamat Anda Benar!!!';
    }
  } else {
    document.getElementById('button5').style.background = 'red';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah >= 3) {
      alert('maaf anda gagal tebakan akan di acak kembali');
      location.reload();
    }
  }
}
function f() {
  if (random == 'button6') {
    document.getElementById('button6').style.background = 'green';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= 3) {
      document.getElementById('menang').innerHTML = 'Selamat Anda Benar!!!';
    }
  } else {
    document.getElementById('button6').style.background = 'red';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah >= 3) {
      alert('maaf anda gagal tebakan akan di acak kembali');
      location.reload();
    }
  }
}
function g() {
  if (random == 'button7') {
    document.getElementById('button7').style.background = 'green';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= 3) {
      document.getElementById('menang').innerHTML = 'Selamat Anda Benar!!!';
    }
  } else {
    document.getElementById('button7').style.background = 'red';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah >= 3) {
      alert('maaf anda gagal tebakan akan di acak kembali');
      location.reload();
    }
  }
}
function h() {
  if (random == 'button8') {
    document.getElementById('button8').style.background = 'green';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= 3) {
      document.getElementById('menang').innerHTML = 'Selamat Anda Benar!!!';
    }
  } else {
    document.getElementById('button8').style.background = 'red';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah >= 3) {
      alert('maaf anda gagal tebakan akan di acak kembali');
      location.reload();
    }
  }
}
function i() {
  if (random == 'button9') {
    document.getElementById('button9').style.background = 'green';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    ketemu = 'sudah';
    if (ketemu == 'sudah' && jumlah <= 3) {
      document.getElementById('menang').innerHTML = 'Selamat Anda Benar!!!';
    }
  } else {
    document.getElementById('button9').style.background = 'red';
    jumlah++;
    document.getElementById('jml_klik').innerHTML =
      'jumlah tebakan = ' + jumlah;
    if (ketemu == 'belum' && jumlah >= 3) {
      alert('maaf anda gagal tebakan akan di acak kembali');
      location.reload();
    }
  }
}
