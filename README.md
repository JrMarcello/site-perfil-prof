# Landing Page - Perfil Profissional

Uma landing page moderna e responsiva para apresentação de perfil profissional, otimizada para hospedagem em S3 da AWS.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com gradientes e animações suaves
- **Totalmente Responsiva**: Adaptada para todos os dispositivos (desktop, tablet, mobile)
- **Performance Otimizada**: Carregamento rápido e otimizada para SEO
- **Seções Completas**: Hero, Sobre, Experiência, Habilidades, Projetos e Contato
- **Interatividade**: Animações on-scroll, menu mobile, formulário de contato
- **Pronta para S3**: Arquivos estáticos prontos para deploy em bucket S3

## 📁 Estrutura do Projeto

```
site-perfil-prof/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
├── robots.txt          # Arquivo para SEO
├── sitemap.xml         # Sitemap para motores de busca
└── README.md           # Este arquivo
```

## 🎨 Seções da Landing Page

### 1. Hero Section
- Apresentação principal com foto de perfil
- Botões de call-to-action
- Links para redes sociais
- Animação de scroll suave

### 2. Sobre Mim
- Descrição profissional
- Estatísticas de carreira
- Imagem complementar

### 3. Experiência Profissional
- Timeline interativa
- Histórico de cargos e empresas
- Tags de tecnologias utilizadas

### 4. Habilidades Técnicas
- Categorias organizadas (Frontend, Backend, DevOps)
- Barras de progresso animadas
- Ícones das tecnologias

### 5. Projetos em Destaque
- Cards com hover effects
- Links para demo e código
- Tags de tecnologias

### 6. Contato
- Informações de contato
- Formulário funcional
- Validação de campos

## 🛠️ Personalização

### Informações Pessoais
Edite as seguintes informações no `index.html`:

- **Nome**: Substitua "Seu Nome" pelo seu nome real
- **Título**: Altere "Desenvolvedor Full Stack | Especialista em [Sua Especialidade]"
- **Descrição**: Personalize a descrição na seção hero
- **Links Sociais**: Atualize os links do LinkedIn, GitHub, email e WhatsApp
- **Foto de Perfil**: Substitua o placeholder pela sua foto

### Experiência Profissional
Na seção `#experience`, atualize:
- Cargos e empresas
- Períodos de trabalho
- Descrições das responsabilidades
- Tecnologias utilizadas

### Habilidades
Na seção `#skills`, personalize:
- Categorias de habilidades
- Nível de proficiência (data-level)
- Ícones das tecnologias

### Projetos
Na seção `#projects`, adicione:
- Imagens dos projetos
- Descrições
- Links para demo e repositório
- Tecnologias utilizadas

### Contato
Na seção `#contact`, atualize:
- Email
- WhatsApp
- LinkedIn
- Localização

## 🚀 Deploy no AWS S3

### 1. Criar Bucket S3
```bash
aws s3 mb s3://seu-bucket-name
```

### 2. Configurar para Website Estático
```bash
aws s3 website s3://seu-bucket-name --index-document index.html --error-document index.html
```

### 3. Upload dos Arquivos
```bash
aws s3 sync . s3://seu-bucket-name --delete
```

### 4. Configurar Permissões
Adicione a seguinte política ao bucket:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::seu-bucket-name/*"
        }
    ]
}
```

### 5. CloudFront (Opcional)
Para melhor performance e HTTPS:
- Crie uma distribuição CloudFront
- Configure o bucket S3 como origem
- Adicione certificado SSL/TLS

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px
- **Mobile Small**: < 480px

## ⚡ Performance

- CSS e JavaScript otimizados
- Imagens com lazy loading (pode ser implementado)
- Fontes do Google Fonts com display=swap
- Animações com CSS transforms para melhor performance

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Gradients, Animations
- **JavaScript ES6+**: Interatividade e animações
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Inter)

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos canais disponíveis na landing page.

---

**Desenvolvido com ❤️ para apresentar seu perfil profissional de forma impactante!**
