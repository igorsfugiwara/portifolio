// Função para alternar entre os modos claro e escuro
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const text = document.getElementById('theme-text');
    const textElement = document.querySelector('#svg-animation text');

    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
        text.textContent = 'Modo Claro';
        textElement.style.stroke = 'black'; // Mudar cor da animação para preto no modo claro
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        icon.classList.replace('fa-sun', 'fa-moon');
        text.textContent = 'Modo Escuro';
        textElement.style.stroke = 'white'; // Mudar cor da animação para branco no modo escuro
    }
}

// Evento de clique no botão de alternar tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Função para verificar se deve aplicar estilo de modo escuro ao carregar a página
function isDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('svg-animation').childNodes[3].style.stroke = "white";
    }
}

// Event listener para chamar isDarkMode() após o carregamento completo da página
document.addEventListener('DOMContentLoaded', function () {
    // Inicialização da página com tema claro
    document.body.classList.add('light-mode');
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.getElementById("svg-animation");
    const text = "Front-end Developer";

    let textElement = document.createElementNS(svgNS, "text");
    textElement.setAttribute("x", "50%");
    textElement.setAttribute("y", "50%");
    textElement.setAttribute("dominant-baseline", "middle");
    textElement.setAttribute("text-anchor", "middle");
    textElement.setAttribute("font-size", "8vw"); // Alteração aqui
    textElement.setAttribute("fill", "none");
    textElement.setAttribute("stroke", "black");
    textElement.setAttribute("stroke-width", "1");
    textElement.textContent = text;

    svg.appendChild(textElement);

    const length = textElement.getComputedTextLength();
    textElement.style.strokeDasharray = length;
    textElement.style.strokeDashoffset = length;

    function animateText() {
        gsap.fromTo(textElement, {
            strokeDashoffset: length
        }, {
            strokeDashoffset: 0,
            duration: 3,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to(textElement, {
                    fillOpacity: 1,
                    duration: 0.5,
                    onComplete: () => {
                        gsap.to(textElement, {
                            fillOpacity: 0,
                            duration: 0.5,
                            onComplete: () => {
                                gsap.to(textElement, {
                                    strokeDashoffset: length,
                                    duration: 3,
                                    ease: "power2.inOut",
                                    onComplete: animateText
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    animateText();

    // Verificar e aplicar o estilo de modo escuro ao carregar a página
    isDarkMode();
});

// Abrir modal ao clicar no ícone de telefone
document.getElementById('contact-icon').addEventListener('click', function () {
    document.getElementById('contact-modal').style.display = 'block';
});

// Fechar modal ao clicar no botão 'X'
document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementById('contact-modal').style.display = 'none';
});

// Copiar telefone ao clicar no botão 'Copiar' dentro do modal
document.getElementById('copy-phone').addEventListener('click', function () {
    var phone = document.getElementById('phone').innerText;
    navigator.clipboard.writeText(phone);
    alert('Telefone copiado: ' + phone);
});

// Copiar email ao clicar no botão 'Copiar' dentro do modal
document.getElementById('copy-email').addEventListener('click', function () {
    var email = document.getElementById('email').innerText;
    navigator.clipboard.writeText(email);
    alert('Email copiado: ' + email);
});

// Abrir modal ao clicar no ícone de telefone no footer
document.getElementById('footer-contact-icon').addEventListener('click', function () {
    // Simular clique no ícone de telefone no header
    document.getElementById('contact-icon').click();
    // Subir a página suavemente para visualizar o modal
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Alternar modo escuro
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Função para alternar idiomas
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });
}

function isDarkMode() {
    if(document.querySelector('.dark-mode')){
        document.getElementById('svg-animation').childNodes[3].style.stroke = "white"
        console.log(document.getElementById('svg-animation').childNodes[3].style.stroke);
    }
}
isDarkMode();
