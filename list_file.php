<?php
    //$acao = $_POST['acao'];
    $acao = '1926';
    $nameFolder = strval($acao);

    const urlPadrao = 'http://10.51.18.199/knowloand_v2';
    //$directory = __DIR__.'/uploads//'.$nameFolder;
    //$directory = self::urlPadrao.'/uploads//'.$nameFolder;
    $directory = 'http://10.51.18.199/knowloand_v2/uploads//'.$nameFolder."/";
    //$pdffiles = glob($directory . "/*");
    $pdffiles = glob("$directory{*.jpg,*.JPG,*.png,*.gif,*.bmp}", GLOB_BRACE);
    
    var_dump($pdffiles);
    echo "Total de Imagens" . count($pdffiles);
    echo $directory;
    $files = array();

    $i = 0;
    foreach($pdffiles as $pdffile)
    {
        //$files[] = "<a href=$pdffile>".basename($pdffile)."</a>";
        $files[$i] = array(
            'name' => basename($pdffile),
            'path' => $pdffile
        );
        $i++;
    }
  //  echo json_encode($files);
    echo json_encode(array( "files" => $files));

?>