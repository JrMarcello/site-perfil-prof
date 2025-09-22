// Internationalization (i18n) for Marcelo Jr's Portfolio
const translations = {
    pt: {
        // Navigation
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',

        // Hero Section
        'hero.greeting': 'Olá, eu sou',
        'hero.subtitle': 'Arquiteto de Soluções | Especialista em Cloud Computing e AWS',
        'hero.description': 'Formado em Sistemas para Internet pelo IFPB em 2014, sou apaixonado por design e desenvolvimento de software. Com mais de 10 anos de experiência, crio soluções robustas e escaláveis para os setores bancário, industrial e fintech, unindo criatividade e eficiência.',
        'hero.contact_btn': 'Entre em Contato',
        'hero.projects_btn': 'Ver Projetos',

        // About Section
        'about.title': 'Sobre Mim',
        'about.subtitle': 'Conheça um pouco da minha trajetória',
        'about.description1': 'Ao longo de mais de 10 anos de experiência, participei de projetos em diferentes segmentos, incluindo fábricas industriais, processadoras de cartões de crédito, fintechs B2B e o setor bancário (BaaS).',
        'about.description2': 'Sou especializado em arquitetura de software, aplicando boas práticas e padrões modernos de projeto para desenvolver soluções robustas, escaláveis e sustentáveis. Meu propósito é apoiar empresas na superação de desafios tecnológicos, impulsionar a inovação e gerar valor real para seus clientes.',
        'about.stats.experience': 'Anos de Experiência',
        'about.stats.projects': 'Projetos Concluídos',
        'about.stats.companies': 'Empresas de Referência',

        // Experience Section
        'experience.title': 'Experiência Profissional',
        'experience.subtitle': 'Minha trajetória profissional',
        'experience.itau.title': 'Arquiteto de Soluções',
        'experience.itau.company': 'Itaú Unibanco',
        'experience.itau.period': 'Mar 2022 - Presente',
        'experience.itau.description': 'Ajudando os times no Itaú a construir serviços e aplicações resilientes, escaláveis, seguras e de alta performance trabalhando, principalmente, com componentes e serviços da AWS. Atuando num contexto modernizado onde uma arquitetura complexa de microserviços é predominante, com suporte a convivência com sistemas legados. Um conglomerado de dados robusto é gerenciado por modelo Data Mesh.',
        'experience.dock.title': 'Senior Software Engineering',
        'experience.dock.company': 'Dock',
        'experience.dock.period': 'Nov 2020 - Mar 2022',
        'experience.dock.description': 'Atuei na squad Athos responsável por manter os produtos de Marketplace. Desenvolvimento, implementação e manutenção de microserviços e APIs para soluções de Banking as a Service (BaaS) numa arquitetura serverless provida na cloud AWS.',
        'experience.leads2b.title': 'Software Engineering',
        'experience.leads2b.company': 'Leads2b',
        'experience.leads2b.period': 'Jan 2020 - Out 2020',
        'experience.leads2b.description': 'Integrando o time de produtos, estava responsável por desenvolver e manter todo ecossistema web que compõe a plataforma da Leads2b. Mantendo APIs em uma arquitetura mista com um monolito escrito em PHP (Codeigniter) e alguns microserviços escritos em Javascript (Nodejs).',

        // Skills Section
        'skills.title': 'Habilidades Técnicas',
        'skills.subtitle': 'Tecnologias e ferramentas que domino',
        'skills.backend': 'Backend',
        'skills.devops': 'DevOps & Cloud',
        'skills.database': 'Banco de Dados',

        // Projects Section
        'projects.title': 'Projetos em Destaque',
        'projects.subtitle': 'Alguns dos meus trabalhos mais relevantes',
        'projects.microservices.title': 'Arquitetura de Microserviços',
        'projects.microservices.description': 'Modernização de arquitetura no Itaú, transformando sistemas monolíticos em microserviços escaláveis e resilientes com padrões de design modernos.',
        'projects.cloud.title': 'Cloud Infrastructure',
        'projects.cloud.description': 'Implementação de infraestrutura cloud completa na AWS com automação via Terraform, pipelines CI/CD e monitoramento de aplicações em produção.',
        'projects.baas.title': 'Banking as a Service',
        'projects.baas.description': 'Desenvolvimento de APIs para soluções BaaS na Dock, criando microserviços serverless para marketplace financeiro com alta disponibilidade.',

        // Contact Section
        'contact.title': 'Vamos Conversar?',
        'contact.subtitle': 'Entre em contato para discutirmos oportunidades',
        'contact.email': 'Email',
        'contact.whatsapp': 'WhatsApp',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub'
    },
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Hi, I\'m',
        'hero.subtitle': 'Solutions Architect | Cloud Computing and AWS Specialist',
        'hero.description': 'Graduated in Internet Systems from IFPB in 2014, I am passionate about design and software development. With over 10 years of experience, I create robust and scalable solutions for banking, industrial, and fintech sectors, combining creativity and efficiency.',
        'hero.contact_btn': 'Get in Touch',
        'hero.projects_btn': 'View Projects',

        // About Section
        'about.title': 'About Me',
        'about.subtitle': 'Get to know a bit about my journey',
        'about.description1': 'Over more than 10 years of experience, I have participated in projects across different segments, including industrial factories, credit card processors, B2B fintechs, and the banking sector (BaaS).',
        'about.description2': 'I am specialized in software architecture, applying best practices and modern design patterns to develop robust, scalable, and sustainable solutions. My purpose is to support companies in overcoming technological challenges, driving innovation, and generating real value for their clients.',
        'about.stats.experience': 'Years of Experience',
        'about.stats.projects': 'Completed Projects',
        'about.stats.companies': 'Reference Companies',

        // Experience Section
        'experience.title': 'Professional Experience',
        'experience.subtitle': 'My professional journey',
        'experience.itau.title': 'Solutions Architect',
        'experience.itau.company': 'Itaú Unibanco',
        'experience.itau.period': 'Mar 2022 - Present',
        'experience.itau.description': 'Helping Itaú teams build resilient, scalable, secure, and high-performance services and applications, working mainly with AWS components and services. Operating in a modernized context where a complex microservices architecture is predominant, with support for coexistence with legacy systems. A robust data conglomerate is managed by a Data Mesh model.',
        'experience.dock.title': 'Senior Software Engineering',
        'experience.dock.company': 'Dock',
        'experience.dock.period': 'Nov 2020 - Mar 2022',
        'experience.dock.description': 'I worked in the Athos squad responsible for maintaining Marketplace products. Development, implementation, and maintenance of microservices and APIs for Banking as a Service (BaaS) solutions in a serverless architecture provided in AWS cloud.',
        'experience.leads2b.title': 'Software Engineering',
        'experience.leads2b.company': 'Leads2b',
        'experience.leads2b.period': 'Jan 2020 - Oct 2020',
        'experience.leads2b.description': 'Integrating the product team, I was responsible for developing and maintaining the entire web ecosystem that makes up the Leads2b platform. Maintaining APIs in a mixed architecture with a monolith written in PHP (Codeigniter) and some microservices written in Javascript (Nodejs).',

        // Skills Section
        'skills.title': 'Technical Skills',
        'skills.subtitle': 'Technologies and tools I master',
        'skills.backend': 'Backend',
        'skills.devops': 'DevOps & Cloud',
        'skills.database': 'Database',

        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Some of my most relevant work',
        'projects.microservices.title': 'Microservices Architecture',
        'projects.microservices.description': 'Architecture modernization at Itaú, transforming monolithic systems into scalable and resilient microservices with modern design patterns.',
        'projects.cloud.title': 'Cloud Infrastructure',
        'projects.cloud.description': 'Complete cloud infrastructure implementation on AWS with Terraform automation, CI/CD pipelines, and production application monitoring.',
        'projects.baas.title': 'Banking as a Service',
        'projects.baas.description': 'API development for BaaS solutions at Dock, creating serverless microservices for financial marketplace with high availability.',

        // Contact Section
        'contact.title': 'Let\'s Talk?',
        'contact.subtitle': 'Get in touch to discuss opportunities',
        'contact.email': 'Email',
        'contact.whatsapp': 'WhatsApp',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub'
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'pt';

// Function to translate text
function translateText(key, lang = currentLang) {
    return translations[lang][key] || translations['pt'][key] || key;
}

// Function to update all translatable elements
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translateText(key, lang);
        
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
    
    // Add click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});
