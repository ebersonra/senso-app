// Dashboard Main Script
class Dashboard {
    constructor() {
        this.currentSection = 'overview';
        this.dateRange = 30;
        this.charts = {};
        this.isLoading = false;
    }

    async init() {
        // Verificar autenticação
        const isAuthenticated = await window.authManager.checkAuth();
        if (!isAuthenticated) {
            window.location.href = '/login';
            return;
        }

        // Configurar listeners
        this.setupEventListeners();
        
        // Inicializar APIs
        await window.googleAPIManager.initialize();
        
        // Carregar dados iniciais
        await this.loadDashboardData();
        
        // Configurar usuário
        this.setupUserInfo();
    }

    setupEventListeners() {
        // Navegação da sidebar
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                this.switchSection(section);
            });
        });

        // Toggle sidebar (mobile)
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });
        }

        // Filtro de data
        const dateRange = document.getElementById('dateRange');
        const customDateRange = document.getElementById('customDateRange');
        
        dateRange.addEventListener('change', (e) => {
            if (e.target.value === 'custom') {
                customDateRange.style.display = 'flex';
            } else {
                customDateRange.style.display = 'none';
                this.dateRange = parseInt(e.target.value);
                this.refreshData();
            }
        });

        // Aplicar data personalizada
        const applyDateRange = document.getElementById('applyDateRange');
        if (applyDateRange) {
            applyDateRange.addEventListener('click', () => {
                const startDate = document.getElementById('startDate').value;
                const endDate = document.getElementById('endDate').value;
                
                if (startDate && endDate) {
                    const start = new Date(startDate);
                    const end = new Date(endDate);
                    const diffTime = Math.abs(end - start);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    
                    this.dateRange = diffDays;
                    this.refreshData();
                }
            });
        }

        // Botão de refresh
        const refreshBtn = document.getElementById('refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.refreshData();
            });
        }

        // Logout buttons
        document.querySelectorAll('#logoutBtn, #logoutBtnSettings').forEach(btn => {
            btn.addEventListener('click', async () => {
                await this.logout();
            });
        });

        // Configurações
        const changePasswordBtn = document.getElementById('changePasswordBtn');
        if (changePasswordBtn) {
            changePasswordBtn.addEventListener('click', () => {
                alert('Funcionalidade de alteração de senha será implementada em breve.');
            });
        }
    }

    switchSection(sectionName) {
        // Atualizar navegação
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Mostrar seção
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(`${sectionName}-section`).classList.add('active');

        this.currentSection = sectionName;

        // Carregar dados específicos da seção
        this.loadSectionData(sectionName);
    }

    async loadSectionData(section) {
        switch (section) {
            case 'overview':
                await this.loadOverviewData();
                break;
            case 'google-ads':
                await this.loadGoogleAdsData();
                break;
            case 'analytics':
                await this.loadAnalyticsData();
                break;
            case 'settings':
                this.loadSettingsData();
                break;
        }
    }

    async loadDashboardData() {
        this.showLoading();
        try {
            await this.loadOverviewData();
        } catch (error) {
            console.error('Erro ao carregar dados do dashboard:', error);
            this.showError('Erro ao carregar dados. Tente novamente.');
        } finally {
            this.hideLoading();
        }
    }

    async loadOverviewData() {
        try {
            const overviewData = await window.googleAPIManager.getOverviewData(this.dateRange);
            
            // Atualizar KPIs
            this.updateKPIs(overviewData);
            
            // Carregar gráficos
            await this.loadOverviewCharts();
        } catch (error) {
            console.error('Erro ao carregar dados de overview:', error);
        }
    }

    updateKPIs(data) {
        // Usuários Ativos
        document.getElementById('activeUsers').textContent = data.activeUsers.value;
        this.updateKPIChange('activeUsersChange', data.activeUsers.change);

        // Taxa de Conversão
        document.getElementById('conversionRate').textContent = data.conversionRate.value;
        this.updateKPIChange('conversionRateChange', data.conversionRate.change);

        // Custo Total
        document.getElementById('totalCost').textContent = data.totalCost.value;
        this.updateKPIChange('totalCostChange', data.totalCost.change);

        // CTR Médio
        document.getElementById('avgCtr').textContent = data.avgCtr.value;
        this.updateKPIChange('avgCtrChange', data.avgCtr.change);
    }

    updateKPIChange(elementId, change) {
        const element = document.getElementById(elementId);
        const changeValue = parseFloat(change);
        
        element.textContent = `${change > 0 ? '+' : ''}${change}%`;
        
        element.classList.remove('positive', 'negative', 'neutral');
        if (changeValue > 0) {
            element.classList.add('positive');
        } else if (changeValue < 0) {
            element.classList.add('negative');
        } else {
            element.classList.add('neutral');
        }
    }

    async loadOverviewCharts() {
        // Gráfico de usuários
        await this.createUsersChart();
        
        // Gráfico de campanhas
        await this.createCampaignsChart();
    }

    async createUsersChart() {
        const ctx = document.getElementById('usersChart').getContext('2d');
        const data = await window.googleAPIManager.getDailyUsersData(this.dateRange);
        
        if (this.charts.users) {
            this.charts.users.destroy();
        }

        this.charts.users = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(item => {
                    const date = new Date(item.date);
                    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
                }),
                datasets: [{
                    label: 'Usuários',
                    data: data.map(item => item.users),
                    borderColor: '#3C59A2',
                    backgroundColor: 'rgba(60, 89, 162, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#b0b0b0'
                        },
                        grid: {
                            color: '#3a3a3b'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#b0b0b0'
                        },
                        grid: {
                            color: '#3a3a3b'
                        }
                    }
                }
            }
        });
    }

    async createCampaignsChart() {
        const ctx = document.getElementById('campaignsChart').getContext('2d');
        const data = await window.googleAPIManager.getDailyAdsPerformance(this.dateRange);
        
        if (this.charts.campaigns) {
            this.charts.campaigns.destroy();
        }

        this.charts.campaigns = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(item => {
                    const date = new Date(item.date);
                    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
                }),
                datasets: [{
                    label: 'Cliques',
                    data: data.map(item => item.clicks),
                    backgroundColor: '#22c55e',
                    borderRadius: 4
                }, {
                    label: 'Custo (R$)',
                    data: data.map(item => parseFloat(item.cost)),
                    backgroundColor: '#f59e0b',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#b0b0b0'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#b0b0b0'
                        },
                        grid: {
                            color: '#3a3a3b'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#b0b0b0'
                        },
                        grid: {
                            color: '#3a3a3b'
                        }
                    }
                }
            }
        });
    }

    async loadGoogleAdsData() {
        try {
            const adsData = await window.googleAPIManager.getGoogleAdsMetrics(this.dateRange);
            
            // Atualizar métricas
            document.getElementById('impressions').textContent = window.googleAPIManager.formatNumber(adsData.impressions);
            document.getElementById('clicks').textContent = window.googleAPIManager.formatNumber(adsData.clicks);
            document.getElementById('avgCpc').textContent = window.googleAPIManager.formatCurrency(adsData.avgCpc);
            document.getElementById('conversions').textContent = adsData.conversions;
            
            // Carregar gráfico de performance
            await this.createAdsPerformanceChart();
        } catch (error) {
            console.error('Erro ao carregar dados do Google Ads:', error);
        }
    }

    async createAdsPerformanceChart() {
        const ctx = document.getElementById('adsPerformanceChart').getContext('2d');
        const data = await window.googleAPIManager.getDailyAdsPerformance(this.dateRange);
        
        if (this.charts.adsPerformance) {
            this.charts.adsPerformance.destroy();
        }

        this.charts.adsPerformance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(item => {
                    const date = new Date(item.date);
                    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
                }),
                datasets: [{
                    label: 'Impressões',
                    data: data.map(item => item.impressions),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    yAxisID: 'y'
                }, {
                    label: 'Cliques',
                    data: data.map(item => item.clicks),
                    borderColor: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    yAxisID: 'y1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#b0b0b0'
                        }
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            color: '#b0b0b0'
                        },
                        grid: {
                            color: '#3a3a3b'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            color: '#b0b0b0'
                        },
                        grid: {
                            drawOnChartArea: false,
                        }
                    },
                    x: {
                        ticks: {
                            color: '#b0b0b0'
                        },
                        grid: {
                            color: '#3a3a3b'
                        }
                    }
                }
            }
        });
    }

    async loadAnalyticsData() {
        try {
            const analyticsData = await window.googleAPIManager.getSessionsData(this.dateRange);
            
            // Atualizar métricas
            document.getElementById('sessions').textContent = window.googleAPIManager.formatNumber(analyticsData.sessions);
            document.getElementById('bounceRate').textContent = analyticsData.bounceRate + '%';
            document.getElementById('avgSessionDuration').textContent = window.googleAPIManager.formatDuration(analyticsData.avgSessionDuration);
            document.getElementById('pagesPerSession').textContent = analyticsData.pagesPerSession;
            
            // Carregar gráfico de páginas
            await this.createTopPagesChart();
        } catch (error) {
            console.error('Erro ao carregar dados do Analytics:', error);
        }
    }

    async createTopPagesChart() {
        const ctx = document.getElementById('topPagesChart').getContext('2d');
        const data = await window.googleAPIManager.getTopPages(this.dateRange);
        
        if (this.charts.topPages) {
            this.charts.topPages.destroy();
        }

        this.charts.topPages = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.map(item => item.page),
                datasets: [{
                    data: data.map(item => item.pageviews),
                    backgroundColor: [
                        '#3C59A2',
                        '#22c55e',
                        '#f59e0b',
                        '#ef4444',
                        '#8b5cf6'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#b0b0b0',
                            padding: 20
                        }
                    }
                }
            }
        });
    }

    loadSettingsData() {
        const user = window.authManager.getCurrentUser();
        if (user) {
            document.getElementById('userEmail').value = user.email;
        }
    }

    setupUserInfo() {
        const user = window.authManager.getCurrentUser();
        if (user) {
            document.querySelector('.user-email').textContent = user.email;
        }
    }

    async refreshData() {
        this.showLoading();
        try {
            await this.loadSectionData(this.currentSection);
        } catch (error) {
            console.error('Erro ao atualizar dados:', error);
            this.showError('Erro ao atualizar dados. Tente novamente.');
        } finally {
            this.hideLoading();
        }
    }

    async logout() {
        const result = await window.authManager.logout();
        if (result.success) {
            window.location.href = '/login';
        } else {
            alert('Erro ao fazer logout. Tente novamente.');
        }
    }

    showLoading() {
        this.isLoading = true;
        document.getElementById('loadingOverlay').style.display = 'flex';
    }

    hideLoading() {
        this.isLoading = false;
        document.getElementById('loadingOverlay').style.display = 'none';
    }

    showError(message) {
        // Implementar notificação de erro
        console.error(message);
        alert(message);
    }
}

// Inicializar dashboard quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    window.dashboard = new Dashboard();
    window.dashboard.init();
});