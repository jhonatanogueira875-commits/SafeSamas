console.log("🚀 perfil.js iniciado");

document.addEventListener("DOMContentLoaded", async () => {

    console.log("📌 DOM carregado.");

    const { data, error } = await banco.auth.getUser();

    console.log("Erro:", error);
    console.log("Data:", data);
    console.log("Usuário:", data?.user);

    // TESTE 1: O alerta confirma que o JS alcançou o dado
    if (data?.user) {
        alert(data.user.email);
    }

    if (error || !data?.user) {
        window.location.href = "login.html";
        return;
    }

    // TESTE 2: Usando innerHTML com estilo forçado para ver se aparece na tela
    document.getElementById("emailUsuario").innerHTML = 
        "<h2 style='color:red'>" + data.user.email + "</h2>";

    document.getElementById("nomeUsuario").textContent = "Usuário SafeSamas";

    document.getElementById("btnLogout").addEventListener("click", async () => {
        await banco.auth.signOut();
        window.location.href = "index.html";
    });

});