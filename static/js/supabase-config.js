// Configuração do Supabase
// As variáveis de ambiente devem ser configuradas via window.ENV
// ou diretamente no código para desenvolvimento
const SUPABASE_CONFIG = {
    url: window.ENV?.SUPABASE_URL || 'https://your-project-url.supabase.co',
    anonKey: window.ENV?.SUPABASE_ANON_KEY || 'your-anon-key',
};

// Inicializar cliente Supabase
const supabase = window.supabase?.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// Exportar para uso global
window.supabaseClient = supabase;
window.SUPABASE_CONFIG = SUPABASE_CONFIG;