$(".hamburger").click(function() {

	    $(".hamburger").hide("slow")
		$(".menu").animate({"top":"0px"}, 1000);
	    $(".menu-two").show("slow");

		//if(window.screen.width < 500) {
			$(".header-links").hide();
	    //};

});

$(".menu-close").click(function() {

		$(".menu").animate({"top":"-200px"}, 1000);
		$(".menu-two").hide("slow");
		$(".hamburger").show("slow")

		//if(window.screen.width < 500) {
			$(".header-links").show("slow");
		//};

});

