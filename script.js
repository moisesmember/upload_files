let drop_ = document.querySelector('.area-upload #upload-file');
drop_.addEventListener('dragenter', function(){
	document.querySelector('.area-upload .label-upload').classList.add('highlight');
});
drop_.addEventListener('dragleave', function(){
	document.querySelector('.area-upload .label-upload').classList.remove('highlight');
});
drop_.addEventListener('drop', function(){
	document.querySelector('.area-upload .label-upload').classList.remove('highlight');
});

document.querySelector('#upload-file').addEventListener('change', function() {
	var files = this.files;
	for(var i = 0; i < files.length; i++){
		var info = validarArquivo(files[i]);
		
		//Criar barra
		var barra = document.createElement("div");
		var fill = document.createElement("div");
		var text = document.createElement("div");
		barra.appendChild(fill);
		barra.appendChild(text);
		
		barra.classList.add("barra");
		fill.classList.add("fill");
		text.classList.add("text");
		
		if(info.error == undefined){
			text.innerHTML = info.success;
			enviarArquivo(i, barra); //Enviar arquivo
		}else{
			text.innerHTML = info.error;
			barra.classList.add("error");
		}
		
		//Adicionar barra
		document.querySelector('.lista-uploads').appendChild(barra);
	};
});


function getCodigoOs(){
	return document.getElementById("nome_pasta").value;
	// return 2000;
}

// Valida o tipo levando em consideração o tipo e tamanho do arquivo
function validarArquivo(file){
	
	// Tipos permitidos	
    var mime_types = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',            
            'application/pdf',
            'application/msword',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
            'application/vnd.ms-word.document.macroEnabled.12',
            'application/vnd.ms-word.template.macroEnabled.12',
            'application/vnd.oasis.opendocument.text',
            'application/vnd.oasis.opendocument.spreadsheet',
            'application/vnd.oasis.opendocument.presentation',
            'application/vnd.ms-excel',
            'application/vnd.ms-excel',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
            'application/vnd.ms-excel.sheet.macroEnabled.12',
            'application/vnd.ms-excel.template.macroEnabled.12',
            'application/vnd.ms-excel.addin.macroEnabled.12',
            'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
            'application/vnd.ms-powerpoint',
            'application/vnd.ms-powerpoint',
            'application/vnd.ms-powerpoint',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/vnd.openxmlformats-officedocument.presentationml.template',
            'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
            'application/vnd.ms-powerpoint.addin.macroEnabled.12',
            'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
            ' application/vnd.ms-powerpoint.template.macroEnabled.12',
            'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',
			'application/vnd.ms-access',
			'text/csv'
			//'application/csv'
    ];
	
	// Validar os tipos
	if(mime_types.indexOf(file.type) == -1) {
		return {"error" : "O arquivo " + file.name + " não permitido"};
	}

	// Apenas 2MB é permitido
	if(file.size > 10*1024*1024) {
		return {"error" : file.name + " ultrapassou limite de 2MB"};
	}

	// Se der tudo certo
	return {"success": "Enviando: " + file.name};
}

// Envia o arquivo para ser salvo no diretório via PHP
function enviarArquivo(indice, barra){
	var data = new FormData();
	var request = new XMLHttpRequest();
	var codigo = getCodigoOs();
	//Adicionar arquivo
	
	data.append('file', document.querySelector('#upload-file').files[indice]);
	data.append('codigo',document.getElementById("nome_pasta").value);
	//data.append('codigo',codigo);

	console.log( document.querySelector('#upload-file').files[indice] );

	// AJAX request finished
	request.addEventListener('load', function(e) {
		// Resposta
		if(request.response.status == "success"){
			barra.querySelector(".text").innerHTML = "<a href=\"" + request.response.path + "\" target=\"_blank\">" + request.response.name + "</a> <i class=\"fas fa-check\"></i>";
			barra.classList.add("complete");
		}else{
			barra.querySelector(".text").innerHTML = "Erro ao enviar: " + request.response.name;
			barra.classList.add("error");
		}
	});
	
	// Calcular e mostrar o progresso
	request.upload.addEventListener('progress', function(e) {
		var percent_complete = (e.loaded / e.total)*100;
		
		barra.querySelector(".fill").style.minWidth = percent_complete + "%"; 
	});
	
	//Resposta em JSON
	request.responseType = 'json';
	
	// Caminho
	request.open('post', 'upload.php'); 
	request.send(data);
}

// Função para adicionar uma espera de evento em BOTÃO PESQUISAR
function load() { 
	var el = document.getElementById("search"); 
	//el.addEventListener("click", pesquisarArquivo, true); 
	el.addEventListener("click", teste_2019, true); 
} 

function pesquisarArquivo()
{
	console.log('pesquisar arquivo solicitado');
	//Criar barra
	var barra = document.createElement("div");
	var fill = document.createElement("div");
	var text = document.createElement("div");
	barra.appendChild(fill);
	barra.appendChild(text);
	
	barra.classList.add("barra");
	fill.classList.add("fill");
	text.classList.add("text");

	var data = new FormData();
	var request = new XMLHttpRequest();

	data.append('codigo',document.getElementById("nome_pasta").value);

	// AJAX request finished
	request.addEventListener('load', function(e) {
		// Resposta
		if(request.response.status == "success"){
			barra.querySelector(".text").innerHTML = "<a href=\"" + request.response.path + "\" target=\"_blank\">" + request.response.name + "</a> <i class=\"fas fa-check\"></i>";
			barra.classList.add("complete");
		}else{
			barra.querySelector(".text").innerHTML = "Erro ao enviar: " + request.response.name;
			barra.classList.add("error");
		}
	});

	console.log( 'file: '+request.response.name );
	
	// Calcular e mostrar o progresso
	request.upload.addEventListener('progress', function(e) {
		var percent_complete = (e.loaded / e.total)*100;
		
		barra.querySelector(".fill").style.minWidth = percent_complete + "%"; 
	});
	
	//Resposta em JSON
	request.responseType = 'json';
	
	// Caminho
	request.open('post', 'search_file.php'); 
	request.send(data);

	//Adicionar barra
	document.querySelector('.lista-uploads').appendChild(barra);
}

function teste()
{
	var barra = document.createElement("div");
	var fill = document.createElement("div");
	var text = document.createElement("div");
	barra.appendChild(fill);
	barra.appendChild(text);
	
	barra.classList.add("barra");
	fill.classList.add("fill");
	text.classList.add("text");

	var pdfFilesDirectory = '/knowloand_v2/uploads/1926/';

	// get auto-generated page 
	$.ajax({url: pdfFilesDirectory}).then(function(html) {
		// create temporary DOM element
		var document = $(html);
		
		// find all links ending with .pdf 
		document.find('a[href$=.pdf]').each(function() {
			var pdfName = $(this).text();
			var pdfUrl = $(this).attr('href');

			console.log(`The file name's: ${$(this).attr('href')} and link: ${$(this).text()}`);

			barra.querySelector(".text").innerHTML = "<a href=\"" + pdfUrl + "\" target=\"_blank\">" + pdfName + "</a> <i class=\"fas fa-check\"></i>";
			barra.classList.add("complete");
			// do what you want here 
		})
		
	});
}

function teste_2019()
{
	var barra = document.createElement("div");
	var fill = document.createElement("div");
	var text = document.createElement("div");
	barra.appendChild(fill);
	barra.appendChild(text);
	
	barra.classList.add("barra");
	fill.classList.add("fill");
	text.classList.add("text");
/*
	$.getJSON( "list_file.php", function( data ) {
		var items = [];
		$.each( data, function(val, value ) {
		  //items.Push(val);
		  console.log( value.path +' - '+value.name );
		  barra.querySelector(".text").innerHTML = "<a href=\"" + value.path + "\" target=\"_blank\">" + value.name  + "</a> <i class=\"fas fa-check\"></i>";
		  barra.classList.add("complete");
		});
	  
		//$( "#text" ).append( items );
	  });
*/
	$.ajax({
        url      : 'list_file.php',
        type     : 'post',
        dataType : 'json',        
        data : {
            acao : '1926'
           // usuario : cdUsuario
        },
        success : function (data) {
			$.each( data.files, function(val, value ) {
				//items.Push(val);
				console.log( value.path +' - '+value.name );
				//barra.querySelector(".text").innerHTML = "<a href=\"" + value.path + "\" target=\"_blank\">" + value.name  + "</a> <i class=\"fas fa-check\"></i>";
				barra.querySelector(".text").innerHTML = "<a href=\"" + value.path + "\" target=\"_blank\">" + value.name  + "</a> <i class=\"fas fa-check\"></i>";
				barra.classList.add("complete");
				document.querySelector('.lista-uploads').appendChild(barra);
			});
			            
        },
        error : function(data){
            console.log( "ERRO DURANTE LISTAR RESPONSÁVEIS: "+data );
        }
    });    
}
