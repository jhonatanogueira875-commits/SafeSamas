console.log("🚀 perfil.js iniciado");

document.addEventListener("DOMContentLoaded", async () => {

    console.log("📌 DOM carregado.");

    // Verifica se o usuário está logado via servidor
    const { data, error } = await banco.auth.getUser();

    // Logs de depuração detalhados
    console.log("Erro:", error);
    console.log("Data:", data);
    console.log("Usuário:", data?.user);

    if (error || !data?.user) {
        // Se houver erro ou usuário não existir, redireciona para o login
        console.warn("⚠️ Acesso negado ou sessão inválida. Redirecionando...");
        window.location.href = "login.html";
        return;
    }

    // Preenche os dados do perfil
    document.getElementById("emailUsuario").textContent = data.user.email;
    document.getElementById("nomeUsuario").textContent = "Usuário SafeSamas";

    // Configura o botão de logout
    document.getElementById("btnLogout")
        .addEventListener("click", async () => {
            await banco.auth.signOut();
            window.location.href = "index.html";
        });

});