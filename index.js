
const menu = document.querySelector('.menu');
const elementos = document.querySelectorAll('.hidden');
const projetos = document.getElementById('projetos');
const contato = document.getElementById('contato');
const perfil = document.getElementById('quemSouEu');


const sobreMim = document.getElementById('sobreMim');
const formatura = document.getElementById('formatura');


const clicks = document.querySelectorAll('.click');

const myObserver = new IntersectionObserver((entrada) => {
  entrada.forEach((elemento) => {
    if(elemento.isIntersecting) {
      elemento.target.classList.add('show');
    } else {
      elemento.target.classList.remove('show');
    }
  });
});

elementos.forEach((elementos) => myObserver.observe(elementos));

function mostraMenu() {
  
  if(menu.classList.contains('mostrar')) {
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

clicks.forEach(click => {
    click.addEventListener('click', () => {
        menu.classList.remove('mostrar');
        menu.style.visibility = 'hidden';
        const btn = document.getElementById('btn-menu');
        btn.classList.toggle('ativar');
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
