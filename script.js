// temas
function toggleTheme() {
  var body = document.querySelector('body');
  body.classList.toggle('dark');
}

// rolagem do menu
window.addEventListener('scroll', function() {
  let header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 100);
});