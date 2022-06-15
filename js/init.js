(function($){
  M.AutoInit();


  var timespan = countdown(new Date(), new Date(2022, 11, 12),  countdown.SECONDS);
    console.log(timespan);
    
    var clock = $('.your-clock').FlipClock(timespan.seconds, {
    countdown:true,
    clockFace: 'DailyCounter'
    });

 
  
  $(function(){

    $('.dropdown-trigger').dropdown(
      { hover: true,
        coverTrigger: false,
        constrainWidth: false,
      }
    );
    $('.sidenav').sidenav();

    $(document).ready(function(){
      $('.carousel').carousel(
        {
          dist: -15,
          padding: 100,
          indicators: true,
      }
      );
    });



  }); // end of document ready
})(jQuery); // end of jQuery name space
