$(function(){
	
	var init=function(){
		var height=$(window).height();
		console.log(height);
		if(height >= 660)
		{
			$("footer").css({
				"position":"absolute",
				"bottom":0,
				"left":0,
				"right":0
			})	;
		}
		else
		{
			$("footer").css("position","static");
		}
	}

	$(window).resize(function(){
		init();
	})

	// by Default
	init();
});