const imagens = document.querySelectorAll(".poster-imagem");
const modal = document.getElementById("modal");
const imgGrande = document.getElementById("img-grande");
const fechar = document.querySelector(".fechar");

// abrir modal
imagens.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    imgGrande.src = img.src;

    carregarMiniaturas(index);
  });
});

// fechar
fechar.onclick = () => modal.style.display = "none";

// clicar fora
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// criar miniaturas
function carregarMiniaturas(indexAtual) {
  miniaturas.innerHTML = "";

  imagens.forEach((img, i) => {
    const mini = document.createElement("img");
    mini.src = img.src;

    if (i === indexAtual) {
      mini.style.opacity = "1";
    }

    mini.addEventListener("click", () => {
      imgGrande.src = img.src;
    });

    miniaturas.appendChild(mini);
  });
}