const palabras = ["PARCHES", "EVENTOS", "PLANES", "RUMBAS", "GOSADERAS"];
let i = 0;
let j = 0;
let actual = "";
let isDeleting = false;

function type() {
  actual = palabras[i];
  let texto = actual.substring(0, j);
  document.getElementById("autoText").textContent = texto;

  if (!isDeleting && j < actual.length) {
    j++;
    setTimeout(type, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % palabras.length;
    setTimeout(type, 1000);
  }
}

type();