// Check Off specific todos by clicking
$("li").click(function(){
	//if li is gray
		//turn it black
	//else
		//turn it gray
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }else{
	// 	$(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// 	});
	// }

	$(this).toggleClass("completed"); //Much simpler way to do this.
});

//Click on X to delete todo

$("span").click(function(e){
	//remove the li from the page
	$(this).parent().fadeOut(500,function(){ // this "this" is the span that is selected
		$(this).remove(); // this "this" is the li and not the span
	});
	e.stopPropagation(); //stops all the other event listeners
})