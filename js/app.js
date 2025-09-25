// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("oct 05, 2025 19:30:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function () {
  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;

  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;

  // Jika hitungan mundur selesai, tulis beberapa teks
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Show Cards
const showCardButton = document.getElementById("show-cards");
const cardContainer = document.getElementById("card-container");
const cards = document.querySelectorAll(".card");

showCardButton.addEventListener("click", function () {
  cardContainer.classList.toggle("show");
  if (cardContainer.classList.contains("show")) {
    showCardsSequentially();
  } else {
    resetCardStyles();
  }
});

function showCardsSequentially() {
  cards.forEach((card, index) => {
    card.style.animation = `cardFadeIn 0.2s ease ${index * 0.2 + 0.2}s forwards`;
  });
}

function resetCardStyles() {
  cards.forEach((card) => {
    card.style.animation = "";
  });
}

function noUtsman() {
  var teks = document.getElementById("textSalin").textContent;
  var teksTanpaTanda = teks.replace(/-/g, "");

  var textarea = document.createElement("textarea");
  textarea.value = teksTanpaTanda;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  toastr["success"]("No Dana Berhasil Disalin", "Success");
}
function noYani() {
  var teks = document.getElementById("textSalin2").textContent;
  var teksTanpaTanda = teks.replace(/-/g, "");

  var textarea = document.createElement("textarea");
  textarea.value = teksTanpaTanda;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  toastr["success"]("No Dana Berhasil Disalin", "Success");
}

// url Data
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
// const pronoun = urlParams.get("p") || "Bapak/Ibu/Saundara/i,";

const namaContainer = document.querySelector(".dear #tamu");
namaContainer.innerText = `${nama}`.replace(/ , $/, ",");

document.querySelector("#nama").value = nama;
