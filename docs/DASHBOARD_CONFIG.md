# Configuração do Dashboard Analytics

## Visão Geral

O Dashboard Analytics foi implementado como uma extensão do sistema existente, mantendo a compatibilidade total com a arquitetura SPA e sistema de build.

## 📋 Configuração Inicial

### 1. Configuração do Supabase

Edite o arquivo `static/js/supabase-config.js`:

```javascript
const SUPABASE_CONFIG = {
    url: 'https://your-project-url.supabase.co', // Substituir pela URL real do projeto
    anonKey: 'your-anon-key', // Substituir pela chave anônima real
};
```

**Passos para obter as credenciais:**
1. Acesse [supabase.com](https://supabase.com)
2. Crie um novo projeto ou acesse um existente
3. Vá em Settings > API
4. Copie a URL e a chave anônima (anon/public)

### 2. Configuração Google Analytics 4

Edite o arquivo `static/js/google-api.js`, seção `ga4`:

```javascript
ga4: {
    measurementId: 'G-XXXXXXXXXX', // ID do GA4 (já configurado no site)
    apiKey: 'your-api-key', // Chave da API do Google
    propertyId: 'properties/123456789' // ID da propriedade GA4
}
```

**Como obter as credenciais:**
1. Acesse [Google Cloud Console](https://console.cloud.google.com)
2. Crie/selecione um projeto
3. Ative a API Google Analytics Reporting API v4
4. Crie uma chave de API
5. No Google Analytics, obtenha o Property ID

### 3. Configuração Google Ads

Edite o arquivo `static/js/google-api.js`, seção `googleAds`:

```javascript
googleAds: {
    clientId: 'your-client-id', // Client ID OAuth 2.0
    developerToken: 'your-developer-token', // Token de desenvolvedor
    customerId: '123-456-7890' // ID do cliente Google Ads
}
```

**Como obter as credenciais:**
1. Acesse [Google Ads API Center](https://developers.google.com/google-ads/api)
2. Solicite um Developer Token
3. Configure OAuth 2.0 no Google Cloud Console
4. Obtenha o Customer ID no Google Ads

## 🔐 Configuração de Autenticação

### Criando Usuários no Supabase

1. **Via Dashboard Supabase:**
   - Acesse Authentication > Users
   - Clique em "Add user"
   - Insira email e senha
   - Confirme o usuário

2. **Via SQL (Supabase SQL Editor):**
```sql
-- Inserir usuário manualmente
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'admin@sensopsicologia.com',
  crypt('sua_senha_segura', gen_salt('bf')),
  now(),
  now(),
  now()
);
```

## 🚀 Deploy e Produção

### 1. Headers de Segurança

Adicione ao arquivo `_headers`:

```
/dashboard*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### 2. Redirects para Produção

O arquivo `_redirects` já está configurado:

```
/login /login.html 200
/dashboard /dashboard.html 200
```

## 📊 Funcionalidades Implementadas

### Seções do Dashboard

1. **Visão Geral** - KPIs principais com gráficos
2. **Google Ads** - Métricas de campanhas publicitárias  
3. **Analytics** - Comportamento e engajamento dos usuários
4. **Configurações** - Gerenciamento de conta

### Recursos Técnicos

- ✅ Proteção de rotas com autenticação
- ✅ Sessão persistente
- ✅ Responsividade total (desktop/tablet/mobile)
- ✅ Dark mode integrado
- ✅ Gráficos interativos (Chart.js)
- ✅ Filtros de período
- ✅ Integração com SPA existente

## 🚨 Segurança

### Boas Práticas Implementadas

- ✅ Autenticação obrigatória para acesso
- ✅ Sanitização de dados com DOMPurify
- ✅ Headers de segurança configurados
- ✅ Proteção contra XSS
- ✅ Sessões seguras via Supabase

## 📚 Recursos e Documentação

- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Google Analytics 4 API](https://developers.google.com/analytics/devguides/reporting/data/v1)
- [Google Ads API](https://developers.google.com/google-ads/api)
- [Chart.js Documentation](https://www.chartjs.org/docs/)