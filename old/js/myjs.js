/*  JS by Henrique Carvalho */

$(document).ready( function() {

  //depends on the resolution the nav bar
  function hideAndShowNavBar(width){
    //console.log($(window).height());
    //console.log($(window).width()); 
    if($(window).width() <= width){
      $("nav ul").hide();
    }else{
      $("nav ul").show();
    }
  }
  
  // This will execute whenever the window is resized
  $(window).resize(function() {
    hideAndShowNavBar(465);
  });

  // When the browser is reaload
  $(window).load(function() {
    hideAndShowNavBar(465);
  });

  //Hide and show dropdown menu
  $("#mobile-button").click(function(){
    $("nav ul").fadeToggle("slow","linear");
  });

  //Check characters left
  $('#message').keyup(function () {
    var left = 250 - $(this).val().length;
    if (left < 0) {
        left = 0;
    }
    $('#counter').text('Characters left: ' + left);
  });

  //Scroll the page automatically
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
  });

  //form validate
  $('#register').validate({
    rules: 
    {
      name: {
        required:true,
        rangelength:[3,40]
      },
      subject: {
        required:true,
        rangelength:[2,40]
      },
      email:{
        required:true
      },
      message:{
        required:true,
        maxlength:250
      }
    },
    messages:
    {
      name:{
        required:'Please enter your name.',
        rangelength:'Please type your first name or last name at least.'
      },
      email:{
        required:'Please enter a valid email address.',
        
      },
      subject:{
        required:'Please enter subject.',
        rangelength:'Please enter more than 2 characters.'
      },
      message:{
        required:'Please enter your message',
        maxlength:'Please enter no more than 250 characters.'
      }
    }//message
  }); //validate()
});