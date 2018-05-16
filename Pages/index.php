<?php
//use oAuth library
require "twitteroauth/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;

//consumer keys and secrets
$consumer_key = "Lvxi7KxaMtEEdxJNGHF1KeJf6";
	$consumer_secret = "h69lVNkzF84jMoZIwtKfzd7ZUzMmF3ppQMb1vxcyWNsl7GZfi3";
$access_token = "996447755953303552-FROvEGY7gAzBI1u0zlfxt5zXS0GF2ri";
$access_token_secret = "66VpzFmyDUOfeaW2o3WkfiAmJpWIGcH0uelpoqytZTVaD";



$connection = new TwitterOAuth($consumer_key, $consumer_secret, $access_token, $access_token_secret);
$content = $connection->get("account/verify_credentials");
    $data = array("status" => "fail", "msg" => "On $methodType");

//GET
$statuses = $connection->get("search/tweets", ["q" => "twitterapi"]);
echo "<pre>";
print_r($statuses);
echo "</pre>";
$data= $statuses;
?>
