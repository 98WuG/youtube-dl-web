function download() {
	$("#return").html("<i class=\"fa fa-spinner fa-spin\" style=\"font-size:48px\"></i>");
	//$("#download").html("Download <i class=\"fa fa-circle-o-notch fa-spin ml-2\"></i>");
	$.ajax({
		url: "backend/download.php",
		type: "post",
		data: { "url" : $("#url").val() },
		success: function(response) {
			$("#return").html(response);
			//$("#download").html("Download <i class=\"fa fa-cloud-download ml-2\"></i>");
		},
		error: function(response) {
			$("return").html("Error 500: Something went wrong, please try again later.");
			//$("#download").html("Download <i class=\"fa fa-cloud-download ml-2\"></i>");
		}
	});
}
