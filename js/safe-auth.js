document.addEventListener("DOMContentLoaded", () => {

    console.log("🔐 SafeAuth iniciado.");

    const formulario = document.getElementById("loginForm");

    formulario.addEventListener("submit", async (e) => {

        e.preventDefault();

        console.log("➡ Botão clicado.");

        try {

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value;

            console.log("Email:", email);

            const { data, error } = await banco.auth.signInWithPassword({

                email,

                password: senha

            });

            console.log("Resposta:", data, error);

            if (error) {

                alert(error.message);

                return;

            }

            alert("✅ Login realizado com sucesso!");

            // Redireciona para a página principal
            window.location.href = "index.html";

        } catch (erro) {

            console.error("ERRO:", erro);

            alert("Ocorreu um erro inesperado.");

        }

    });

});