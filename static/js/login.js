// Script para página de login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const formMessage = document.getElementById('formMessage');
    const registerLink = document.getElementById('registerLink');
    const registerModal = document.getElementById('registerModal');
    const closeRegisterModal = document.getElementById('closeRegisterModal');

    // Verificar se já está logado
    checkIfLoggedIn();

    // Handler do formulário de login
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            showMessage('Por favor, preencha todos os campos.', 'error');
            return;
        }

        setLoading(true);
        
        try {
            const result = await window.authManager.login(email, password);
            
            if (result.success) {
                showMessage('Login realizado com sucesso! Redirecionando...', 'success');
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 1500);
            } else {
                showMessage(result.error || 'Erro ao fazer login. Tente novamente.', 'error');
            }
        } catch (error) {
            console.error('Erro no login:', error);
            showMessage('Erro interno. Tente novamente mais tarde.', 'error');
        } finally {
            setLoading(false);
        }
    });

    // Link de registro
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.style.display = 'flex';
    });

    // Fechar modal de registro
    closeRegisterModal.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    // Fechar modal clicando fora
    registerModal.addEventListener('click', function(e) {
        if (e.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    // Verificar se já está logado e redirecionar
    async function checkIfLoggedIn() {
        if (window.authManager) {
            const isAuthenticated = await window.authManager.checkAuth();
            if (isAuthenticated) {
                window.location.href = '/dashboard';
            }
        }
    }

    // Mostrar mensagem
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Auto-hide depois de 5 segundos para mensagens de erro
        if (type === 'error') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    // Controlar estado de loading
    function setLoading(loading) {
        const btnText = loginBtn.querySelector('.btn-text');
        const btnLoading = loginBtn.querySelector('.btn-loading');
        
        if (loading) {
            btnText.style.display = 'none';
            btnLoading.style.display = 'flex';
            loginBtn.disabled = true;
        } else {
            btnText.style.display = 'block';
            btnLoading.style.display = 'none';
            loginBtn.disabled = false;
        }
    }
});