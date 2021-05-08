$ (function(){
	// "" trong  "" la bien
	$("button").click(function(event) {
		// alert(1);
		var data = $(this).attr("data");
		// lay duong dan
		var path = "img/"+data+".png";
		// cap nhat tham so
		$("img").attr("src",path);
	});
})