const contentDiv = document.querySelector('.container .content');

const menu = [];
menu.push(`    <img class="photo" src="./images/photo.png" alt="Foto jovem de 23 anos, meio doido, mas legal.">
                    <h3 class="name-title">Luiz Henrique</h3>
                    <div class="small-line"></div>
                    <h3 class="stack-title">JUNIOR JAVA DEVELOPER</h3>
             `)
menu.push(`<p class="texto-1">
                    Oi, eu sou Luiz! <strong>Desenvolvedor de Software</strong>, com
                    foco no desenvolvimento <strong>Java</strong>. Tenho como objetivo
                    criar aplicações que sejam confortáveis para
                    <strong>longos usos</strong> e com uma ótima identidade visual.
                 </p>

                 <div class="small-line"></div>

                 <p class="texto-2">
                   Para passar o tempo costumo ler, aprender algo novo, pilotar
                   virtualmente e escutar música. Tendo o interesse de me conhecer,
                   <strong>entre em contato comigo!</strong>
                 </p>
              `)
menu.push(`
        <div class="toolsContent">

        </div>

        <div class="toolsBtns">
          <button class="javaBtn" >1</button>
          <button class="mysqlBtn">2</button>
          <button class="frontEndBtn">3</button>
          <button class="figmaBtn">4</button>
`)

const toolsVar = [];
toolsVar.push(`<div class="swiper-content">
  <div class="slide-content">
    <h1>JAVA</h1>
    <ul>
      <li>Sólido domínio de <strong>Java Vanilla</strong> e seus conceitos fundamentais.</li>
      <li>Experiência em conexão com <strong>bancos de dados</strong> utilizando <strong>JDBC</strong>.</li>
      <li>Habilidade em criação de interfaces gráficas com <strong>Java Swing</strong>.</li>
      <li>Conhecimento avançado no uso do framework Hibernate para mapeamento <strong>objeto-relacional.</strong></li>
      <li>Motivado a aprender <strong>Spring</strong>.</li>
    </ul>
  </div>
</div>`);
toolsVar.push(`<div class="swiper-content">
            <div class="slide-content">
              <h1>MySQL</h1>
              <ul>
                <li>Experiência em modelagem de dados para criar bancos eficientes e organizados.</li>
                <li>Conhecimento em <strong>SQL</strong>, incluindo criação de <strong>tabelas, consultas, joins e manipulação de
                    dados.</strong></li>
                <li>Habilidade no uso de <strong>JDBC/JPA</strong> para conectar aplicações <strong>Java ao MySQL</strong> de
                  forma eficiente.</li>
              </ul>
            </div>
          </div>`);
toolsVar.push(`<div class="swiper-content">
            <div class="slide-content">
              <h1>Vanilla Front-End</h1>
              <ul>
                <li><strong>Estruturar páginas web</strong> de forma semântica e acessível.</li>
                <li><strong>Estilizar páginas</strong> com técnicas modernas de CSS.</li>
                <li>Entendimento de <strong>Flexbox e Grid</strong> para layouts responsivos.</li>
                <li>Animações e transições usando <strong>CSS</strong>.</li>
                <li><strong>Manipular o DOM</strong> (Document Object Model) para interatividade.</li>
              </ul>
            </div>
          </div>`);
toolsVar.push(`<div class="swiper-content">
            <div class="slide-content">
              <h1>Figma</h1>
              <ul>
                <li>Criar <strong>protótipos</strong> interativos para <strong>aplicativos e sites</strong>.</li>
                <li>Instalar e usar <strong>plugins</strong> para acelerar o fluxo de trabalho</li>
                <li>Entendimento de <strong>Flexbox e Grid</strong> para layouts responsivos.</li>
                <li>Exportar projetos em formatos variados (SVG, PNG, PDF) para desenvolvedores ou clientes.</li>
                <li><strong>Trabalhar em ambientes colaborativos</strong> onde várias pessoas podem editar ao mesmo tempo.</li>
              </ul>
            </div>
          </div>`);

function exibirAnimacao() {
  contentDiv.classList.add('fade-in-fwd')
    
    contentDiv.addEventListener('animationend', () => {
    contentDiv.classList.remove('fade-in-fwd');
    });
}

function exibirPagina(pagina) {
  if (pagina === 'home') {
    contentDiv.innerHTML = menu[0];
    exibirAnimacao();
    
  } else if (pagina === 'about') {
    contentDiv.innerHTML = menu[1];
    exibirAnimacao();
  } else if (pagina == "tools") {
    contentDiv.innerHTML = menu[2];
    exibirAnimacao

    const toolsContent = document.querySelector('.toolsContent');

    function exibirFerramenta(pagina) {
      if (pagina === 'java') {
        toolsContent.innerHTML = toolsVar[0];
        exibirAnimacao();
      } else if (pagina === 'mysql') {
        toolsContent.innerHTML = toolsVar[1];
        exibirAnimacao();
      } else if (pagina === 'frontend') {
        toolsContent.innerHTML = toolsVar[2];
        exibirAnimacao();
      } else if (pagina === 'figma') {
        toolsContent.innerHTML = toolsVar[3];
        exibirAnimacao();
      }
    }
    exibirFerramenta('java');
    exibirAnimacao();
    
    document.querySelector('.javaBtn').addEventListener('click', () => exibirFerramenta('java'));
    document.querySelector('.mysqlBtn').addEventListener('click', () => exibirFerramenta('mysql'));
    document.querySelector('.frontEndBtn').addEventListener('click', () => exibirFerramenta('frontend'));
    document.querySelector('.figmaBtn').addEventListener('click', () => exibirFerramenta('figma'));
  }
}

exibirPagina('home');

function goToGitHub() {
  window.open("https://github.com/LuizHenri16")
}

function goToInstagram() {
  window.open("https://www.instagram.com/_._luizhenrique")
}

function goToLinkedIn() {
  window.open("https://www.linkedin.com/in/luiz-bastos-395922213/")
}
