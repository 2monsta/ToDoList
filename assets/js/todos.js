//Check Off specific todos by clicking
//reason to select the ul is because it only works when the page is loaded. 
//when the page is loaded, we dont have all the li's, the second argument is that when
//it's clicked on a li within the loaded ul, the listener will fire
$("ul").on("click", "li", function(){  
	$(this).toggleClass("completed"); //Much simpler way to do this.
});

//Click on X to delete todo

$("ul").on("click", "span", function(e){
	//remove the li from the page
	$(this).parent().fadeOut(500,function(){ // this "this" is the span that is selected
		$(this).remove(); // this "this" is the li and not the span
	});
	e.stopPropagation(); //stops all the other event listeners
})

$("input[type = 'text']").keypress(function(e){
	if(e.which===13){
		//grabbing todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul (added to the list)
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
