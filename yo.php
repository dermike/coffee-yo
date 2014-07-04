<?php
header('Content-Type: application/json');
$postdata = http_build_query(
  array(
    'api_token' => 'api-token-goes-here'
  )
);
$opts = array('http' =>
  array(
    'method'  => 'POST',
    'header'  => 'Content-type: application/x-www-form-urlencoded',
    'content' => $postdata
  )
);
$context  = stream_context_create($opts);
$result = file_get_contents('http://api.justyo.co/yoall/', false, $context);
echo $result;
?>