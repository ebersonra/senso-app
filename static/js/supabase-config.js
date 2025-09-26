// Configuração do Supabase
const SUPABASE_CONFIG = {
    url: 'https://your-project-url.supabase.co', // Substituir pela URL real do projeto
    anonKey: 'your-anon-key', // Substituir pela chave anônima real
};

// Inicializar cliente Supabase
const supabase = window.supabase?.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// Exportar para uso global
window.supabaseClient = supabase;
window.SUPABASE_CONFIG = SUPABASE_CONFIG;