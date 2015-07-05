$(function(){
	// Open navigation menu on smartphones
	$("#button_navigation").click(function(){
		var menu=$("#navigation");
		if(menu.css("display")=="none")
		{
			menu.slideDown(400);
		}
		else
		{
			menu.slideUp(400);
		}
	});
});