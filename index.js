$(document).ready(function(){
  $(".dvt-image").click(function(){
    $(".dvt-image").slideDown('1500').hide('1000');
    $(".dv-title").show('1500');
  });
  $(".dvt-title").click(function(){
    $(".dvt-title").slideUp('1500');
    $(".dvt-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $(".dsn-image").click(function(){
    $(".dsn-image").slideDown('1500').hide('1000');
    $(".WWD-icon-titles").show('1500');
  });
  $(".WWD-icon-titles").click(function(){
    $(".WWD-icon-titles").slideUp('1500');
    $(".dsn-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $(".prdct-image").click(function(){
    $(".prdct-image").slideDown('1500').hide('1000');
    $(".prdct-title").show('1500');
  });
  $(".prdct-title").click(function(){
    $(".prdct-title").slideUp('1500');
    $(".prdct-image").slideDown('1500');
  });
});

$(document).ready(function(){
    $("form#form34A").submit(function(event){
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });