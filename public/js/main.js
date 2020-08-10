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

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const { pathname } = window.location;
if (pathname === '/' || pathname === '/index.html') {
  window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    const edge = window.innerWidth <= 480 ? offset(statsSection).top + 400 : offset(statsSection).top;
    if (window.pageYOffset >= edge) {
      document.querySelector('.chart-cols').classList.remove('hidden');
    }
  })
}

$('form').on('submit', function() {
  const data = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: '/php/submit.php',
    data,
  });
})


$('form input[type="checkbox"]').on('change', function() {
  const parentForm = $(this).closest('form');
  const inputs = parentForm.find('input[type="checkbox"]').toArray();
  const submitBtn = parentForm.find('button[type="submit"]');
  if (inputs.every((input) => input.checked)) {
    submitBtn.prop('disabled', null);
  } else {
    submitBtn.prop('disabled', true);
  }
})
