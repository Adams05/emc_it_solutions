const nav = document.getElementById('mobileNav');
const btn = document.getElementById('mobileBtn');

btn.addEventListener('click', function() {
  nav.classList.toggle('show-menu');
})