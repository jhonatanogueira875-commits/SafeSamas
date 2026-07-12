/*
==========================================
SafeSamas
Arquivo: safe.js
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("🛡 SafeSamas iniciado.");

    // Scroll suave para módulos
    document
        .querySelector(".hero-logo")
        .addEventListener("click", () => {
            window.location.href = "#modulos";
        });

    // Navegação para PetSamas
    document
        .getElementById("card-animal")
        .addEventListener("click", () => {
            window.location.href = "../PetSamas/index.html";
        });
});