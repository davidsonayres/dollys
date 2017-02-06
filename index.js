var $j = jQuery.noConflict();
var mql = window.matchMedia("(min-width: 768px)");

if (mql.matches) {
  /* the viewport is at least 400 pixels wide */
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
} else {
  /* the viewport is less than 400 pixels wide */
  $j(function() {

    $j('div.menu_button').on('click', function() {
      $j('div.dolly').css('bottom', '-62%');
      $j('div.dolly').css('right', '-25%');
      $j('img.slogan').attr('src', 'images/Dollys_Logo.svg');
      $j('img.slogan').css('width', '20%');
      $j('img.slogan').css('margin', '-5% auto -6%');
      $j('nav').css('display', 'inline-block');
    });

    $j('#hours').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground5.jpg")');
      $j("#info").load("hours.html");
    });

    $j('#menus').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground6.jpg")');
      $j("#info").load("menus.html");
    });

    $j('#contact').on('click', function() {
      $j('#page_wrapper').css('background-image', 'url("images/DollysBackground7.jpg")');
      $j("#info").load("contact.html");
    });

    $j('#reservations').on('click', function() {
      $j('div.bookenda_script_tag_mvcbooker_1row').attr('src', 'https://www.bookenda.com/Public/MVCBooker.aspx?format=1Col&name=dollys-mojito-bar&Language=en&idClientApplication=6744&force=true')
      $j('#reservations_wrapper').css('margin-top', 0);
      $j('#page_wrapper').css('filter', 'blur(3px)')
    });

    $j('#reservations_wrapper').on('click', function(e) {
      if (e.target !== this)
        return;
      else
        $j('#reservations_wrapper').css('margin-top', '200%');
        $j('#page_wrapper').css('filter', 'blur(0px)');
    });
  })
}
