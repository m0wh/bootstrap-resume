$(document).ready(function() {

  $('.in-bar').each(function(i) {
    $(this).css({
      'transition-duration': 1000 + i*100 + "ms"
    });
    console.log(500 + i*10);
  });

  setTimeout(function () {
    $('div[data-skill]').each(function(i) {
      $(this).children('.in-bar').css({
        'width': $(this).attr('data-skill')
      });
    });
  }, 200);

});
