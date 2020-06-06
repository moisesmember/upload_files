<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Vamos Uploadingar</title>
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
		<link rel="stylesheet"  href="style.css"/>
	</head>
	<body>		
		<label for="nome_pasta">Insira o nome da PASTA:</label>
		<input type="text" id="nome_pasta" name="nome_pasta">	
		<div class="area-upload">
			<label for="upload-file" class="label-upload">
				<i class="fas fa-cloud-upload-alt"></i>
				<div class="texto">Clique ou arraste o arquivo</div>
			</label><!--
			<input type="file" accept="image/jpg,image/png,image/gif,application/pdf,application/msword" id="upload-file" multiple/>  -->
            
            <input type="file" accept="image/jpeg,image/pjpeg,image/png,image/gif,application/pdf,application/msword,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.wordprocessingml.template,application/vnd.ms-word.document.macroEnabled.12,application/vnd.ms-word.template.macroEnabled.12,application/vnd.oasis.opendocument.text,application/vnd.oasis.opendocument.spreadsheet,application/vnd.oasis.opendocument.presentation,application/vnd.ms-excel,application/vnd.ms-excel,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.ms-excel.sheet.macroEnabled.12,application/vnd.ms-excel.template.macroEnabled.12,application/vnd.ms-excel.addin.macroEnabled.12,application/vnd.ms-excel.sheet.binary.macroEnabled.12,application/vnd.ms-powerpoint,application/vnd.ms-powerpoint,application/vnd.ms-powerpoint,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.presentationml.template,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.ms-powerpoint.addin.macroEnabled.12,application/vnd.ms-powerpoint.presentation.macroEnabled.12,application/vnd.ms-powerpoint.template.macroEnabled.12,application/vnd.ms-powerpoint.slideshow.macroEnabled.12,application/vnd.ms-access,text/csv" id="upload-file" multiple/>
			
			<div class="lista-uploads">
			</div>
		</div>
        
        <?php
       /* $path = "uploads/1926/";
        $diretorio = dir($path);
        $res[]=null;
        $count=0;
        echo "Lista de Arquivos do diretório '<strong>".$path."</strong>':<br />";
        while($arquivo = $diretorio -> read()){                      
          //echo "<a href='".$path.$arquivo."'>".$arquivo."</a><br />";  
          $res[$count] = array(
              'path' => $path.$arquivo,
              'name_file' => $arquivo
          );
          $count++;
        }

        echo json_encode($res, JSON_PRETTY_PRINT);
        
        $diretorio -> close(); */
        ?>

		<script src="script.js"></script>
	</body>
</html>