var $j = jQuery.noConflict();

$j(function() {
  $j('#hours').on('click', function() {
    $j('body').css('background-image', 'url("images/DollysBackground2.jpg")');
    $j("#info").load("hours.html");
  });

  $j('#menus').on('click', function() {
    $j('body').css('background-image', 'url("images/DollysBackground3.jpg")');
    $j("#info").load("menus.html");
  });

  $j('#contact').on('click', function() {
    $j('body').css('background-image', 'url("images/DollysBackground4.jpg")');
    $j("#info").load("contact.html");
  });
})
