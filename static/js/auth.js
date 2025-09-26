// Módulo de autenticação
class AuthManager {
    constructor() {
        this.supabase = window.supabaseClient;
        this.currentUser = null;
        this.authCallbacks = [];
    }

    // Verificar se o usuário está logado
    async checkAuth() {
        try {
            const { data: { session }, error } = await this.supabase.auth.getSession();
            if (error) throw error;
            
            if (session?.user) {
                this.currentUser = session.user;
                this.notifyAuthChange(true, session.user);
                return true;
            }
            
            this.currentUser = null;
            this.notifyAuthChange(false, null);
            return false;
        } catch (error) {
            console.error('Erro ao verificar autenticação:', error);
            return false;
        }
    }

    // Login com email e senha
    async login(email, password) {
        try {
            const { data, error } = await this.supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            this.currentUser = data.user;
            this.notifyAuthChange(true, data.user);
            return { success: true, user: data.user };
        } catch (error) {
            console.error('Erro no login:', error);
            return { success: false, error: error.message };
        }
    }

    // Registro de novo usuário
    async register(email, password) {
        try {
            const { data, error } = await this.supabase.auth.signUp({
                email,
                password
            });

            if (error) throw error;

            return { success: true, user: data.user };
        } catch (error) {
            console.error('Erro no registro:', error);
            return { success: false, error: error.message };
        }
    }

    // Logout
    async logout() {
        try {
            const { error } = await this.supabase.auth.signOut();
            if (error) throw error;

            this.currentUser = null;
            this.notifyAuthChange(false, null);
            return { success: true };
        } catch (error) {
            console.error('Erro no logout:', error);
            return { success: false, error: error.message };
        }
    }

    // Verificar se está logado
    isAuthenticated() {
        return this.currentUser !== null;
    }

    // Obter usuário atual
    getCurrentUser() {
        return this.currentUser;
    }

    // Adicionar callback para mudanças de autenticação
    onAuthChange(callback) {
        this.authCallbacks.push(callback);
    }

    // Notificar callbacks sobre mudanças de autenticação
    notifyAuthChange(isAuthenticated, user) {
        this.authCallbacks.forEach(callback => {
            callback(isAuthenticated, user);
        });
    }

    // Configurar listener para mudanças de sessão
    setupAuthListener() {
        if (!this.supabase) return;

        this.supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session?.user) {
                this.currentUser = session.user;
                this.notifyAuthChange(true, session.user);
            } else if (event === 'SIGNED_OUT') {
                this.currentUser = null;
                this.notifyAuthChange(false, null);
            }
        });
    }
}

// Instância global do gerenciador de autenticação
window.authManager = new AuthManager();