$(function(){
	
	// Open navigation menu on smartphones
	$("#button_navigation").click(function(){
		var menu=$("#navigation");
		if(menu.css("display")=="none")
			menu.css("display","block");
		else
			menu.css("display","none");
	});

	$("#switcher input").click(function(){
		var name="#"+$(this).attr("id")+"_form";
		var del_name="#"+$(this).parent().find("input:not(:checked)").attr("id")+"_form";
		if($(name).css("display")!="block")
		{
			$(del_name).css("display", "none");
			$(name).css("display", "block");
		}
	});
});