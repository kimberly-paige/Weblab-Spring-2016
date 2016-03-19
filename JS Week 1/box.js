$( document ).ready(function() {

  var box = $(".box")

  box.on('click', function(event){


  var el =  $(this);

    el.animate({
      'margin-left': 900,               // can also use marginLeft and backgroundColor if you dont want to use quotes
      'background-color' : 'aqua'
   }, 3000, 'easeInOutQuint', function onComplete(){
      el.css({
        'margin-left': 20,
        'background-color': 'white'
      });

    });
  });

});

// same as above : $function(){});
