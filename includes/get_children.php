<?php 
require 'config.php';

$parent_id_get = $_GET['parent_id'];
$parent_id = preg_replace("/\D/", "", $parent_id_get);

/* MySQL connect */ 
$con = new mysqli(HOST, USER, PASS, DB);

if ($con->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}

/* Mysql query */ 
$query = "SELECT * FROM keuzeboom WHERE parent_id=" . $parent_id;
$result = $con->query($query);

$rows = array();
while($row = $result->fetch_assoc()) {
  $rows[] = $row; 
};

/* return data */
$data = json_encode($rows);
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $data;

/*MySQL close */ 
$result->close();
$con->close();

?>
