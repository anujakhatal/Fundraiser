//For Donation amount to appear on cutton click

var amount;
var reach;
var value;
var valueFinal = 100;

// Check if modal checkbox is checked
$(".modal-footer button").on("click", function(){
if ($('.dismissModal').is(':checked')) {

        $(".confirm").attr("data-target", " ");
  }
});

// Show input radio on Donate button click

$(".donate button").on("click", function(){
  $(".donate").toggleClass("active");
  if( $(".donate").is(".active") ) {
    $("form").slideDown(450, "easeOutQuart");
  } else {
    $("form").slideUp(300, "easeInOutQuad");
  }
});

$("input").click(function () {
    $('#show-me').css('display','block');
});

//For label effects on amount selected

$('.one').on("click", function(){

  $('label.one').addClass("highlight");
  $('label.five').removeClass("highlight");
  $('label.ten').removeClass("highlight");
  value=1;

});

$('.five').on("click", function(){
  
  $('label.one').removeClass("highlight");
  $('label.five').addClass("highlight");
  $('label.ten').removeClass("highlight");
  value=5;

});

$('.ten').on("click", function(){
  
  $('label.one').removeClass("highlight");
  $('label.five').removeClass("highlight");
  $('label.ten').addClass("highlight");
  value=10;

});

//On Button confirm click

$('.confirm').on ("click", function() {


  var valueNow = +$('.progress-bar').attr('aria-valuenow');
  if (valueNow < valueFinal)
  {
    if (value == 1)
    {
      valueNow+=1;
    }
     if (value == 5)
    {
      valueNow+=5;
    }
     if (value == 10)
    {
      valueNow+=10;
    }
    $('.progress-bar').attr('aria-valuenow', valueNow);
    $('.raised').text('£ ' + valueNow + ' raised');
    $('#amountRemaning').text (valueFinal - valueNow);
    $('#amountDonated').text(value);
  }
  else
  {
        $('.alert-danger').css('display','block');
         $('.alert-success').css('display','none');
         if (data) {
    e.preventDefault();
    $('#myModal').modal();
  }
  }

$('#keyframes').text('@-webkit-keyframes progress-bar{from { width: 0%; }to { width:'+valueNow+ '%;}');
});
