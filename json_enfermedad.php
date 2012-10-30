<?php 
    header('Access-Control-Allow-Origin: *');
    
  	$url = "mysql.hostinger.es"; 
  	$dbuser = "u226563973_gio"; 
  	$pwrd = "google2"; 
    $rows = array();

  	$con = mysql_connect($url, $dbuser, $pwrd) or die(mysql_error()); 
  	mysql_set_charset("utf8", $con); 
    mysql_select_db("u226563973_doctor", $con);

  	$queSin = "SELECT * FROM enfermedad ORDER BY nombre ASC";
	  $resSin = mysql_query($queSin, $con) or die(mysql_error());
	  $totSin = mysql_num_rows($resSin);

    while($r = mysql_fetch_assoc($resSin)) {
      $rows[] = $r; 
    }
    print json_encode($rows);
?>