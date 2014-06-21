<?php
  header('Content-Type: application/json');
  $url = 'http://api.justyo.co/yoall/';
  $apikey = 'api_token=';

  $c = curl_init($url);
  curl_setopt($c, CURLOPT_POST, true);
  curl_setopt($c, CURLOPT_POSTFIELDS, $apikey);
  curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
  $response = curl_exec($c);
  curl_close($c);
  echo $response;
?>