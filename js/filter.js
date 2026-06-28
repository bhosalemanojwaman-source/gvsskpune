var classes = [
// Three Images per row - Container
"size-31",
];
$(document).ready( function() {
	$(".photogallery-image").fancybox();		
	$(".photogallery-image").each( function(i) {
		var current_key = i;
		if (current_key >= classes.length) {
			current_key = i % classes.length;
		}
		$(this).addClass( classes[current_key] );
	});
	$(".filter").on("click", function () {
		var $this = $(this);
		if (!$this.hasClass("active")) {
			$(".filter").removeClass("active");
			$this.addClass("active");
			var $filter = $this.data("rel");
			$filter == 'all' ?
			$(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn()
			:
		$(".fancybox").fadeOut(0).filter(function () { 
					return $(this).find("img").attr("title").split('-')[0] == $filter; 
		}).attr("data-fancybox-group", $filter).fadeIn(1000); 
		} 
	});
});