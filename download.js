function download() {
	$("#return").text("Loading...");
	$.ajax({
			url: "download.php",
			type: "post",
			data: { "url" : $("#url").val() },
			success: function(response) {
				$("#return").html(response);
			},
		});
}
