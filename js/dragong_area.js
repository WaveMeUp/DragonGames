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
		modalWindowInit();
	})

	// Convert List to One Column on screen less than 285px
	var toOneColumn=function(){
		var width=$(window).width();
		if( width < 285)
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

	// if info-message is showing that we change margin from header
	var byDefault=function(){
		if( $("article").css("margin-top") != "none")
		{
			$("#switcher").css("margin-top", "30px");
		}
	}

	// Setup top and left parameters
	var modalWindowInit=function(){
		// Scan Window's Sizes
		var win_width=$(window).width();
		var win_height=$(window).height();
		
		// Setup width
		if( (win_width <= 992) && (win_width > 768) )
			$("#modal_window").width((win_width-150));
		else if( (win_width <= 768) && (win_width > 490) )
			$("#modal_window").width((win_width-100));
		else if( win_width <= 491 )
			$("#modal_window").width((win_width-100));
		
		// Setup height
		if( win_height <= 680)
			$("#modal_window").height((win_height-50));
		
		// Calculate values
		var left=(win_width-$("#modal_window").width())/2;
		var top=($(window).height()-$("#modal_window").height())/2;
		if (win_width <=768 ) left-=15; // Consider padding
		
		// Write values
		$("#modal_window").css({"top": top, "left": left});
		console.log(win_width+" "+$("#modal_window").width()+" "+ left)
	}

	// Item's click Event
	$(".exist_item, .new_item").click(function(){
		// display modal-window
		$("#modal_window, #modal_overlay").css("display","block");
		$("#modal_window, #modal_overlay").animate({"opacity": 1}, 300);
		// scan values
		var img=$(this).find("img").attr("src");
		var title=$(this).find(".item_name").text();
		// insert values
		$("#modal_window").find("img").attr("src", img);
		$("#modal_window").find(".title").text(title);
	});

	// Close Modal-Window
	$("#modal_window button, #modal_overlay").click(function(){
		$("#modal_window, #modal_overlay").animate({"opacity": 0 }, 300, function(){
			
		});
		setTimeout(function(){
			$("#modal_window, #modal_overlay").css("display","none");
		}, 500);
		
	});

	// Call by Default
	draw_lines();
	toOneColumn();
	byDefault();
	modalWindowInit();
});