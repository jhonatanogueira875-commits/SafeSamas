/*
==========================================================
SafeSamas
Controle de Sessão
==========================================================
*/

document.addEventListener("DOMContentLoaded", async () => {

    const { data, error } = await banco.auth.getSession();

    if (error) {
        console.error("Erro ao recuperar sessão:", error);
        return;
    }

    const botaoConta = document.getElementById("btnConta");

    if (!botaoConta) return;

    if (data.session) {

        console.log("✅ Usuário logado.");

        // Redireciona para o perfil quando estiver pronto
        botaoConta.href = "perfil.html";
        botaoConta.title = "Minha Conta";

    } else {

        console.log("❌ Nenhum usuário logado.");

        botaoConta.href = "login.html";
        botaoConta.title = "Entrar";

    }

});