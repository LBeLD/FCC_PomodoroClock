$(document).ready(function() {
  var breakLenght = parseInt($('#breakLenght').html()),
      sessionLenght = parseInt($('#sessionLenght').html()),
      sessionMin = parseInt($('#sessionMin').html()),
      counterSession,
      counterBreak,
      sessionCounter;


  //on click event to add Break Lenght
  $('#plusBreak').click(function(){
    breakLenght++;
    $('#breakLenght').html(breakLenght);
  })

  //on click event to subtract Break Lenght (negative values not possible)
  $('#minusBreak').click(function(){
  if(breakLenght > 1){
    breakLenght--;
  }
    $('#breakLenght').html(breakLenght);
  })

   //on click event to add Session Lenght
   $('#plusSession').click(function(){
     sessionLenght++;
     sessionMin++;
     $('#sessionLenght').html(sessionLenght);
     $('#sessionMin').html(sessionLenght);
   })

   //on click event to subtract Break Lenght (negative values not possible)
   $('#minusSession').click(function(){
   if(sessionLenght > 1){
     sessionLenght--;
   }
     $('#sessionLenght').html(sessionLenght);
     $('#sessionMin').html(sessionLenght);
   })

  //on click event to start timer
  $('#start').click(function(){
    //get Session Lenght value and transform to seconds
    sessionLenght = parseInt($('#sessionLenght').html())*60;
    //hide start button and header and show reset button
    $('#start').hide();
    $('#header').hide();
    $('#reset').show();
    //start interval
    counterSession = setInterval(startSession, 1000);
  });

  //on click event to reset (reloads the page with default values)
  $('#reset').click(function(){
    location.reload();
  })


  //**************FUNCTIONS**********************


  //start Session Function
  function startSession(){
    //show mode name
    $('#mode').html('Session');
    //border collor and toggle new class
    $('#action').css('border-color', '#5cb462');
    $('#action').toggleClass('toggleClassSession');
    //reduce 1 by one until zero
    sessionLenght--;
    if(sessionLenght === 0){
      clearInterval(counterSession);
      //reset initial value and trasnform to seconds
      breakLenght = parseInt($('#breakLenght').html())*60;
      //start break interval
      counterBreak = setInterval(startBreak, 1000);
    }
      //convert value to minutes and seconds
      convert(sessionLenght);
  }

  //start Break function
  function startBreak(){
    //show mode name
    $('#mode').html('Break');
    //change background color and set widht change animation
    $('#action').css('border-color', '#de9f4d');
    $('#action').toggleClass('toggleClassBreak');
    //reduce 1 by one until zero
    breakLenght--;
    if(breakLenght === 0){
      //clear interval
      clearInterval(counterBreak);
      //reset initial value and trasnform to seconds
      sessionLenght = parseInt($('#sessionLenght').html()*60);
      //start Session interval
      counterSession = setInterval(startSession, 1000);

    }
  convert(breakLenght);
  }
  //function to convert seconds to minutes and seconds;
  function convert(number){
    if(number % 60 >= 10){
      $('#sessionMin').html(Math.floor(number/60) + ':' + number % 60);
    } else {
      $('#sessionMin').html(Math.floor(number/60)  + ':0' + number % 60);
    }
  }

});
