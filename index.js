var $j = jQuery.noConflict();
// var mq = window.matchMedia("(min-width: 768px)");

// if (matchMedia) {
//     var mq = window.matchMedia("(min-width: 768px)");
//     mq.addListener(WidthChange);
//     WidthChange(mq);
// }

$j(function() {
  $j('#menu_button').on('click', function() {
    $j('div.dolly').css('left', '42%');
    $j('div.dolly').css('bottom', '-62%');
    $j('img.slogan').attr('src', 'images/Dollys_Logo.svg');
    $j('img.slogan').css('width', '20%');
    $j('img.slogan').css('margin', '-5% auto -6%');
    $j('nav').css('display', 'inline-block');
  });

  if (document.documentElement.clientWidth >= 768) {
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
  } else {
    $j('#hours').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground5.jpg")');
      $j("#info").load("hours.html");
      $j('#page_wrapper').css('background-size', 'contain');
      $j('#page_wrapper').css('background-position', 'center');
    });

    $j('#menus').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground6.jpg")');
      $j("#info").load("menus.html");
      $j('#page_wrapper').css('background-size', 'contain');
      $j('#page_wrapper').css('background-position', 'center');
      $j('#reservations_wrapper').css('display', 'block');
    });

    $j('#contact').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground7.jpg")');
      $j("#info").load("contact.html");
      $j('#page_wrapper').css('background-size', 'contain');
      $j('#page_wrapper').css('background-position', 'center');
    });

    $j('#reservations').on('click', function() {
      $j('#reservations_wrapper').css('margin-top', '25%');
      $j('#page_wrapper').css('filter', 'blur(3px)')
    });

    $j('#reservations_wrapper').on('click', function(e) {
      if (e.target !== this)
        return;
      else
        $j('#reservations_wrapper').css('margin-top', '200%');
        $j('#page_wrapper').css('filter', 'blur(0px)');
    });
  };
})
