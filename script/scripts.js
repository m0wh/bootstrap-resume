$(document).ready(function() {


  /* BARRES DE COMPETENCES */

  $('.in-bar').each(function(i) { // Définit le temps d'animation pour chaque barre de compétence
    $(this).css({
      'transition-duration': 1000 + i*100 + "ms"
    });
  });

  setTimeout(function () { // Anime les barres
    $('div[data-skill]').each(function(i) {
      $(this).children('.in-bar').css({
        'width': $(this).attr('data-skill')
      });
    });
  }, 200);

  /* ///////////////////// */



  /* FADE-IN DES SECTIONS & EXPERIENCES */

  $('section').each(function(i) {     // Définit le délai avant chaque animation et la durée
    $(this).css({
      'transition-delay': 100 + i*100 + "ms",
      'transition-duration': 800 + i*200 + "ms"
    });
  });
  $('.experience').each(function(i) {
    $(this).css({
      'transition-delay': 100 + i*200 + "ms",
      'transition-duration': 800 + i*200 + "ms"
    });

  });

  $('#sect-header').css('opacity', '1');
  $('#sect-experience').css('opacity', '1');
  $('#sect-competences').css('opacity', '1');
  $('.experience').css('opacity', '1');

  $(window).scroll(function() {
    if ($(window).scrollTop() > $('#sect-languages').offset().top - $(window).height() + 100) {
      $('#sect-languages').css('opacity', '1');
    }
    if ($(window).scrollTop() > $('#sect-hobbies').offset().top - $(window).height() + 100) {
      $('#sect-hobbies').css('opacity', '1');
    }
  });

  /* //////////////////// */


})
