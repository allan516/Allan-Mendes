// Seleciona o elemento do menu
const menu = document.querySelector('.menu');
// Seleciona todos os elementos com a classe 'hidden'
const elementos = document.querySelectorAll('.hidden');
// Seleciona os elementos de projetos, contato, perfil, sobre mim e formatura
const projetos = document.getElementById('projetos');
const contato = document.getElementById('contato');
const perfil = document.getElementById('quemSouEu');
const sobreMim = document.getElementById('sobreMim');
const formatura = document.getElementById('formatura');

// Seleciona todos os elementos com a classe 'click'
const clicks = document.querySelectorAll('.click');

/*Cria uma instância do IntersectionObserver para adicionar/remover a classe show*/
const myObserver = new IntersectionObserver((entrada) => {
  entrada.forEach((elemento) => {
    if (elemento.isIntersecting) {
      elemento.target.classList.add('show');
    } else {
      elemento.target.classList.remove('show');
    }
  });
});

// Observa todos os elementos com a classe hidden para aplicar o efeito de show quando
elementos.forEach((elementos) => myObserver.observe(elementos));

// Função para alternar a visibilidade do menu
function mostraMenu() {
  // Verifica se o menu já está visível
  if (menu.classList.contains('mostrar')) {
    menu.classList.remove('mostrar');
    menu.style.visibility = 'hidden';
    const btn = document.getElementById('btn-menu');
    btn.classList.toggle('ativar');
  } else {
    menu.classList.add('mostrar');
    menu.style.visibility = 'visible';
    const btn = document.getElementById('btn-menu');
    btn.classList.toggle('ativar');
  }
}

// Adiciona um listener de click a todos os elementos com a classe 'click'
clicks.forEach(click => {
  click.addEventListener('click', () => {
    // Se a largura da janela for menor ou igual a 810px, fecha o menu
    if (window.innerWidth <= 810) {
      menu.classList.remove('mostrar');
      menu.style.visibility = 'hidden';
      const btn = document.getElementById('btn-menu');
      btn.classList.toggle('ativar');
    }
    
    // Verifica a classe do elemento clicado para mostrar o conteúdo apropriado
    if (click.classList.contains('projects')) {
      if (projetos.style.display === 'none' || projetos.style.display === '') {
        projetos.style.display = 'block';
        contato.style.display = 'none';
        perfil.style.display = 'none';
        sobreMim.style.display = 'none';
        formatura.style.display = 'none';
      }
    }

    if (click.classList.contains('inicio')) {
      if (perfil.style.display === 'none' || perfil.style.display === '') {
        perfil.style.display = 'block';
        contato.style.display = 'none';
        projetos.style.display = 'none';
        sobreMim.style.display = 'none';
        formatura.style.display = 'none';
      }
    }

    if (click.classList.contains('mostrar-contato')) {
      if (contato.style.display === 'none' || contato.style.display === '') {
        contato.style.display = 'block';
        perfil.style.display = 'none';
        projetos.style.display = 'none';
        sobreMim.style.display = 'none';
        formatura.style.display = 'none';
      }
    }

    if (click.classList.contains('sobreMin')) {
      if (sobreMim.style.display === 'none' || sobreMim.style.display === '') {
        sobreMim.style.display = 'block';
        perfil.style.display = 'none';
        projetos.style.display = 'none';
        contato.style.display = 'none';
        formatura.style.display = 'none';
      }
    }

    if (click.classList.contains('formacao')) {
      if (formatura.style.display === 'none' || formatura.style.display === '') {
        formatura.style.display = 'block';
        perfil.style.display = 'none';
        projetos.style.display = 'none';
        contato.style.display = 'none';
        sobreMim.style.display = 'none';
      }
    }
  });
});
