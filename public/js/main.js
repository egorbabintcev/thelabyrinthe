document.querySelector('.navi-toggler svg').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navi-menu').classList.toggle('hidden');
  document.querySelector('body').classList.toggle('is-locked');
})
