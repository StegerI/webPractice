$(".cambio").click(function(){
    $("#book1").hide();
	$("#book2").hide();
  	$("#book3").hide();

  	$(".pag1").css({"background-color": "#E40613", "color": "#000000"});
    $(".pag2").css({"background-color": "#E40613", "color": "#000000"});
    $(".pag3").css({"background-color": "#E40613", "color": "#000000"});
}); 

$(".pag1").click(function(){
    $("#book1").show();
    $(".pag1").css({"background-color": "black", "color": "white"});
}); 

$(".pag2").click(function(){
	$("#book2").show();
	$(".pag2").css({"background-color": "black", "color": "white"});
}); 

$(".pag3").click(function(){
  	$("#book3").show();
  	$(".pag3").css({"background-color": "black", "color": "white"});
}); 


