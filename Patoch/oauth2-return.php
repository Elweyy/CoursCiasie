<?php 
$proxy_host = 'www-cache.iutnc.univ-lorraine.fr:3128'; // host:port 

echo 'Recupération du code <br>';
$code = $_GET['code'];

echo $code . "<br> <br>";

$url = "https://www.googleapis.com/oauth2/v4/token";
$content = "code=" . urlencode($code) 
. "&client_id=" . urlencode('529993814564-kovovimb5kf3cs1auhjft0vh3vr2utbl.apps.googleusercontent.com') 
. "&client_secret=" . urlencode('_HQcCtA3CStUMCw07XA9bcDF')
. "&redirect_uri=" . urlencode('http://localhost/oauth-return.php') 
. "&grant_type=" . urlencode('authorization_code') ;

$curl = curl_init($url);
// Activation de l'utilisation d'un serveur proxy
curl_setopt($curl, CURLOPT_HTTPPROXYTUNNEL, true);
// Définition de l'adresse du proxy
curl_setopt($curl, CURLOPT_PROXY, $proxy_host); 
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
$response = curl_exec($curl);
curl_close($curl);
echo '<br> <br> '.$response;

$obj = json_decode($response);

$j = $obj -> {'access_token'};

echo '<br> <br> '.$j;



$url1 = "https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=".$j;
