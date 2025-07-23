document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Cerrar menú móvil si está abierto
        const navList = document.querySelector('.nav-list');
        if (navList && navList.classList.contains('open')) {
          navList.classList.remove('open');
        }
        const burger = document.getElementById('burger');
        if (burger && burger.getAttribute('aria-expanded') === 'true') {
          burger.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
});
// Slider de marcas infinito y suave
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.marcas-track');
  const slider = document.querySelector('.marcas-slider');
  if (track && slider && track.children.length > 0) {
    // Duplicar los logos para efecto loop
    track.innerHTML += track.innerHTML;
    let scrollAmount = 0;
    let paused = false;
    const speed = 1.1; // px por frame
    function animate() {
      if (!paused) {
        scrollAmount += speed;
        if (scrollAmount >= track.scrollWidth / 2) {
          scrollAmount = 0;
        }
        track.style.transform = `translateX(-${scrollAmount}px)`;
      }
      requestAnimationFrame(animate);
    }
    slider.addEventListener('mouseenter', () => { paused = true; });
    slider.addEventListener('mouseleave', () => { paused = false; });
    slider.addEventListener('touchstart', () => { paused = true; });
    slider.addEventListener('touchend', () => { paused = false; });
    animate();
  }
});
// Animaciones de entrada suaves para toda la web
document.addEventListener('DOMContentLoaded', function() {
  const fadeEls = document.querySelectorAll('section, .kiosco, .card-kiosco, .beneficio, .promo-img, .hero, .kiosco-lista, .beneficios-lista, .promo-slider, .contacto, .footer-content');
  const observer = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => {
    observer.observe(el);
  });
});
// scripts.js - Kioscos 24hs
// Slider de promociones y animaciones scroll

// Animaciones scroll y burger menu funcional y accesible
document.addEventListener('DOMContentLoaded', function () {
  // Animaciones scroll
  const animables = document.querySelectorAll('section, .kiosco, .beneficio, .promo-img');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  animables.forEach(el => observer.observe(el));

// scripts.js minificado y listeners unificados
document.addEventListener('DOMContentLoaded',function(){
// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(function(link){link.addEventListener('click',function(e){const t=this.getAttribute('href').slice(1),n=document.getElementById(t);if(n){e.preventDefault(),n.scrollIntoView({behavior:'smooth'});const l=document.querySelector('.nav-list');l&&l.classList.contains('open')&&l.classList.remove('open');const b=document.getElementById('burger');b&&'true'===b.getAttribute('aria-expanded')&&b.setAttribute('aria-expanded','false')}})});
// Slider de marcas infinito
const track=document.querySelector('.marcas-track'),slider=document.querySelector('.marcas-slider');if(track&&slider&&track.children.length>0){track.innerHTML+=track.innerHTML;let s=0,p=!1,c=1.1;function a(){p||(s+=c,s>=track.scrollWidth/2&&(s=0),track.style.transform=`translateX(-${s}px)`),requestAnimationFrame(a)}slider.addEventListener('mouseenter',()=>{p=!0}),slider.addEventListener('mouseleave',()=>{p=!1}),slider.addEventListener('touchstart',()=>{p=!0}),slider.addEventListener('touchend',()=>{p=!1}),a()}
// Animaciones de entrada (unificado)
const fadeEls=document.querySelectorAll('section,.kiosco,.card-kiosco,.beneficio,.promo-img,.hero,.kiosco-lista,.beneficios-lista,.promo-slider,.contacto,.footer-content'),observer=new window.IntersectionObserver((e,o)=>{e.forEach(r=>{r.isIntersecting&&(r.target.classList.add('visible'),o.unobserve(r.target))})},{threshold:.15});fadeEls.forEach(el=>{observer.observe(el)})});
  // Burger menu funcional y accesible
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('main-menu');
  if (burger && navMenu) {
    burger.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
    });
    // Cerrar menú al hacer click en un enlace (mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
          navMenu.classList.remove('open');
          burger.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    });
    // Cerrar menú con Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
