<?php
	if(isset($_POST['url'])){
		$url=$_POST['url'];
	}

	$sanitized = filter_var($url, FILTER_VALIDATE_URL);

	if($sanitized == FALSE) {
		echo "Invalid URL, please try again";
	} else {
		$output = shell_exec("./download.sh $sanitized");
		echo "$output";
	}

?>
