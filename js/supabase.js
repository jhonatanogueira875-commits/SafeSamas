/*
==========================================================
SafeSamas
Conexão única com o Supabase

Todos os módulos utilizam este arquivo.

PetSamas
AutoSamas
PhoneSamas
MochilaSamas
ItemSamas
==========================================================
*/

const SUPABASE_URL = "SUA_URL_DO_SUPABASE";

const SUPABASE_ANON_KEY = "SUA_CHAVE_PUBLICA";

const banco = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("☁️ Supabase conectado.");