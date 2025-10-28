// Configurações centralizadas do site
const SITE_CONFIG = {
    // URL do formulário de agendamento
    APPOINTMENT_FORM_URL: "https://docs.google.com/forms/d/e/1FAIpQLScG660LSwVent52ZCNl9c_azfheqy3YBFlSrOVjnJsxiaPgrQ/viewform?usp=preview",
    
    // URLs das redes sociais
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://www.instagram.com/psicologiasenso/"
    },
    
    // Informações de contato
    CONTACT: {
        EMAIL: "sensoinstituto@gmail.com",
        ADDRESS: "MAB Centro Médico Rua da Paz, 195 – Terceiro andar, sala 324, Centro - Curitiba/PR – CEP 80060-160",
        WHATSAPP: "https://api.whatsapp.com/send?phone=5541984220992&text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20psicoterapia."
    },
    
    // Horários de atendimento
    SCHEDULE: {
        WEEKDAYS: "Segunda à Sexta das 8h às 22h"
    }
};

// Exportar para uso global
window.SITE_CONFIG = SITE_CONFIG; 