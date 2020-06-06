<?php
ini_set('upload_max_filesize', '10M');
header('Content-Type: application/json');
$file = $_FILES['file'];
$codigoPost = $_POST['codigo'];

//$codigoPost = "5882";
$ret = [];
//$nameFolder = "/2003";
$nameFolder = "/".strval($codigoPost);
$fileFolder = "uploads".$nameFolder."/";

 if(!is_dir($fileFolder)){    
    //echo "A pasta não existe";
    mkdir(__DIR__.'/uploads'.$nameFolder.'/', 0777, true); // cria a pasta com a nova pasta 
    $conteudoIndex = '<!DOCTYPE html><html></html>';
    $fileIndex = fopen(__DIR__.'/uploads'.$nameFolder.'/index.html', 'w');  
    fwrite($fileIndex, $conteudoIndex);   // Cria o arquivo Index da pasta
    fclose($fileIndex);
 }else{
    //echo "A pasta já existe";
 }

// Move um arquivo enviado para uma nova localização - verificando se o local é válido
if(move_uploaded_file($file['tmp_name'],'uploads'.$nameFolder.'/'.$file['name'])){
    $ret["status"] = "success";

    $ret["path"] = 'uploads/'.$nameFolder.'/'.$file['name'];
    $ret["name"] = $file['name'];
}else{
    $ret["status"] = "error";
    $ret["name"] = $file['name'];
}

echo json_encode($ret, JSON_PRETTY_PRINT);
?>