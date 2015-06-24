$(function(){
	
	// Open navigation menu on smartphones
	$("#button_navigation").click(function(){
		var menu=$("#navigation");
		if(menu.css("display")=="none")
			menu.css("display","block");
		else
			menu.css("display","none");
	});

	// Switcher between forms
	$("#switcher input").click(function(){
		var name="#"+$(this).attr("id")+"_form";
		var del_name="#"+$(this).parent().find("input:not(:checked)").attr("id")+"_form";
		if($(name).css("display")!="block")
		{
			$(del_name).css("display", "none");
			$(name).css("display", "block");
		}
	});

	// Draw Item's status line
	var draw_lines=function(){
		$(".exist_item .progress").each(function( index, element ){
			
			// Scan current value 
			var num=parseInt($(element).next().text());
			// Check value
			if(num>100 || num<0)
				return;
			// Choose color
			var color="progress-bar-";
			if(num<40)
				color+="success"; // Green Color
			else if (num>75)
				color+="danger"; // Red Color
			else
				color+="warning"; // Yellow Color
			// Draw element
			$(element).find(".progress-bar").css({"width": num+"%"}).addClass(color);
		});
	}

	// Item Hover
	$(".exist_item").hover(function(){
		// hover ON
		$(this).find(".progress").addClass('active');
	},
		// hover OFF
	function(){
		$(this).find(".progress").removeClass('active');
	});

	// Window Resize
	$(window).resize(function(){
		toOneColumn();
	})

	// Convert List to One Column on screen less than 611px
	var toOneColumn=function(){
		var width=$(window).width();
		if( width < 611)
			$("#items_list div.col-xs-6").each(function(index, element){
				$(element).removeClass("col-xs-6");
				$(element).addClass("col-xs-12");
			});
		else
			$("#items_list div.col-xs-12").each(function(index, element){
				$(element).removeClass("col-xs-12");
				$(element).addClass("col-xs-6");
			});
	}

	// Call by Default
	draw_lines();
	toOneColumn();
});