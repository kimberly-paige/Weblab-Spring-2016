// $(document).ready(function(){
//   $(".box").click(function(){
//     $(".box").removeClass("open");
//     $(this).addClass('open');
//   })
// });

$(document).ready(function(){
  $(".box").click(function(){

    if($(this).hasClass("open")){
          $(this).removeClass("open");
          $(this).animate({ height: 40, opacity : ".5" });
    }
    else {
          $(this).addClass("open");
          $(this).animate({ height: 200, opacity: "1" });
    }


  })
});
