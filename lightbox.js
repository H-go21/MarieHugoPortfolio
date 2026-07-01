// =====================
// LIGHTBOX
// =====================
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


// =====================
// CAROUSEL BUTTONS (← →)
// =====================
document.querySelectorAll('.carousel-container').forEach(container => {

    const gallery = container.querySelector('.gallery');
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');

    if (!gallery || !prev || !next) return;

    const scrollAmount = () => {
        // adapte automatiquement au screen
        return gallery.querySelector("img")?.offsetWidth + 24 || 500;
    };

    next.addEventListener('click', () => {
        gallery.scrollBy({
            left: scrollAmount(),
            behavior: 'smooth'
        });
    });

    prev.addEventListener('click', () => {
        gallery.scrollBy({
            left: -scrollAmount(),
            behavior: 'smooth'
        });
    });

});


// =====================
// DRAG / SLIDE
// =====================
document.querySelectorAll('.gallery').forEach(gallery => {

    let isDown = false;
    let startX;
    let scrollLeft;

    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        gallery.classList.add('active');

        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => {
        isDown = false;
    });

    gallery.addEventListener('mouseup', () => {
        isDown = false;
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;

        e.preventDefault();

        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2; // vitesse du drag

        gallery.scrollLeft = scrollLeft - walk;
    });

});
