<?php
define('MYSQL_SERVIDOR','localhost');
define('MYSQL_USUARIO','c2430246_dnelso');
define('MYSQL_CONTRASENA','bumo41BUni');
define('MYSQL_BD','c2430246_dnelso');
$conexion = mysqli_connect(MYSQL_SERVIDOR, MYSQL_USUARIO, MYSQL_CONTRASENA, MYSQL_BD);


class Conexion{

	static public function conectar(){

		$link = new PDO("mysql:host=localhost;dbname=c2430246_dnelso",
			            "c2430246_dnelso",
			            "bumo41BUni");

		$link->exec("set names utf8");

		return $link;

	}

}