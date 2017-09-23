$(document).foundation();

$(document).ready(function(){
  cambiabackground();
});

function cambiabackground() {
	$("html").fadeTo(300,0.7, function() {
		rnd = Math.floor((Math.random()*5)+1);
		$("html").css("background", "url(img/bg/"+rnd+".jpg) no-repeat center center fixed");
		$("html").css("-webkit-background-size", "cover");
		$("html").css("-moz-background-size", "cover");
		$("html").css("-o-background-size", "cover");
		$("html").css("background-size","cover");
		});
	$("html").fadeTo(300,1);
}
