// mobile devices menu opening
$('.navi-toggler svg').on('click', function() {
  $(this).toggleClass('active');
  $('.navi-menu').toggleClass('hidden');
  $('body').toggleClass('is-locked');
})


// modal windows close and open
$('.modal-open').on('click', function(e) {
  e.preventDefault();
  $('body').addClass('is-locked');
  $(this.dataset.target).fadeIn();
})

$('.modal-close').on('click', function(e) {
  e.preventDefault();
  $('body').removeClass('is-locked');
  $(this.dataset.target).fadeOut();
})


// animation of chart only on homepage
const { pathname } = window.location;
if (pathname === '/' || pathname === '/index.html') {
  $(window).on('scroll', function() {
    const scroll = $(window).scrollTop();
    if (scroll >= $('.stats').offset().top) {
      $('.chart-cols').removeClass('hidden');
    }
  })
}


// form submit
$('form').on('submit', function() {
  const data = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: '/php/submit.php',
    data,
  });
})

// validating conditions confirmation
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
