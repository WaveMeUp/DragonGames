$(function(){
	$("#button_navigation").click(function(){
		var menu=$("#navigation");
		if(menu.css("display")=="none")
			menu.css("display","block");
		else
			menu.css("display","none");
	});
});