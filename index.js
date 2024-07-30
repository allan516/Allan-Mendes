function mostraMenu() {
  const resultado = document.querySelector('.resultado');
  if(resultado.classList.contains('mostrar')) {
    resultado.classList.remove('mostrar');
    resultado.style.display = 'none';
  } else {
    resultado.classList.add('mostrar');
    resultado.style.display = 'block';
  }
}