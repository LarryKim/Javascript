<?php

$url = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=";
$url .= "https://news.google.com/news/feeds?pz=1&cf=all&ned=en&hl=us&topic=t&output=rss";

// sendRequest
// note how referer is set manually
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_REFERER, "http://localhost/js/ajax.php"); 
$body = curl_exec($ch);
curl_close($ch);

// now, process the JSON string
//$json = json_decode($body);
// now have some fun with the r
echo $body;
?>
