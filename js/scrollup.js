document.addEventListener('DOMContentLoaded', function() {
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scrollUpBtn';
  scrollBtn.title = 'Volver arriba';
  document.body.appendChild(scrollBtn);

  // Mostrar/ocultar
  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  // Scroll suave al top
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 20, behavior: 'smooth' });
  });
});
// scrollup.js minificado
document.addEventListener('DOMContentLoaded',function(){const e=document.createElement('button');e.id='scrollUpBtn',e.title='Volver arriba',document.body.appendChild(e),window.addEventListener('scroll',function(){window.scrollY>200?e.classList.add('visible'):e.classList.remove('visible')}),e.addEventListener('click',function(){window.scrollTo({top:20,behavior:'smooth'})})});
