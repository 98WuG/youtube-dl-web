function download() {
	$("#return").text("Processing... (this may take a while)");
	$.ajax({
			url: "backend/download.php",
			type: "post",
			data: { "url" : $("#url").val() },
			success: function(response) {
				$("#return").html(response);
			},
		});
}
