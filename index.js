var $j = jQuery.noConflict();

$j(function() {
  $j('#hours').hover(function() {
    $j('body').css('background-image', 'url("images/DollysBackground2.jpg")')
  });

  $j('#menus').hover(function() {
    $j('body').css('background-image', 'url("images/DollysBackground3.jpg")')
  });

  $j('#contact').hover(function() {
    $j('body').css('background-image', 'url("images/DollysBackground4.jpg")')
  });
})
