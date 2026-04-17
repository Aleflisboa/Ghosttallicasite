const imagens = document.querySelectorAll(".poster-imagem");
const modal = document.getElementById("modal");
const imgGrande = document.getElementById("img-grande");
const fechar = document.querySelector(".fechar");

const button = document.getElementById("btn-musica");
const player = document.getElementById("player");

let musicaAtual = "";

// abrir modal
imagens.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    imgGrande.src = img.src;

    musicaAtual = img.getAttribute("data-audio");
  });
});

// botão toca música
button.addEventListener("click", () => {
  if (!musicaAtual) return;

  player.pause();
  player.currentTime = 0;

  player.src = musicaAtual;
  player.play();
});

// fechar modal
fechar.onclick = () => modal.style.display = "none";

// fechar clicando fora
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};