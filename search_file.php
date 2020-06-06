<?php
ini_set('upload_max_filesize', '10M');
header('Content-Type: application/json');

$codigoPost = $_POST['codigo'];
//$codigoPost = 1926;

$nameFolder = "/".strval($codigoPost);
$path = "uploads".$nameFolder."/";

$diretorio = dir($path);
$res[]=null;
$count=0;
//echo "Lista de Arquivos do diretório '<strong>".$path."</strong>':<br />";
while($arquivo = $diretorio -> read()){                      
  //echo "<a href='".$path.$arquivo."'>".$arquivo."</a><br />";  
  $res[$count] = array(
      'path' => $path.$arquivo,
      'name' => $arquivo
  );
  $count++;
}
$diretorio -> close();

echo json_encode($res, JSON_PRETTY_PRINT);

?>