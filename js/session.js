/*
==========================================================
SafeSamas
Controle de Sessão
==========================================================
*/

document.addEventListener("DOMContentLoaded", async () => {

    const { data, error } = await banco.auth.getUser();

    if (error) {

        console.error("Erro ao recuperar usuário:", error);

        return;

    }

    const botaoConta = document.getElementById("btnConta");

    if (!botaoConta) return;

    if (data.user) {

        console.log("✅ Usuário logado.");

        botaoConta.href = "perfil.html";

        botaoConta.title = "Minha Conta";

    } else {

        console.log("❌ Usuário não logado.");

        botaoConta.href = "login.html";

        botaoConta.title = "Entrar";

    }

});