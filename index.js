function mostraMenu() {
  const resultado = document.querySelector('.resultado');
  if(resultado.classList.contains('mostrar')) {
    resultado.classList.remove('mostrar');
    resultado.style.visibility = 'hidden';
    const btn = document.getElementById('btn-menu');
    btn.classList.toggle('ativar');
    
  } else {
    resultado.classList.add('mostrar');
    resultado.style.visibility = 'visible';
    const btn = document.getElementById('btn-menu');
    btn.classList.toggle('ativar');
    
  }
}