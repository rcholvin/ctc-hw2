$(document).ready(function(){ 

 //INSERT CODE HERE

 //QUESTION 1

function Dog(){

}

Dog.prototype.bark = function(){

return "woof";

};

function ShibaInu(){
    Dog.call(this);
}

ShibaInu.prototype = new Dog();
ShibaInu.prototype.constructor = ShibaInu;
ShibaInu.prototype.bark = function(){return "much wow very javascript";};

 //QUESTION 3


$('.secondbutton').click(function(){
	$('.secondheading').html('<h1 class="secondheading">Flamingos are the best!!!</h1>');
	$('.secondheading').css('color', 'turquoise');
});


 //QUESTION 4

$('#task4').click(function(){
	$('#hipcat').css({"-webkit-filter" : "blur(2px) saturate(3)"});
});


 //QUESTION 5

$('.car .button').click(function(){
	
	$('.spincar .wheel').css('-webkit-animation-name', 'spin');
	$('.spincar .wheel').css('-webkit-animation-play-state', 'running');
	$('.spincar').css('-webkit-animation-play-state', 'running');
});



 //QUESTION 6

$('.nyancat').animate({paddingLeft: "+=950"},6000);
$('.rainbows').animate({width: "+=950"},6000);

});