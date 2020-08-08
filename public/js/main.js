document.querySelector('.navi-toggler svg').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navi-menu').classList.toggle('hidden');
  document.querySelector('body').classList.toggle('is-locked');
})

document.querySelectorAll('.btn-callback').forEach((btn) => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const { action, target } = this.dataset;
    const modal = document.querySelector(target);
    const body = document.querySelector('body');
    if (action === 'open') {
      modal.classList.add('is-open');
      body.classList.add('is-locked');
    } else if (action === 'close') {
      modal.classList.remove('is-open');
      body.classList.remove('is-locked');
    }
  })
})
