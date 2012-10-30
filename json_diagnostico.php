<?php 
    header('Access-Control-Allow-Origin: *');

    $sin = array();
    

    $k=0;
    foreach ($_GET as $key => $val) {
      $sin[$k]=$_GET[$key];
      $k++;
    }

  	$url = "mysql.hostinger.es"; 
  	$dbuser = "u226563973_gio"; 
  	$pwrd = "google2"; 
    $rows = array();

  	$con = mysql_connect($url, $dbuser, $pwrd) or die(mysql_error()); 
  	mysql_set_charset("utf8", $con); 
    mysql_select_db("u226563973_doctor", $con);


    $condition;  	
    if(count($sin)>1){
      for($i=0;$i<(count($sin)-1);$i++){
          $condition = $condition."idSintoma ='".$sin[$i]."' OR ";
      }
      $condition = $condition."idSintoma ='".$sin[count($sin)-1]."'";
    }else{
      $condition = "idSintoma= '".$sin[0]."'";
    }

    $queSin = "SELECT a.idEnfermedad, nombre, ((a.noSintomas/b.noSintomas)*100) prob FROM enfermedad,( ".
                "SELECT idEnfermedad,count(idSintoma) noSintomas FROM causa ".
                "WHERE ".$condition." GROUP BY idEnfermedad) a,( ".
                "SELECT idEnfermedad,count(idSintoma) noSintomas FROM causa ".
                "GROUP BY idEnfermedad) b ".
                "WHERE a.idEnfermedad = b.idEnfermedad AND enfermedad.idEnfermedad = a.idEnfermedad ORDER BY prob DESC LIMIT 3";
	  $resSin = mysql_query($queSin, $con) or die(mysql_error());
	  $totSin = mysql_num_rows($resSin);

    while($r = mysql_fetch_assoc($resSin)) {
      $rows[] = $r; 
    }
    print json_encode($rows);
?>
