var $j = jQuery.noConflict();

$j(function() {

  if ((document.documentElement.clientWidth < 768) && (window.innerHeight < window.innerWidth)) {
    $j('#menu_button').on('click', function() {
      $j('div.dolly').css('left', '-18%');
      $j('div.dolly').css('bottom', '-72%');
      $j('img.slogan').attr('src', 'images/Dollys_Logo.svg');
      $j('img.slogan').css('width', '20%');
      $j('img.slogan').css('margin', '-5% auto -6%');
      $j('nav').css('display', 'inline-block');
    });

    $j('#hours').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground2.jpg")');
      $j("#info").load("hours.html");
      $j('#page_wrapper').css('background-size', 'cover');
    });

    $j('#menus').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground3.jpg")');
      $j("#info").load("menus.html");
      $j('#page_wrapper').css('background-size', 'cover');
    });

    $j('#contact').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground4.jpg")');
      $j("#info").load("contact.html");
      $j('#page_wrapper').css('background-size', 'cover');
    });

    $j('#reservations').on('click', function() {
      $j('#reservations_wrapper').css('margin-top', '7%');
      $j('#page_wrapper').css('filter', 'blur(3px)')
    });

    $j('#reservations_wrapper').on('click', function(e) {
      if (e.target !== this)
        return;
      else
        $j('#reservations_wrapper').css('margin-top', '200%');
        $j('#page_wrapper').css('filter', 'blur(0px)');
    });

    $j('img.slogan').on('click', function() {
      $j('div.dolly').css('left', '27.5%');
      $j('div.dolly').css('bottom', '-50%');
      $j('nav').css('display', 'none');
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground1.jpg")');
    });
  } else if (document.documentElement.clientWidth >= 768) {

    $j('#menu_button').on('click', function() {
      $j('div.dolly').css('left', '42%');
      $j('div.dolly').css('bottom', '-62%');
      $j('img.slogan').attr('src', 'images/Dollys_Logo.svg');
      $j('img.slogan').css('width', '20%');
      $j('img.slogan').css('margin', '-5% auto -6%');
      $j('nav').css('display', 'inline-block');
    });

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

    $j('#menu_button').on('click', function() {
      $j('div.dolly').css('left', '42%');
      $j('div.dolly').css('bottom', '-62%');
      $j('img.slogan').attr('src', 'images/Dollys_Logo.svg');
      $j('img.slogan').css('width', '20%');
      $j('img.slogan').css('margin', '-5% auto -6%');
      $j('nav').css('display', 'inline-block');
    });

    $j('#hours').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground5.jpg")');
      $j("#info").load("hours.html");
      $j('#page_wrapper').css('background-size', '100%');
    });

    $j('#menus').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground6.jpg")');
      $j("#info").load("menus.html");
      $j('#page_wrapper').css('background-size', '100%');
    });

    $j('#contact').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground7.jpg")');
      $j("#info").load("contact.html");
      $j('#page_wrapper').css('background-size', '100%');
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

    $j('img.slogan').on('click', function() {
      $j('div.dolly').css('left', '5%');
      $j('div.dolly').css('bottom', '-45%');
      $j('nav').css('display', 'none');
    });
  };
})
