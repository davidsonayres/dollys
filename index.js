var $j = jQuery.noConflict();

$j(function() {
  $j('#hours').on('click', function() {
    $j('#page_wrapper').css('background-image', 'url("images/DollysBackground2.jpg")');
    $j("#info").load("hours.html");
  });

  $j('#menus').on('click', function() {
    $j('#page_wrapper').css('background-image', 'url("images/DollysBackground3.jpg")');
    $j("#info").load("menus.html");
  });

  $j('#contact').on('click', function() {
    $j('#page_wrapper').css('background-image', 'url("images/DollysBackground4.jpg")');
    $j("#info").load("contact.html");
  });

  $j('#reservations').on('click', function() {
    $j('#reservations_wrapper').css('margin-top', 0);
    $j('#page_wrapper').css('filter', 'blur(3px)')
  });

  $j('#reservations_wrapper').on('click', function(e) {
    if (e.target !== this)
      return;
    else
      $j('#reservations_wrapper').css('margin-top', '100%');
      $j('#page_wrapper').css('filter', 'blur(0px)');
  });

})
