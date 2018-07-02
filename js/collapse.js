$(".toggleDiv").click(function(event){
	var addressID = $(this).attr("href");
	$(".collapse").not(addressID).collapse('hide');
	$(addressID).collapse('toggle');
	$('#aboutModal').data('bs.modal').handleUpdate();
});

$('#aboutModal').on('hidden.bs.modal', function (e) {
	$(".collapse").collapse('hide');
});
