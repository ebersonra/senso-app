// Dashboard Demo Script (without authentication)
class DashboardDemo {
    constructor() {
        this.currentSection = 'overview';
        this.charts = {};
    }

    init() {
        this.setupEventListeners();
        this.loadDemoData();
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

        // Mock buttons
        document.querySelectorAll('#logoutBtn, #logoutBtnSettings').forEach(btn => {
            btn.addEventListener('click', () => {
                alert('Demo: Função de logout desabilitada');
            });
        });

        const changePasswordBtn = document.getElementById('changePasswordBtn');
        if (changePasswordBtn) {
            changePasswordBtn.addEventListener('click', () => {
                alert('Demo: Função de alteração de senha desabilitada');
            });
        }

        const refreshBtn = document.getElementById('refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                alert('Demo: Dados já carregados');
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
    }

    loadDemoData() {
        // Carregar gráficos com dados demo
        this.createUsersChart();
        this.createCampaignsChart();
        this.createAdsPerformanceChart();
        this.createTopPagesChart();
    }

    createUsersChart() {
        const ctx = document.getElementById('usersChart').getContext('2d');
        
        // Dados simulados dos últimos 30 dias
        const labels = [];
        const data = [];
        const today = new Date();
        
        for (let i = 29; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            labels.push(date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
            data.push(Math.floor(Math.random() * 50) + 20);
        }

        this.charts.users = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Usuários',
                    data: data,
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

    createCampaignsChart() {
        const ctx = document.getElementById('campaignsChart').getContext('2d');
        
        // Dados simulados dos últimos 7 dias
        const labels = [];
        const clicksData = [];
        const costData = [];
        const today = new Date();
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            labels.push(date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
            clicksData.push(Math.floor(Math.random() * 20) + 5);
            costData.push(Math.floor(Math.random() * 50) + 10);
        }

        this.charts.campaigns = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Cliques',
                    data: clicksData,
                    backgroundColor: '#22c55e',
                    borderRadius: 4
                }, {
                    label: 'Custo (R$)',
                    data: costData,
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

    createAdsPerformanceChart() {
        const ctx = document.getElementById('adsPerformanceChart').getContext('2d');
        
        // Dados simulados dos últimos 14 dias
        const labels = [];
        const impressionsData = [];
        const clicksData = [];
        const today = new Date();
        
        for (let i = 13; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            labels.push(date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
            impressionsData.push(Math.floor(Math.random() * 2000) + 500);
            clicksData.push(Math.floor(Math.random() * 50) + 10);
        }

        this.charts.adsPerformance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Impressões',
                    data: impressionsData,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    yAxisID: 'y'
                }, {
                    label: 'Cliques',
                    data: clicksData,
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

    createTopPagesChart() {
        const ctx = document.getElementById('topPagesChart').getContext('2d');
        
        const data = [
            { page: '/', pageviews: 342 },
            { page: '/politica-privacidade', pageviews: 85 },
            { page: '/termos-uso', pageviews: 67 },
            { page: '/cookies', pageviews: 45 },
            { page: '/codigo-etica', pageviews: 23 }
        ];

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
}

// Inicializar dashboard demo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    window.dashboardDemo = new DashboardDemo();
    window.dashboardDemo.init();
});