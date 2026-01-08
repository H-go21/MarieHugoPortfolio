const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.innerHTML = `<img src="${img.src}" alt="">`;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
