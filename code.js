// JQuery Mobile


$(document).on("mobileinit", function(){


	$(function(){
		$(window).on("orientationchange", function(event){
			$("#orient").text("Este dispositivo está en modo " + event.orientation);
			if(event.orientation == "portrait"){
				$("#menu").collapsible("option", "collapsed", false);
			}			
			if(event.orientation == "landscape"){
				$("#menu").collapsible("option", "collapsed", true);
			}
		});

	});
});