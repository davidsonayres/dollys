var $j = jQuery.noConflict();

$j(function() {
  $j('#hours').hover(function() {
    $j('body').css('background-image', 'url("images/DollysBackground2.jpg")')
    $j.ajax({
      url: '_hours',
      method: 'GET',
      dataType: 'html'
    }).done(function(responseData){
      console.log(responseData);
      $j('#info').html(responseData);
    });
  });

  $j('#menus').hover(function() {
    $j('body').css('background-image', 'url("images/DollysBackground3.jpg")')
    $j.ajax({
      url: '_menus',
      method: 'GET',
      dataType: 'html'
    }).done(function(responseData){
      console.log(responseData);
      $j('#info').html(responseData);
    });
  });

  $j('#contact').hover(function() {
    $j('body').css('background-image', 'url("images/DollysBackground4.jpg")')
    $j.ajax({
      url: '_contact',
      method: 'GET',
      dataType: 'html'
    }).done(function(responseData){
      console.log(responseData);
      $j('#info').html(responseData);
    });
  });
})
