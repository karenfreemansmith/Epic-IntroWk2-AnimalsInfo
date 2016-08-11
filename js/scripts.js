$(document).ready(function(){
  $("img").click(function(){
    
    $(".animal").hide();

    if($(this).attr("alt")==="cats") {
      $(".cats").show();
    } else if ($(this).attr("alt")==="rabbits"){
      $(".rabbits").show();
    }else if ($(this).attr("alt")==="kangaroos"){
      $(".kangaroos").show();
    }else if ($(this).attr("alt")==="squirrels"){
      $(".squirrels").show();
    }
  });

});
