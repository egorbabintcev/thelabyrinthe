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
$('form').on('submit', function(e) {
  e.preventDefault();
  const data = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: '/php/submit.php',
    data,
  });
  location.assign('/sp.html');
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

$('button.slide-manager__control-btn').on('click', function(e) {
  e.preventDefault();
  const curSlide = $(this).closest('.slide');
  const menu = $(this).closest('.management-slider').find('.menu ul li');
  menu.filter('.is-active').removeClass('is-active');
  if ($(this).hasClass('prev')) {

    let prevSlide;
    if (curSlide.prev().length !== 0) {
      prevSlide = curSlide.prev();
    } else {
      prevSlide = curSlide.siblings().last();
    }

    prevSlide.addClass('is-active');
    $(menu[prevSlide.index()]).addClass('is-active');
  } else if ($(this).hasClass('next')) {

    let nextSlide;
    if (curSlide.next().length !== 0) {
      nextSlide = curSlide.next();
    } else {
      nextSlide = curSlide.siblings().first();
    }

    nextSlide.addClass('is-active');
    $(menu[nextSlide.index()]).addClass('is-active');
  }
  curSlide.removeClass('is-active');
})

$('.management-slider li').on('click', function() {
  $(this).siblings('.is-active').removeClass('is-active');
  $(this).addClass('is-active');

  const slides = $(this).closest('.management-slider').find('.slide');
  slides.filter('.is-active').removeClass('is-active');
  $(slides[$(this).index()]).addClass('is-active');
})

$('.accordeon-toggle').on('click', function(e) {
  e.preventDefault();

  const accordeon = $(this).siblings('p:nth-last-child(-n + 2)');
  if (accordeon.css('height') !== '0px') return;
  accordeon.css('height', accordeon[0].scrollHeight + 'px');
  $(this).hide();
})

$('.news__accordeon-toggle').on('click', function(e) {
  e.preventDefault();

  const accordeon = $(this).siblings('.news-wrapper').find('.accordeon:not(.is-open)').first();
  if (accordeon.css('height') !== '0px' || !accordeon) return;
  accordeon.css('height', accordeon[0].scrollHeight + 'px');
  accordeon.addClass('is-open');
})

$('.brands__accordeon-toggle').on('click', function(e) {
  e.preventDefault();

  const accordeon = $(this).siblings('.accordeon').first();
  if (accordeon.css('height') !== '0px' || !accordeon) return;
  if (accordeon.length === 1) {
    $(this).hide();
  }
  accordeon.css('height', accordeon[0].scrollHeight + 'px');
  accordeon.addClass('is-open');
})

$('.accordeon').on('transitionend', function() {
  if ($(this).css('height') === '0px') return;
  $(this).css('height', 'auto');
})

$('button.brands__tab').on('click', function(e) {
  const tabs = $('button.brands__tab');
  const products = $('.brands__products');
  const idx = $(this).index();
  tabs.removeClass('is-active');
  $(this).addClass('is-active');
  products.removeClass('is-active');
  products.hide();
  $(products.get(idx))
    .addClass('is-active')
    .fadeIn();
})
