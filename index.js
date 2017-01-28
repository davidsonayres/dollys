var $j = jQuery.noConflict();

$j(function() {
  $j('#hours').hover(function() {
    $j('body').css('background-image', 'url("images/DollysBackground2.jpg")');
    $j("#info").load("hours.html");
  });

  $j('#menus').hover(function() {
    $j('body').css('background-image', 'url("images/DollysBackground3.jpg")');
    $j("#info").load("menus.html");
  });

  $j('#contact').hover(function() {
    $j('body').css('background-image', 'url("images/DollysBackground4.jpg")');
    $j("#info").load("contact.html");
  });
})
