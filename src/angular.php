<?php
header("Access-Control-Allow-Origin: *");

$timbrate = array(
  "2018-01-01" => array("festivo"),
  "2018-01-02" => array("ferie"),
  "2018-01-03" => array("08:02","13:10","14:51","16:03"),
  "2018-01-04" => array("08:00","13:07","14:29","17:03"),
  "2018-01-05" => array("07:57","13:01"),
  "2018-01-06" => array(),
  "2018-01-07" => array(),
  "2018-01-08" => array("ferie"),
  "2018-01-09" => array("ferie"),
  "2018-01-10" => array("07:44","13:05"),
  "2018-01-11" => array("07:44","11:57"),
  "2018-01-12" => array("07:55","13:02"),
  "2018-01-13" => array(),
  "2018-01-14" => array(),
  "2018-01-15" => array("07:50","13:06","13:34","17:12"),
  "2018-01-16" => array("07:53","13:00","13:16","18:11"),
  "2018-01-17" => array("07:43","13:01"),
  "2018-01-18" => array("07:40","14:01","14:55","17:12"),
  "2018-01-19" => array("07:52","14:00"),
  "2018-01-20" => array(),
  "2018-01-21" => array(),
  "2018-01-22" => array("07:45","13:02","13:19","18:17"),
  "2018-01-23" => array("07:39","13:03","13:16","17:57"),
  "2018-01-24" => array("07:38","09:48"),
  "2018-01-25" => array("07:56","13:57"),
  "2018-01-26" => array("07:41","14:03"),
  "2018-01-27" => array(),
  "2018-01-28" => array(),
  "2018-01-29" => array("07:53","13:00","13:13","16:07"),
  "2018-01-30" => array("07:50","13:44","13:54","16:20"),
  "2018-01-31" => array("07:44","13:01")
);

echo json_encode($timbrate);

?>
