<?php
// Abrimos la URL
$fichero_url = fopen($_GET["id"], "r");
// Hasta que no acabe, vamos leyendo y sacando
while (!feof($fichero_url)) {
  echo fgets($fichero_url, 1024);
}
// Cerramos la conexion
fclose($fichero_url);
?>
