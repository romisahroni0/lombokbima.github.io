function tampilkanInfo(nama) {
  const infoAndi = document.getElementById("info-andi");
  const infoRina = document.getElementById("info-rina");

  if (nama === "andi") {
    if (infoAndi.style.display === "block") {
      infoAndi.style.display = "none";
    } else {
      infoAndi.style.display = "block";
      infoAndi.innerHTML = `
        <strong>Hobi:</strong> Bermain Game <br>
        <strong>Kesan:</strong> Orangnya tenang, rajin, dan pintar.
      `;
    }
  } else if (nama === "rina") {
    if (infoRina.style.display === "block") {
      infoRina.style.display = "none";
    } else {
      infoRina.style.display = "block";
      infoRina.innerHTML = `
        <strong>Hobi:</strong> Renang <br>
        <strong>Kesan:</strong> Berpikir Kreatif.
      `;
    }
  }
}
