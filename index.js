const menu = document.querySelector('.menu');
const elementos = document.querySelectorAll('.hidden');

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

const clicks = document.querySelectorAll('.click');

clicks.forEach(click => {
    click.addEventListener('click', () => {
        menu.classList.remove('mostrar');
        menu.style.visibility = 'hidden';
        const btn = document.getElementById('btn-menu');
        btn.classList.toggle('ativar');
    });
});
