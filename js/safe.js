/*
==========================================
SafeSamas
Arquivo: safe.js (Raiz)
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("🛡 SafeSamas iniciado.");

    // Scroll suave para os módulos
    document
        .querySelector(".hero-logo")
        .addEventListener("click", () => {
            window.location.href = "#modulos";
        });

    // Navegação - PetSamas
    document.getElementById("card-animal").addEventListener("click", () => {
        window.location.href = "PetSamas/index.html";
    });

    // Navegação - AutoSamas
    document.getElementById("card-veiculo").addEventListener("click", () => {
        window.location.href = "AutoSamas/index.html";
    });

    // Navegação - PhoneSamas
    document.getElementById("card-phone").addEventListener("click", () => {
        window.location.href = "PhoneSamas/index.html";
    });

    // Navegação - MochilaSamas
    document.getElementById("card-mochila").addEventListener("click", () => {
        window.location.href = "MochilaSamas/index.html";
    });

    // Navegação - ItemSamas
    document.getElementById("card-outros").addEventListener("click", () => {
        window.location.href = "ItemSamas/index.html";
    });
});