function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

/* Cerrar modal */
window.addEventListener("click", function(e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

/* CONTADOR HORA FIJA 5:00 PM MÉXICO */

const countdownDate = new Date("2026-02-24T17:00:00-06:00").getTime();

const timer = setInterval(function() {

    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "PROMOCIÓN FINALIZADA";

        // Desactivar botones cuando termine
        document.querySelectorAll(".promo-btn").forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = "0.5";
            btn.innerText = "Promoción Finalizada";
        });

        return;
    }

    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("timer").innerHTML =
        hours + "h " + minutes + "m " + seconds + "s";

}, 1000);

/* Animación al hacer scroll */
const promos = document.querySelectorAll(".promo");

window.addEventListener("scroll", () => {
    promos.forEach(promo => {
        const rect = promo.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            promo.classList.add("show");
        }
    });
});

/* Mostrar al cargar si ya están visibles */
window.dispatchEvent(new Event("scroll"));