/*
==========================================================
SafeSamas
Arquivo: cadastro-usuario.js

Responsável por:

✔ Criar conta
✔ Criar perfil
✔ Fazer login automático
✔ Redirecionar para a plataforma
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("👤 Cadastro SafeSamas iniciado.");

    const formulario = document.getElementById("formCadastroUsuario");

    formulario.addEventListener("submit", async (event) => {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();

        const email = document.getElementById("email").value.trim();

        const senha = document.getElementById("senha").value;

        const confirmarSenha = document.getElementById("confirmarSenha").value;

        // ==========================================
        // Validação
        // ==========================================

        if (!nome || !email || !senha) {

            alert("Preencha todos os campos.");

            return;

        }

        if (senha !== confirmarSenha) {

            alert("As senhas não coincidem.");

            return;

        }

        try {

            // ==========================================
            // Criar usuário
            // ==========================================

            const { data, error } = await banco.auth.signUp({

                email,

                password: senha,

                options: {

                    data: {

                        nome

                    }

                }

            });

            if (error) {

                alert(error.message);

                return;

            }

            console.log("✅ Usuário criado:", data.user.id);

            // ==========================================
            // Criar perfil
            // ==========================================

            const { error: erroPerfil } = await banco
                .from("profiles")
                .insert({

                    id: data.user.id,

                    nome,

                    telefone: "",

                    cidade: "",

                    avatar_url: ""

                });

            if (erroPerfil) {

                console.error(erroPerfil);

                alert("Conta criada, porém ocorreu um erro ao criar o perfil.");

                return;

            }

            console.log("✅ Perfil criado.");

            // ==========================================
            // Login automático
            // ==========================================

            const { error: erroLogin } = await banco.auth.signInWithPassword({

                email,

                password: senha

            });

            if (erroLogin) {

                alert("Conta criada!\n\nAgora faça seu login.");

                window.location.href = "login.html";

                return;

            }

            console.log("✅ Login automático realizado.");

            alert("Bem-vindo ao SafeSamas!");

            window.location.href = "index.html";

        } catch (erro) {

            console.error(erro);

            alert("Ocorreu um erro inesperado.");

        }

    });

});