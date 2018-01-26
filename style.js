'use strict'

$(document).ready(function(){

  $('#radio').css('display','none');
  $('#check').css('display','none');

  $('#radio').css('-webkit-appearance','none');
  $('#radio').css('display','block');
  $('#radio').css('width','35px');
  $('#radio').css('height','35px');
  

  $('#check').click(function(){
    
    $('#check').css('background-position','-80px');

  });

  $('#radio').click(function(){

    $('#radio').css('background-position','-168px');

  });


}


// function createDropDown(){
//   var source = $("#select");
//   var selected = source.find("option[selected]");  // get selected <option>
//   var options = $("option", source);  // get all <option> elements
//   // create <dl> and <dt> with selected value inside it
//   $("body").append('<dl id="target" class="dropdown"></dl>')
//   $("#target").append('<dt><a href="#">' + selected.text() + 
//       '<span class="value">' + selected.val() + 
//       '</span></a></dt>')
//   $("#target").append('<dd><ul></ul></dd>')
//   // iterate through all the <option> elements and create UL
//   options.each(function(){
//       $("#target dd ul").append('<li><a href="#">' + 
//           $(this).text() + '<span class="value">' + 
//           $(this).val() + '</span></a></li>');
//   });
// }

// $(".dropdown dd ul li a").click(function() {
//   var text = $(this).html();
//   $(".dropdown dt a").html(text);
//   $(".dropdown dd ul").hide();
//   var source = $("#select");
//   source.val($(this).find("span.value").html())
// });
