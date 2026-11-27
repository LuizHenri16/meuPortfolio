 (function () {
    if (!('commandForElement' in HTMLButtonElement.prototype)) {
      document.addEventListener('click', function (e) {
        var btn = e.target.closest('button[commandfor]');
        if (!btn) return;
        var target = document.getElementById(btn.getAttribute('commandfor'));
        if (!target || !(target instanceof HTMLDialogElement)) return;
        var cmd = btn.getAttribute('command');
        if (cmd === 'show-modal') target.showModal();
        else if (cmd === 'close') target.close();
      });
    }
 
    if (!CSS.supports('animation-timeline: scroll()')) {
      var root = document.documentElement;
      var update = function () {
        var p = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.55), 0), 1);
        root.style.setProperty('--hero-p', p);
      };
      window.addEventListener('scroll', update, { passive: true });
      update();
    }

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      document.querySelectorAll('dialog.modal').forEach(function (dlg) {
        dlg.addEventListener('click', function (e) {
          if (e.target !== dlg) return; 
          var r = dlg.getBoundingClientRect();
          var inside = e.clientX >= r.left && e.clientX <= r.right &&
                       e.clientY >= r.top && e.clientY <= r.bottom;
          if (!inside) dlg.close();
        });
      });
    }

    var backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      var isVisible = false;
      var syncBackToTop = function () {
        var shouldShow = window.scrollY > 360;
        if (shouldShow === isVisible) return;
        isVisible = shouldShow;
        backToTop.classList.toggle('back-to-top--visible', shouldShow);
        backToTop.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
        backToTop.setAttribute('tabindex', shouldShow ? '0' : '-1');
      };

      window.addEventListener('scroll', syncBackToTop, { passive: true });
      syncBackToTop();

      backToTop.addEventListener('click', function () {
        var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({
          top: 0,
          behavior: reduced ? 'auto' : 'smooth'
        });
      });
    }

    var I18N = {
      pt: {
        'meta.title': 'Luiz Henrique | Engenheiro de Software',
        'meta.description': 'Portfólio de Luiz Henrique, engenheiro de software com foco em sistemas escaláveis, desempenho e arquitetura limpa.',
        'meta.ogTitle': 'Luiz Henrique | Engenheiro de Software',
        'meta.ogDescription': 'Conheça os projetos, a experiência e os objetivos de Luiz Henrique em engenharia de software.',
        'controls.groupLabel': 'Controles rápidos e navegação',
        'lang.groupLabel': 'Selecionar idioma',
        'theme.darkAria': 'Ativar tema escuro',
        'theme.darkLabel': 'Tema escuro',
        'theme.lightAria': 'Ativar tema claro',
        'theme.lightLabel': 'Tema claro',
        'zen.enterAria': 'Ativar Modo Zen',
        'zen.enterLabel': 'Modo Zen',
        'zen.exitAria': 'Sair do Modo Zen',
        'zen.exitLabel': 'Sair do Zen (Esc)',
        'nav.groupLabel': 'Navegação por seções',
        'nav.philosophyLabel': 'Filosofia',
        'nav.philosophyAria': 'Ir para Filosofia',
        'nav.projectsLabel': 'Projetos',
        'nav.projectsAria': 'Ir para Projetos',
        'nav.educationLabel': 'Educação',
        'nav.educationAria': 'Ir para Educação',
        'nav.skillsLabel': 'Competências',
        'nav.skillsAria': 'Ir para Competências Técnicas',
        'nav.cvLabel': 'Currículo',
        'nav.cvAria': 'Ir para Currículo',
        'nav.locationLabel': 'Localização',
        'nav.locationAria': 'Ir para Localização e Jornada',
        'hero.subtitle': 'ENGENHEIRO DE SOFTWARE / ARQUITETO DE SISTEMAS',
        'philosophy.headline': 'Construindo sistemas escaláveis com foco em alto desempenho e arquitetura limpa.',
        'philosophy.p1': 'Minha abordagem em engenharia de software foca em transformar problemas complexos em sistemas limpos, estruturados e fáceis de manter. Acredito que arquitetura de software e código limpo são essenciais para construir aplicações confiáveis que crescem sem interrupções.',
        'philosophy.p2': 'Priorizo o <strong>design de sistemas</strong> distribuídos pensados para estabilidade, alto desempenho e baixa latência. Meu objetivo é criar soluções escaláveis que resistam às tendências temporárias da tecnologia.',
        'philosophy.pillar1Title': 'ALTO DESEMPENHO',
        'philosophy.pillar1Desc': 'Latência de milissegundos e ingestão sem bloqueios.',
        'philosophy.pillar2Title': 'TOLERÂNCIA A FALHAS',
        'philosophy.pillar2Desc': 'Segurança por consenso e estado auto-recuperável.',
        'philosophy.pillar3Title': 'SEM BLOAT',
        'philosophy.pillar3Desc': 'Simpatia mecânica e abstrações mínimas.',
        'projects.title': 'Projetos',
        'projects.searchPlaceholder': 'Filtrar por nome ou stack...',
        'projects.searchAria': 'Filtrar projetos por nome ou tecnologias',
        'projects.clearSearch': 'Limpar pesquisa',
        'projects.tabsAria': 'Selecionar projeto',
        'projects.navAria': 'Navegação entre projetos',
        'projects.prevLabel': 'Projeto anterior',
        'projects.nextLabel': 'Próximo projeto',
        'projects.showcaseAria': 'Vitrine horizontal de projetos',
        'projects.luaLogoAlt': 'Logo A Ciência da Lua',
        'projects.luaDesc': 'Plataforma de e-commerce de materiais didáticos de Ciências criada para estudantes do Ensino Fundamental/Médio e vestibulandos e para professores que buscam materiais prontos para a sala de aula, mapas conceituais, resumos, exercícios, slides, jogos e planos de aula, todos autorais e produzidos pela Profa. Lua (UFRN).',
        'projects.cta': 'ARQUITETURA E CÓDIGO',
        'projects.visitApp': 'Visitar aplicação',
        'projects.mmLogoAlt': 'Logo MovieMatch',
        'projects.mmDesc': 'Aplicativo mobile MovieMatch. Feito para guardar seus filmes favoritos e avaliar junto a sua dupla.',
        'projects.visitLanding': 'Visitar landing page',
        'projects.pulseDesc': 'Aplicativo fitness offline-first para registrar treinos com fichas personalizáveis (modelos Full Body, PPL, ABC, ABCD), biblioteca de 400+ exercícios com detalhes de músculos e equipamentos, execução guiada com séries/cargas/descanso, histórico de progresso separado por tipo de equipamento (barra/halter/máquina) e visualizador anatômico 3D em desenvolvimento. Tudo salvo localmente no aparelho, sem login obrigatório nem anúncios.',
        'projects.emptyPrefix': 'Nenhum projeto encontrado para',
        'projects.resetFilter': 'Limpar filtro',
        'education.title': 'Educação',
        'education.progressionLabel': 'PROGRESSÃO CURRICULAR',
        'education.senacTitle': 'Técnico em Desenvolvimento de Sistemas',
        'education.senacCore': 'NÚCLEO: CONCLUÍDO',
        'education.senacVerified': '100,0% CONFERIDO',
        'education.senacInstitution': 'INSTITUIÇÃO: SENAC',
        'education.senacStatus': 'STATUS: CONCLUÍDO',
        'education.descomplicaTitle': 'Bacharelado em Engenharia de Software',
        'education.descomplicaProgress': 'PROGRESSO DO CURSO',
        'education.descomplicaCompleted': '25,0% CONCLUÍDO',
        'education.descomplicaInstitution': 'INSTITUIÇÃO: DESCOMPLICA',
        'education.descomplicaStatus': 'STATUS: EM ANDAMENTO',
        'education.quote': '“A simplicidade é pré-requisito para confiabilidade.”',
        'education.objectivesLabel': 'OBJETIVOS PROFISSIONAIS',
        'education.obj1Kind': 'DESIGN DE SISTEMAS',
        'education.obj1Title': 'Projetar sistemas confiáveis e escaláveis',
        'education.obj1Desc': 'CONSTRUINDO UMA BASE SÓLIDA EM SISTEMAS DISTRIBUÍDOS',
        'education.obj2Kind': 'NUVEM & INFRAESTRUTURA',
        'education.obj2Title': 'Ampliar as habilidades práticas em engenharia em nuvem',
        'education.obj2Desc': 'APRENDENDO A IMPLANTAR E OPERAR SERVIÇOS PRONTOS PARA PRODUÇÃO',
        'education.obj3Kind': 'ENGENHARIA DE SOFTWARE',
        'education.obj3Title': 'Continuar melhorando por meio de projetos práticos',
        'education.obj3Desc': 'FOCANDO EM CÓDIGO LIMPO, TESTES E APRENDIZADO CONTÍNUO',
        'skills.title': 'Competências Técnicas',
        'skills.catBackend': 'Backend',
        'skills.catFrontend': 'Frontend',
        'skills.catDevops': 'DevOps',
        'skills.catDatabase': 'Banco de Dados',
        'skills.catSkills': 'Skills',
        'skills.catAi': 'AI Agents',
        'skills.pooBadge': 'POO',
        'skills.levelIntermediate': 'Intermediário',
        'skills.levelAdvanced': 'Avançado',
        'skills.levelSolid': 'Consolidado',
        'skills.time1Plus': '1+ ano de uso',
        'skills.time1_5': '1,5 ano de uso',
        'skills.time2': '2 anos de uso',
        'skills.time2Plus': '2+ anos de uso',
        'skills.time2_5': '2,5 anos de uso',
        'skills.time3': '3 anos de uso',
        'skills.time4': '4 anos de uso',
        'cv.eyebrow': 'CURRÍCULO <span aria-hidden="true">/</span> ATUALIZADO 2026',
        'cv.title': 'Currículo detalhado.',
        'cv.description': 'Conheça minha experiência como desenvolvedor de sistemas, deploy e projetos em produção, projetos open source e competências técnicas.',
        'cv.format': 'FORMATO: PDF',
        'cv.download': 'BAIXAR CURRÍCULO',
        'location.title': 'Localização & Jornada',
        'location.mapBar': 'BRASIL · MAPA DE ATUAÇÃO',
        'location.mapTitle': 'Mapa estilizado do Brasil com pontos da jornada acadêmica e profissional',
        'location.mapDesc': 'Mapa destacando a Bahia pelos polos EAD em Lauro de Freitas (SENAC) e Salvador (Descomplica), além do Rio Grande do Norte pelo projeto A Ciência da Lua com a UFRN.',
        'location.pinBahiaAria': 'Bahia: Polo SENAC EAD em Lauro de Freitas e polo Descomplica EAD em Salvador',
        'location.pinRnAria': 'Rio Grande do Norte: Projeto em produção com a UFRN',
        'location.item1Eyebrow': 'LAURO DE FREITAS, BA · POLO SENAC EAD (2023 – 2025)',
        'location.item1Title': 'Desenvolvimento de Sistemas & Base Full Stack',
        'location.item1Desc': 'Formação técnica EAD concluída pelo polo de Lauro de Freitas do SENAC, com base sólida em sistemas web e distribuídos.',
        'location.item2Eyebrow': 'SALVADOR, BA · POLO DESCOMPLICA (2026 – 2030)',
        'location.item2Title': 'Bacharelado em Engenharia de Software',
        'location.item2Desc': 'Graduação em andamento pelo polo presente em Salvador da Faculdade Digital Descomplica com foco em arquitetura e sistemas escaláveis.',
        'location.item3Eyebrow': 'RIO GRANDE DO NORTE · UFRN (2026)',
        'location.item3Title': 'A Ciência da Lua — Plataforma em Produção',
        'location.item3Desc': 'Arquitetura full stack e infraestrutura em VPS para materiais didáticos autorais produzidos pela Profa. Lua (UFRN).',
        'footer.aria': 'Rodapé',
        'footer.linksAria': 'Redes e contato',
        'footer.copyright': '© 2026 LUIZ HENRIQUE — TODOS OS DIREITOS RESERVADOS',
        'modal.closeAria': 'Fechar',
        'modal.repoSingleAria': 'Repositório do projeto',
        'modal.repoMultiAria': 'Repositórios do projeto',
        'modal.projectSite': 'Site do projeto',
        'modal.mmTitle': 'Arquitetura do projeto MovieMatch',
        'modal.mmDesc': 'Diagrama de arquitetura do aplicativo MovieMatch em Kotlin Multiplatform e Compose integrado à TMDB API, Supabase Postgres e Login Google.',
        'modal.mmUsers1': 'Grupo de',
        'modal.mmUsers2': 'amigos',
        'modal.mmApp': 'App mobile',
        'modal.mmPlatforms': '(Android e iOS)',
        'modal.mmEdgeSearch': 'busca',
        'modal.mmTmdbSub': '(busca de filmes)',
        'modal.mmEdgeSave': 'salva e avalia',
        'modal.mmSupa1': 'Postgres (filmes, grupos,',
        'modal.mmSupa2': 'sessões, notas)',
        'modal.mmEdgeAuth': 'entrar',
        'modal.mmGoogleTitle': 'Login Google',
        'modal.mmCaption': 'Arquitetura do projeto MovieMatch',
        'runtime.eyebrow': 'CONSUMO EM IDLE',
        'runtime.title': 'Antes e depois da otimização',
        'runtime.capacityAria': 'Limite total de memória: antes 3.912 MiB, usando 978 MiB por container; depois 704 MiB somados',
        'runtime.ramLimitLabel': 'Limite total de RAM',
        'runtime.capacitySub': '978 MiB por container antes <span aria-hidden="true">·</span> otimizado',
        'runtime.backendAria': 'Comparação de uso do backend',
        'runtime.beforeAria': 'Antes da otimização',
        'runtime.afterAria': 'Após a otimização',
        'runtime.beforeSnapshotAria': 'Antes da otimização, valor mantido igual ao snapshot atual',
        'runtime.nestBefore': 'NestJS · Antes',
        'runtime.goOptimized': 'Go · Otimizado',
        'runtime.before': 'Antes',
        'runtime.optimized': 'Otimizado',
        'runtime.notMeasured': 'Não medido',
        'runtime.backendRamBeforeAria': 'Uso estimado de memória RAM do backend antes da otimização',
        'runtime.backendRamOptAria': 'Uso de memória RAM do backend otimizado',
        'runtime.backendCpuOptAria': 'Uso de CPU do backend otimizado',
        'runtime.nginxAria': 'Comparação de uso do Nginx',
        'runtime.nginxRamBeforeAria': 'Uso de memória RAM do Nginx antes da otimização',
        'runtime.nginxRamOptAria': 'Uso de memória RAM do Nginx otimizado',
        'runtime.nginxCpuOptAria': 'Uso de CPU do Nginx otimizado',
        'runtime.dbAria': 'Comparação de uso do banco de dados',
        'runtime.dbTitle': 'Banco de dados',
        'runtime.dbRamBeforeAria': 'Uso estimado de memória RAM do banco de dados antes da otimização',
        'runtime.dbRamOptAria': 'Uso de memória RAM do banco de dados otimizado',
        'runtime.dbCpuOptAria': 'Uso de CPU do banco de dados otimizado',
        'runtime.frontendAria': 'Comparação de uso do frontend',
        'runtime.frontendRamBeforeAria': 'Uso de memória RAM do frontend antes da otimização',
        'runtime.frontendRamOptAria': 'Uso de memória RAM do frontend otimizado',
        'runtime.frontendCpuOptAria': 'Uso de CPU do frontend otimizado',
        'runtime.note': 'Antes, cada container tinha limite de 978 MiB (3.912 MiB no total). Uso anterior do backend e banco estimado; Nginx e frontend mantidos iguais ao snapshot atual. CPU anterior não medida. Barras mostram a porcentagem do limite de RAM de cada container.',
        'modal.luaTitle': 'Arquitetura do projeto A Ciência da Lua',
        'modal.luaDesc': 'Diagrama de arquitetura do projeto A Ciência da Lua: Frontend, Nginx proxy, API Go, PostgreSQL e integrações Mercado Pago, Resend e Arquivos.',
        'modal.luaGoApi': 'API Go',
        'modal.luaPayments': '(pagamentos)',
        'modal.luaEmails': '(e-mails)',
        'modal.luaFiles': 'Arquivos',
        'modal.luaFilesSub': '(uploads e files)',
        'modal.luaCaption': 'Arquitetura do projeto A Ciência da Lua',
        'modal.pulseTitle': 'Arquitetura do projeto Pulse',
        'modal.pulseDesc': 'Diagrama de arquitetura offline-first do aplicativo Android Pulse em Kotlin, Jetpack Compose, Material 3 e banco local Room.',
        'modal.pulseUser': 'Usuário',
        'modal.pulseEdgeTrains': 'treina',
        'modal.pulseApp': 'App Android',
        'modal.pulseAppSub': '(Material 3 · Execução guiada)',
        'modal.pulseEdgeQuery': 'consulta',
        'modal.pulseCatalog': 'Catálogo de Exercícios',
        'modal.pulseCatalogSub': '(400+ exercícios e músculos)',
        'modal.pulseEdgeSave': 'salva local',
        'modal.pulseRoom': 'Room / SQLite Local',
        'modal.pulseRoomSub': '(Fichas, cargas e histórico)',
        'modal.pulseEdgeRender': 'renderiza',
        'modal.pulse3d': 'Visualizador Anatômico 3D',
        'modal.pulse3dSub': '(Em desenvolvimento)',
        'modal.pulseCaption': 'Arquitetura do projeto Pulse',
        'backToTop.label': 'Voltar ao topo'
      },
      en: {
        'meta.title': 'Luiz Henrique | Software Engineer',
        'meta.description': 'Portfolio of Luiz Henrique, a software engineer focused on scalable systems, high performance, and clean architecture.',
        'meta.ogTitle': 'Luiz Henrique | Software Engineer',
        'meta.ogDescription': 'Explore Luiz Henrique’s projects, experience, and goals in software engineering.',
        'controls.groupLabel': 'Quick controls and navigation',
        'lang.groupLabel': 'Select language',
        'theme.darkAria': 'Enable dark theme',
        'theme.darkLabel': 'Dark theme',
        'theme.lightAria': 'Enable light theme',
        'theme.lightLabel': 'Light theme',
        'zen.enterAria': 'Enable Zen Mode',
        'zen.enterLabel': 'Zen Mode',
        'zen.exitAria': 'Exit Zen Mode',
        'zen.exitLabel': 'Exit Zen (Esc)',
        'nav.groupLabel': 'Section navigation',
        'nav.philosophyLabel': 'Philosophy',
        'nav.philosophyAria': 'Go to Philosophy',
        'nav.projectsLabel': 'Projects',
        'nav.projectsAria': 'Go to Projects',
        'nav.educationLabel': 'Education',
        'nav.educationAria': 'Go to Education',
        'nav.skillsLabel': 'Skills',
        'nav.skillsAria': 'Go to Technical Skills',
        'nav.cvLabel': 'Resume',
        'nav.cvAria': 'Go to Resume',
        'nav.locationLabel': 'Location',
        'nav.locationAria': 'Go to Location & Journey',
        'hero.subtitle': 'SOFTWARE ENGINEER / SYSTEMS ARCHITECT',
        'philosophy.headline': 'Building scalable systems focused on high performance and clean architecture.',
        'philosophy.p1': 'My approach to software engineering focuses on turning complex problems into clean, structured, and maintainable systems. I believe software architecture and clean code are essential to building reliable applications that scale without disruption.',
        'philosophy.p2': 'I prioritize <strong>distributed systems design</strong> engineered for stability, high performance, and low latency. My goal is to craft scalable solutions that outlast temporary tech trends.',
        'philosophy.pillar1Title': 'HIGH PERFORMANCE',
        'philosophy.pillar1Desc': 'Millisecond latency and non-blocking ingestion.',
        'philosophy.pillar2Title': 'FAULT TOLERANCE',
        'philosophy.pillar2Desc': 'Consensus-backed safety and self-healing state.',
        'philosophy.pillar3Title': 'ZERO BLOAT',
        'philosophy.pillar3Desc': 'Mechanical sympathy and minimal abstractions.',
        'projects.title': 'Projects',
        'projects.searchPlaceholder': 'Filter by name or stack...',
        'projects.searchAria': 'Filter projects by name or technologies',
        'projects.clearSearch': 'Clear search',
        'projects.tabsAria': 'Select project',
        'projects.navAria': 'Project navigation',
        'projects.prevLabel': 'Previous project',
        'projects.nextLabel': 'Next project',
        'projects.showcaseAria': 'Horizontal project showcase',
        'projects.luaLogoAlt': 'A Ciência da Lua logo',
        'projects.luaDesc': 'Science teaching-materials e-commerce platform built for middle/high school and college-entrance students as well as teachers looking for classroom-ready resources—concept maps, summaries, exercises, slides, games, and lesson plans—all authored by Prof. Lua (UFRN).',
        'projects.cta': 'ARCHITECTURE & CODE',
        'projects.visitApp': 'Visit live app',
        'projects.mmLogoAlt': 'MovieMatch logo',
        'projects.mmDesc': 'MovieMatch mobile app. Built to save your favorite movies and rate them together with your partner.',
        'projects.visitLanding': 'Visit landing page',
        'projects.pulseDesc': 'Offline-first fitness app for logging workouts with customizable splits (Full Body, PPL, ABC, ABCD), a library of 400+ exercises with muscle and equipment details, guided workout execution with sets/weights/rest timers, progress history separated by equipment type (barbell/dumbbell/machine), and a 3D anatomical viewer in development. Everything stored locally on the device, with no mandatory login or ads.',
        'projects.emptyPrefix': 'No projects found for',
        'projects.resetFilter': 'Clear filter',
        'education.title': 'Education',
        'education.progressionLabel': 'CURRICULAR PROGRESSION',
        'education.senacTitle': 'Technical Degree in Systems Development',
        'education.senacCore': 'CORE: COMPLETED',
        'education.senacVerified': '100.0% VERIFIED',
        'education.senacInstitution': 'INSTITUTION: SENAC',
        'education.senacStatus': 'STATUS: COMPLETED',
        'education.descomplicaTitle': 'B.S. in Software Engineering',
        'education.descomplicaProgress': 'COURSE PROGRESS',
        'education.descomplicaCompleted': '25.0% COMPLETED',
        'education.descomplicaInstitution': 'INSTITUTION: DESCOMPLICA',
        'education.descomplicaStatus': 'STATUS: IN PROGRESS',
        'education.quote': '“Simplicity is prerequisite for reliability.”',
        'education.objectivesLabel': 'CAREER OBJECTIVES',
        'education.obj1Kind': 'SYSTEMS DESIGN',
        'education.obj1Title': 'Design reliable and scalable systems',
        'education.obj1Desc': 'BUILDING A SOLID FOUNDATION IN DISTRIBUTED SYSTEMS',
        'education.obj2Kind': 'CLOUD & INFRASTRUCTURE',
        'education.obj2Title': 'Expand hands-on skills in cloud engineering',
        'education.obj2Desc': 'LEARNING TO DEPLOY AND OPERATE PRODUCTION-READY SERVICES',
        'education.obj3Kind': 'SOFTWARE ENGINEERING',
        'education.obj3Title': 'Keep improving through hands-on projects',
        'education.obj3Desc': 'FOCUSING ON CLEAN CODE, TESTING, AND CONTINUOUS LEARNING',
        'skills.title': 'Technical Skills',
        'skills.catBackend': 'Backend',
        'skills.catFrontend': 'Frontend',
        'skills.catDevops': 'DevOps',
        'skills.catDatabase': 'Databases',
        'skills.catSkills': 'Engineering',
        'skills.catAi': 'AI Agents',
        'skills.pooBadge': 'OOP',
        'skills.levelIntermediate': 'Intermediate',
        'skills.levelAdvanced': 'Advanced',
        'skills.levelSolid': 'Solid',
        'skills.time1Plus': '1+ year of experience',
        'skills.time1_5': '1.5 years of experience',
        'skills.time2': '2 years of experience',
        'skills.time2Plus': '2+ years of experience',
        'skills.time2_5': '2.5 years of experience',
        'skills.time3': '3 years of experience',
        'skills.time4': '4 years of experience',
        'cv.eyebrow': 'RESUME <span aria-hidden="true">/</span> UPDATED 2026',
        'cv.title': 'Detailed resume.',
        'cv.description': 'Explore my experience in systems development, production deployments, open-source work, and technical skills.',
        'cv.format': 'FORMAT: PDF',
        'cv.download': 'DOWNLOAD RESUME',
        'location.title': 'Location & Journey',
        'location.mapBar': 'BRAZIL · PRESENCE MAP',
        'location.mapTitle': 'Stylized map of Brazil highlighting academic and professional milestones',
        'location.mapDesc': 'Map highlighting Bahia with distance-learning hubs in Lauro de Freitas (SENAC) and Salvador (Descomplica), plus Rio Grande do Norte for the A Ciência da Lua project with UFRN.',
        'location.pinBahiaAria': 'Bahia: SENAC distance-learning hub in Lauro de Freitas and Descomplica hub in Salvador',
        'location.pinRnAria': 'Rio Grande do Norte: Production project with UFRN',
        'location.item1Eyebrow': 'LAURO DE FREITAS, BA · SENAC HUB (2023 – 2025)',
        'location.item1Title': 'Systems Development & Full Stack Foundation',
        'location.item1Desc': 'Distance-learning technical degree completed at SENAC’s Lauro de Freitas hub, building a solid base in web and distributed systems.',
        'location.item2Eyebrow': 'SALVADOR, BA · DESCOMPLICA HUB (2026 – 2030)',
        'location.item2Title': 'B.S. in Software Engineering',
        'location.item2Desc': 'Undergraduate degree in progress through Faculdade Digital Descomplica’s Salvador hub, focused on architecture and scalable systems.',
        'location.item3Eyebrow': 'RIO GRANDE DO NORTE · UFRN (2026)',
        'location.item3Title': 'A Ciência da Lua — Production Platform',
        'location.item3Desc': 'Full stack architecture and VPS infrastructure for original teaching materials authored by Prof. Lua (UFRN).',
        'footer.aria': 'Footer',
        'footer.linksAria': 'Social links and contact',
        'footer.copyright': '© 2026 LUIZ HENRIQUE — ALL RIGHTS RESERVED',
        'modal.closeAria': 'Close',
        'modal.repoSingleAria': 'Project repository',
        'modal.repoMultiAria': 'Project repositories',
        'modal.projectSite': 'Project website',
        'modal.mmTitle': 'MovieMatch project architecture',
        'modal.mmDesc': 'Architecture diagram of the MovieMatch app built with Kotlin Multiplatform and Compose, integrated with TMDB API, Supabase Postgres, and Google Sign-In.',
        'modal.mmUsers1': 'Group of',
        'modal.mmUsers2': 'friends',
        'modal.mmApp': 'Mobile app',
        'modal.mmPlatforms': '(Android & iOS)',
        'modal.mmEdgeSearch': 'search',
        'modal.mmTmdbSub': '(movie search)',
        'modal.mmEdgeSave': 'save & rate',
        'modal.mmSupa1': 'Postgres (movies, groups,',
        'modal.mmSupa2': 'sessions, ratings)',
        'modal.mmEdgeAuth': 'sign in',
        'modal.mmGoogleTitle': 'Google Sign-In',
        'modal.mmCaption': 'MovieMatch project architecture',
        'runtime.eyebrow': 'IDLE CONSUMPTION',
        'runtime.title': 'Before and after optimization',
        'runtime.capacityAria': 'Total memory limit: before 3,912 MiB using 978 MiB per container; after 704 MiB combined',
        'runtime.ramLimitLabel': 'Total RAM limit',
        'runtime.capacitySub': '978 MiB per container before <span aria-hidden="true">·</span> optimized',
        'runtime.backendAria': 'Backend resource usage comparison',
        'runtime.beforeAria': 'Before optimization',
        'runtime.afterAria': 'After optimization',
        'runtime.beforeSnapshotAria': 'Before optimization, value kept equal to the current snapshot',
        'runtime.nestBefore': 'NestJS · Before',
        'runtime.goOptimized': 'Go · Optimized',
        'runtime.before': 'Before',
        'runtime.optimized': 'Optimized',
        'runtime.notMeasured': 'Not measured',
        'runtime.backendRamBeforeAria': 'Estimated backend RAM usage before optimization',
        'runtime.backendRamOptAria': 'Optimized backend RAM usage',
        'runtime.backendCpuOptAria': 'Optimized backend CPU usage',
        'runtime.nginxAria': 'Nginx resource usage comparison',
        'runtime.nginxRamBeforeAria': 'Nginx RAM usage before optimization',
        'runtime.nginxRamOptAria': 'Optimized Nginx RAM usage',
        'runtime.nginxCpuOptAria': 'Optimized Nginx CPU usage',
        'runtime.dbAria': 'Database resource usage comparison',
        'runtime.dbTitle': 'Database',
        'runtime.dbRamBeforeAria': 'Estimated database RAM usage before optimization',
        'runtime.dbRamOptAria': 'Optimized database RAM usage',
        'runtime.dbCpuOptAria': 'Optimized database CPU usage',
        'runtime.frontendAria': 'Frontend resource usage comparison',
        'runtime.frontendRamBeforeAria': 'Frontend RAM usage before optimization',
        'runtime.frontendRamOptAria': 'Optimized frontend RAM usage',
        'runtime.frontendCpuOptAria': 'Optimized frontend CPU usage',
        'runtime.note': 'Previously, each container had a 978 MiB limit (3,912 MiB total). Previous backend and database usage is estimated; Nginx and frontend match the current snapshot. Previous CPU was not measured. Bars show each container’s RAM limit percentage.',
        'modal.luaTitle': 'A Ciência da Lua project architecture',
        'modal.luaDesc': 'Architecture diagram of A Ciência da Lua: Frontend, Nginx proxy, Go API, PostgreSQL, and Mercado Pago, Resend, and File storage integrations.',
        'modal.luaGoApi': 'Go API',
        'modal.luaPayments': '(payments)',
        'modal.luaEmails': '(emails)',
        'modal.luaFiles': 'Files',
        'modal.luaFilesSub': '(uploads & files)',
        'modal.luaCaption': 'A Ciência da Lua project architecture',
        'modal.pulseTitle': 'Pulse project architecture',
        'modal.pulseDesc': 'Offline-first architecture diagram of the Pulse Android app built with Kotlin, Jetpack Compose, Material 3, and local Room database.',
        'modal.pulseUser': 'User',
        'modal.pulseEdgeTrains': 'trains',
        'modal.pulseApp': 'Android App',
        'modal.pulseAppSub': '(Material 3 · Guided sets)',
        'modal.pulseEdgeQuery': 'queries',
        'modal.pulseCatalog': 'Exercise Catalog',
        'modal.pulseCatalogSub': '(400+ exercises & muscles)',
        'modal.pulseEdgeSave': 'saves locally',
        'modal.pulseRoom': 'Local Room / SQLite',
        'modal.pulseRoomSub': '(Routines, loads & history)',
        'modal.pulseEdgeRender': 'renders',
        'modal.pulse3d': '3D Anatomical Viewer',
        'modal.pulse3dSub': '(In development)',
        'modal.pulseCaption': 'Pulse project architecture',
        'backToTop.label': 'Back to top'
      }
    };

    var getStoredLang = function () {
      try {
        var saved = localStorage.getItem('lang');
        return saved === 'en' || saved === 'pt' ? saved : null;
      } catch (e) {
        return null;
      }
    };

    var currentLang = document.documentElement.getAttribute('data-lang') === 'en' || getStoredLang() === 'en'
      ? 'en'
      : 'pt';

    var t = function (key) {
      var dict = I18N[currentLang] || I18N.pt;
      if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
      return I18N.pt[key] || '';
    };

    var themeToggle = document.querySelector('.theme-toggle');
    var syncThemeLabels = function (theme) {
      if (!themeToggle) return;
      var isDark = theme === 'dark';
      themeToggle.setAttribute('aria-label', t(isDark ? 'theme.lightAria' : 'theme.darkAria'));
      themeToggle.setAttribute('data-label', t(isDark ? 'theme.lightLabel' : 'theme.darkLabel'));
    };

    if (themeToggle) {
      var getStoredTheme = function () {
        try {
          var saved = localStorage.getItem('theme');
          return saved === 'dark' || saved === 'light' ? saved : null;
        } catch (e) {
          return null;
        }
      };

      var applyTheme = function (theme, persist) {
        var isDark = theme === 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
        themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        syncThemeLabels(theme);
        themeToggle.removeAttribute('title');
        if (persist) {
          try {
            localStorage.setItem('theme', theme);
          } catch (e) {}
        }
      };

      var currentTheme = document.documentElement.getAttribute('data-theme') ||
        getStoredTheme() ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      applyTheme(currentTheme, false);

      themeToggle.addEventListener('click', function () {
        var active = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        applyTheme(active === 'dark' ? 'light' : 'dark', true);
      });

      var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery && mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', function (e) {
          if (!getStoredTheme()) {
            applyTheme(e.matches ? 'dark' : 'light', false);
          }
        });
      }
    }

    var searchInput = document.getElementById('project-search');
    var clearSearchBtn = document.querySelector('.project-search__clear');
    var projectsToolbar = document.querySelector('.projects-toolbar');
    var projectTrack = document.querySelector('.project-list');
    var projectCards = document.querySelectorAll('.project-list .project');
    var projectTabs = document.querySelectorAll('.project-tab');
    var prevProjectBtn = document.querySelector('.projects-nav__prev');
    var nextProjectBtn = document.querySelector('.projects-nav__next');
    var projectsCounter = document.querySelector('.projects-counter');
    var emptyState = document.querySelector('.projects-empty');
    var emptyQueryEl = document.querySelector('.projects-empty__query');
    var resetSearchBtn = document.querySelector('.projects-empty__reset');

    if (projectTrack && projectCards.length) {
      var normalizeText = function (text) {
        return text
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .trim();
      };

      var pad2 = function (num) {
        return num < 10 ? '0' + num : String(num);
      };

      var indexedProjects = Array.prototype.map.call(projectCards, function (card, index) {
        var title = card.querySelector('h3');
        var stack = card.querySelector('.project-stack');
        return {
          index: index,
          card: card,
          tab: projectTabs[index] || null,
          searchable: normalizeText((title ? title.textContent : '') + ' ' + (stack ? stack.textContent : ''))
        };
      });

      var activeVisiblePos = 0;

      var getVisibleItems = function () {
        return indexedProjects.filter(function (item) {
          return !item.card.hidden;
        });
      };

      var syncShowcaseUI = function (visiblePos) {
        var visibleItems = getVisibleItems();
        var total = visibleItems.length;

        if (total === 0) {
          if (projectsToolbar) projectsToolbar.hidden = true;
          projectTrack.hidden = true;
          return;
        }

        if (projectsToolbar) projectsToolbar.hidden = false;
        projectTrack.hidden = false;

        activeVisiblePos = Math.max(0, Math.min(visiblePos, total - 1));
        var activeItem = visibleItems[activeVisiblePos];

        indexedProjects.forEach(function (item) {
          if (!item.tab) return;
          var isSelected = item === activeItem;
          item.tab.classList.toggle('is-active', isSelected);
          item.tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        });

        if (projectsCounter) {
          projectsCounter.textContent = pad2(activeVisiblePos + 1) + ' / ' + pad2(total);
        }
        if (prevProjectBtn) prevProjectBtn.disabled = activeVisiblePos <= 0;
        if (nextProjectBtn) nextProjectBtn.disabled = activeVisiblePos >= total - 1;
      };

      var scrollToVisibleIndex = function (visiblePos, instant) {
        var visibleItems = getVisibleItems();
        if (!visibleItems.length) return;
        var clamped = Math.max(0, Math.min(visiblePos, visibleItems.length - 1));
        var targetCard = visibleItems[clamped].card;
        var reduced = instant || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        projectTrack.scrollTo({
          left: targetCard.offsetLeft,
          behavior: reduced ? 'auto' : 'smooth'
        });
        syncShowcaseUI(clamped);
      };

      indexedProjects.forEach(function (item) {
        if (!item.tab) return;
        item.tab.addEventListener('click', function () {
          var visibleItems = getVisibleItems();
          var pos = visibleItems.indexOf(item);
          if (pos !== -1) scrollToVisibleIndex(pos, false);
        });
      });

      if (prevProjectBtn) {
        prevProjectBtn.addEventListener('click', function () {
          scrollToVisibleIndex(activeVisiblePos - 1, false);
        });
      }

      if (nextProjectBtn) {
        nextProjectBtn.addEventListener('click', function () {
          scrollToVisibleIndex(activeVisiblePos + 1, false);
        });
      }

      var scrollRaf = 0;
      projectTrack.addEventListener('scroll', function () {
        if (scrollRaf) return;
        scrollRaf = window.requestAnimationFrame(function () {
          scrollRaf = 0;
          var visibleItems = getVisibleItems();
          if (!visibleItems.length) return;
          var currentLeft = projectTrack.scrollLeft;
          var closestPos = 0;
          var minDist = Infinity;
          visibleItems.forEach(function (item, pos) {
            var dist = Math.abs(item.card.offsetLeft - currentLeft);
            if (dist < minDist) {
              minDist = dist;
              closestPos = pos;
            }
          });
          syncShowcaseUI(closestPos);
        });
      }, { passive: true });

      if (projectsToolbar) {
        projectsToolbar.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            scrollToVisibleIndex(activeVisiblePos + 1, false);
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            scrollToVisibleIndex(activeVisiblePos - 1, false);
          }
        });
      }

      var filterProjects = function () {
        var rawQuery = searchInput ? searchInput.value.trim() : '';
        var query = normalizeText(rawQuery);
        var tokens = query ? query.split(/\s+/) : [];
        var visibleCount = 0;

        indexedProjects.forEach(function (item) {
          var matches = tokens.every(function (token) {
            return item.searchable.indexOf(token) !== -1;
          });
          item.card.hidden = !matches;
          if (item.tab) item.tab.hidden = !matches;
          if (matches) visibleCount += 1;
        });

        if (clearSearchBtn) {
          clearSearchBtn.hidden = rawQuery.length === 0;
        }

        if (emptyState && emptyQueryEl) {
          emptyState.hidden = visibleCount > 0;
          emptyQueryEl.textContent = '“' + rawQuery + '”';
        }

        scrollToVisibleIndex(0, true);
      };

      var resetSearch = function () {
        if (!searchInput) return;
        searchInput.value = '';
        filterProjects();
        searchInput.focus();
      };

      if (searchInput) searchInput.addEventListener('input', filterProjects);
      if (clearSearchBtn) clearSearchBtn.addEventListener('click', resetSearch);
      if (resetSearchBtn) resetSearchBtn.addEventListener('click', resetSearch);

      syncShowcaseUI(0);
    }

    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var revealTargets = document.querySelectorAll('main > section, .site-footer');
      if (revealTargets.length) {
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var pendingTargets = [];

        revealTargets.forEach(function (el) {
          el.classList.add('reveal');
          var rect = el.getBoundingClientRect();
          if (rect.top < viewportHeight * 0.92) {
            el.classList.add('is-visible');
          } else {
            pendingTargets.push(el);
          }
        });

        document.documentElement.classList.add('reveal-ready');

        if (pendingTargets.length) {
          var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            });
          }, {
            root: null,
            rootMargin: '0px 0px -48px 0px',
            threshold: 0.02
          });

          pendingTargets.forEach(function (el) {
            revealObserver.observe(el);
          });
        }
      }
    }

    var progressFill = document.querySelector('.reading-progress__fill');
    if (progressFill) {
      var progressRaf = 0;
      var updateReadingProgress = function () {
        progressRaf = 0;
        var doc = document.documentElement;
        var maxScroll = doc.scrollHeight - window.innerHeight;
        var ratio = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
        progressFill.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
      };

      var scheduleReadingProgress = function () {
        if (progressRaf) return;
        progressRaf = window.requestAnimationFrame(updateReadingProgress);
      };

      window.addEventListener('scroll', scheduleReadingProgress, { passive: true });
      window.addEventListener('resize', scheduleReadingProgress, { passive: true });
      updateReadingProgress();
    }

    var mapPins = document.querySelectorAll('.map-pin');
    var locationItems = document.querySelectorAll('.location-item');
    var mapCoords = document.querySelector('.map-card__coords');

    if (mapPins.length && locationItems.length) {
      var selectLocation = function (id, targetItem) {
        var activeCoords = '';
        var matchedFirstItem = false;

        mapPins.forEach(function (pin) {
          var isMatch = pin.getAttribute('data-location') === id;
          pin.classList.toggle('is-active', isMatch);
          pin.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
          if (isMatch && pin.getAttribute('data-coords')) {
            activeCoords = pin.getAttribute('data-coords');
          }
        });

        locationItems.forEach(function (item) {
          var isMatch = targetItem
            ? item === targetItem
            : (!matchedFirstItem && item.getAttribute('data-location') === id);
          if (isMatch) matchedFirstItem = true;
          item.classList.toggle('is-active', isMatch);
          item.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
          if (isMatch && item.getAttribute('data-coords')) {
            activeCoords = item.getAttribute('data-coords');
          }
        });

        if (mapCoords && activeCoords) {
          mapCoords.textContent = activeCoords;
        }
      };

      mapPins.forEach(function (pin) {
        var id = pin.getAttribute('data-location');
        pin.addEventListener('click', function () {
          selectLocation(id, null);
        });
        pin.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectLocation(id, null);
          }
        });
      });

      locationItems.forEach(function (item) {
        var id = item.getAttribute('data-location');
        item.addEventListener('click', function () {
          selectLocation(id, item);
        });
      });
    }

    var skillItems = document.querySelectorAll('.skill-item');
    if (skillItems.length) {
      var positionSkillTooltip = function (item) {
        var tooltip = item.querySelector('.skill-tooltip');
        var trigger = item.querySelector('.skill-badge');
        if (!tooltip || !trigger) return;

        tooltip.style.setProperty('--tooltip-shift', '0px');
        item.removeAttribute('data-placement');

        var triggerRect = trigger.getBoundingClientRect();
        var tooltipWidth = tooltip.offsetWidth;
        var tooltipHeight = tooltip.offsetHeight;
        var viewportWidth = document.documentElement.clientWidth || window.innerWidth;
        var padding = 12;

        if (triggerRect.top - tooltipHeight - 16 < 12) {
          item.setAttribute('data-placement', 'bottom');
        }

        var center = triggerRect.left + triggerRect.width / 2;
        var leftEdge = center - tooltipWidth / 2;
        var rightEdge = center + tooltipWidth / 2;
        var shift = 0;

        if (leftEdge < padding) {
          shift = padding - leftEdge;
        } else if (rightEdge > viewportWidth - padding) {
          shift = (viewportWidth - padding) - rightEdge;
        }

        var maxShift = Math.max(0, tooltipWidth / 2 - 14);
        shift = Math.max(-maxShift, Math.min(maxShift, shift));
        tooltip.style.setProperty('--tooltip-shift', shift.toFixed(1) + 'px');
      };

      var setSkillCardElevation = function (item, active) {
        var card = item.closest('.skill-card');
        if (!card) return;
        card.classList.toggle('has-tooltip-open', active);
      };

      var closeAllSkillTooltips = function (exceptItem) {
        skillItems.forEach(function (item) {
          if (item === exceptItem) return;
          item.classList.remove('is-tooltip-open');
          setSkillCardElevation(item, false);
          var btn = item.querySelector('.skill-badge');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      };

      var openSkillTooltip = function (item) {
        closeAllSkillTooltips(item);
        positionSkillTooltip(item);
        item.classList.add('is-tooltip-open');
        setSkillCardElevation(item, true);
        var btn = item.querySelector('.skill-badge');
        if (btn) btn.setAttribute('aria-expanded', 'true');
      };

      skillItems.forEach(function (item) {
        var trigger = item.querySelector('.skill-badge');
        if (!trigger) return;

        item.addEventListener('pointerenter', function (e) {
          if (e.pointerType && e.pointerType !== 'mouse') return;
          positionSkillTooltip(item);
          setSkillCardElevation(item, true);
        });

        item.addEventListener('pointerleave', function (e) {
          if (e.pointerType && e.pointerType !== 'mouse') return;
          if (item.classList.contains('is-tooltip-open')) {
            closeAllSkillTooltips(null);
          } else {
            setSkillCardElevation(item, false);
          }
        });

        trigger.addEventListener('focus', function () {
          positionSkillTooltip(item);
          setSkillCardElevation(item, true);
        });

        trigger.addEventListener('blur', function () {
          if (!item.classList.contains('is-tooltip-open')) {
            setSkillCardElevation(item, false);
          }
        });

        trigger.addEventListener('click', function () {
          var isOpen = item.classList.contains('is-tooltip-open');
          if (isOpen) {
            closeAllSkillTooltips(null);
          } else {
            openSkillTooltip(item);
          }
        });
      });

      document.addEventListener('click', function (e) {
        if (!e.target.closest('.skill-item')) {
          closeAllSkillTooltips(null);
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeAllSkillTooltips(null);
        }
      });

      window.addEventListener('resize', function () {
        var openItem = document.querySelector('.skill-item.is-tooltip-open');
        if (openItem) positionSkillTooltip(openItem);
      }, { passive: true });
    }

    var zenToggle = document.querySelector('.zen-toggle');
    var zenHero = document.querySelector('.hero');
    var zenFirstReading = document.querySelector('[data-zen-reading]');
    var zenActive = false;

    var syncZenLabels = function (active) {
      if (!zenToggle) return;
      zenToggle.setAttribute('aria-label', t(active ? 'zen.exitAria' : 'zen.enterAria'));
      zenToggle.setAttribute('data-label', t(active ? 'zen.exitLabel' : 'zen.enterLabel'));
    };

    if (zenToggle) {
      var applyZenMode = function (active) {
        if (zenActive === active) return;
        zenActive = active;
        document.documentElement.classList.toggle('zen-mode', active);
        zenToggle.setAttribute('aria-pressed', active ? 'true' : 'false');
        syncZenLabels(active);
      };

      zenToggle.addEventListener('click', function () {
        var nextActive = !zenActive;
        applyZenMode(nextActive);

        if (nextActive && zenHero && zenHero.getBoundingClientRect().bottom > 80) {
          var targetSection = zenFirstReading || document.querySelector('main');
          if (targetSection) {
            var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            var targetTop = window.scrollY + targetSection.getBoundingClientRect().top - 56;
            window.scrollTo({
              top: Math.max(0, targetTop),
              behavior: reduced ? 'auto' : 'smooth'
            });
          }
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (document.querySelector('dialog[open]')) return;
        if (zenActive) {
          applyZenMode(false);
        }
      });
    }

    var langButtons = document.querySelectorAll('.lang-switch__btn[data-lang-option]');
    var applyLanguage = function (lang, persist) {
      currentLang = lang === 'en' ? 'en' : 'pt';
      document.documentElement.setAttribute('data-lang', currentLang);
      document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-BR';

      document.title = t('meta.title');
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
      var ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', t('meta.ogTitle'));
      var ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', t('meta.ogDescription'));
      var ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) ogLocale.setAttribute('content', currentLang === 'en' ? 'en_US' : 'pt_BR');

      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (key) el.textContent = t(key);
      });

      document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-html');
        if (key) el.innerHTML = t(key);
      });

      document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
        var spec = el.getAttribute('data-i18n-attr');
        if (!spec) return;
        spec.split(',').forEach(function (pair) {
          var idx = pair.indexOf(':');
          if (idx === -1) return;
          var attr = pair.slice(0, idx).trim();
          var key = pair.slice(idx + 1).trim();
          if (attr && key) el.setAttribute(attr, t(key));
        });
      });

      langButtons.forEach(function (btn) {
        var isCurrent = btn.getAttribute('data-lang-option') === currentLang;
        btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
      });

      var activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      syncThemeLabels(activeTheme);
      syncZenLabels(zenActive);

      var openSkillItem = document.querySelector('.skill-item.is-tooltip-open');
      if (openSkillItem) {
        window.dispatchEvent(new Event('resize'));
      }

      if (persist) {
        try {
          localStorage.setItem('lang', currentLang);
        } catch (e) {}
      }
    };

    if (langButtons.length) {
      langButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var targetLang = btn.getAttribute('data-lang-option');
          if (targetLang && targetLang !== currentLang) {
            applyLanguage(targetLang, true);
          }
        });
      });
    }

    applyLanguage(currentLang, false);

    var railNav = document.querySelector('.rail-nav');
    var railIndicator = document.querySelector('.rail-nav__indicator');
    var railNavLinks = document.querySelectorAll('.rail-nav__btn[data-section]');
    if (railNavLinks.length) {
      var railEntries = [];
      railNavLinks.forEach(function (link) {
        var id = link.getAttribute('data-section');
        var section = id ? document.getElementById(id) : null;
        if (section) {
          railEntries.push({ link: link, section: section });
        }
      });

      if (railEntries.length) {
        var railRaf = 0;

        var syncActiveRailSection = function () {
          railRaf = 0;
          var vh = window.innerHeight || document.documentElement.clientHeight;
          var anchorY = vh * 0.42;
          var doc = document.documentElement;
          var atBottom = (window.scrollY + vh) >= (doc.scrollHeight - 40);
          var activeEntry = null;

          if (atBottom) {
            activeEntry = railEntries[railEntries.length - 1];
          } else {
            for (var i = 0; i < railEntries.length; i += 1) {
              var rect = railEntries[i].section.getBoundingClientRect();
              if (rect.top <= anchorY) {
                activeEntry = railEntries[i];
              }
            }
          }

          railEntries.forEach(function (entry) {
            var isActive = entry === activeEntry;
            entry.link.classList.toggle('is-active', isActive);
            if (isActive) {
              entry.link.setAttribute('aria-current', 'true');
            } else {
              entry.link.removeAttribute('aria-current');
            }
          });

          if (railIndicator && railNav) {
            if (activeEntry) {
              var offsetX = activeEntry.link.offsetLeft;
              var offsetY = activeEntry.link.offsetTop;
              railIndicator.classList.add('is-visible');
              railIndicator.style.transform = 'translate3d(' + offsetX + 'px, ' + offsetY + 'px, 0) scale(1)';
            } else {
              railIndicator.classList.remove('is-visible');
              railIndicator.style.transform = 'translate3d(0, 0, 0) scale(0.85)';
            }
          }
        };

        var scheduleRailSync = function () {
          if (railRaf) return;
          railRaf = window.requestAnimationFrame(syncActiveRailSection);
        };

        railEntries.forEach(function (entry) {
          entry.link.addEventListener('click', function (e) {
            e.preventDefault();
            var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            var targetTop = window.scrollY + entry.section.getBoundingClientRect().top - 48;
            window.scrollTo({
              top: Math.max(0, targetTop),
              behavior: reduced ? 'auto' : 'smooth'
            });
          });
        });

        window.addEventListener('scroll', scheduleRailSync, { passive: true });
        window.addEventListener('resize', scheduleRailSync, { passive: true });
        syncActiveRailSection();
      }
    }
  })();
