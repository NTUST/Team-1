$(function(){
   $("#open-menu").click(function(){
      $(".l-menu").toggleClass(function(){
          if($(this).is(".fadeInLeft")){
              $(this).removeClass("fadeInLeft");
              $(".main-container").addClass("close-menu");
              return "fadeOutLeft";
          }
          else{
              $(this).removeClass("fadeOutLeft");
              $(this).removeClass("hide-on-small-only");
              $(".main-container").removeClass("close-menu");
              return "fadeInLeft";
          }
      })

   })
   
});