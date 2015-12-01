/*  JS by Henrique Carvalho */
$(document).ready( function() {
  
  var text = "Hello! Could I build your idea? :)";
  var index = 0;
  var chars = text.length - 1;
  var speed = 100;
  var div = "message";

  function typing() {
  
    document.getElementById(div).innerHTML += text[index];

    if(index < chars){
      setTimeout(function(){
        index++;
        typing();
      }, speed);
    }

    /*setTimeout(function(){
      $('#apresentation').fadeOut("slow");
    }, 4000);*/
  }

  // When the browser is load or reaload
  $(window).load(function() {
    //$('#overlay').fadeOut();
    setTimeout(function(){
      typing();
    }, 1000);
  });

});