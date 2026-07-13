/*
==========================================================
SafeSamas
Arquivo: supabase.js

Responsável por:

✔ Conectar ao Supabase
✔ Disponibilizar o cliente para toda a plataforma
==========================================================
*/


// ======================================================
// CONFIGURAÇÃO DO SUPABASE
// ======================================================

const SUPABASE_URL =
"https://zkgasxwggvdamuvxcsnf.supabase.co";

const SUPABASE_ANON_KEY =
"sb_publishable_NFlKL0lg1JuduUXTEwX9jA_jhxrBUMQ";


// ======================================================
// CRIA O CLIENTE
// ======================================================

const { createClient } = supabase;

const banco = createClient(

    SUPABASE_URL,

    SUPABASE_ANON_KEY

);

console.log("☁️ Cliente Supabase inicializado.");