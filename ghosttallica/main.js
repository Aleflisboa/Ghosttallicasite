const items = document.querySelectorAll(".menu span");
const preview = document.getElementById("preview");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    preview.src = item.getAttribute("data-img");
    preview.style.opacity = 1;
    preview.style.transform = "translate(10%) scale(1)";
  });

  item.addEventListener("mouseleave", () => {
    preview.style.opacity = 0;
  });

  item.addEventListener("mousemove", (e) => {
    preview.style.left = e.clientX + "px";
    preview.style.top = e.clientY + "px";
  });
});