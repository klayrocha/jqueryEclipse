$(function(){
    $('button').on('click', function(){
    	
    	// AJAX EXEMPLO 01
        //console.log("Chegou aqui !");
        //$('div').load("testeAjax.html");
        
        //$.get("testeAjax.html", function(data){
        //	$('div').html(data);
        //});
        
        //$.post("testeAjax.html", function(data){
        //	$('div').html(data);
        //});
    });
    
    
    $('#form').on('submit', function(e){
		e.preventDefault();
		var txt = $(this).serialize();
		//console.log(txt);
		
		// GET
		//$.ajax({
		//	type:'GET',
		//	url:'principal',
		//	data:txt,
		//	success: function(data){
		//		$('div').html(data);
		//	},
		//	error: function(){
		//		alert('Ocorreu um erro !');
		//	}
		//});
		
		// POST
		//$.ajax({
		//	type:'POST',
		//	url:'principal',
		//	data:txt,
		//	success: function(data){
		//		$('div').html(data);
		//	},
		//	error: function(){
		//		alert('Ocorreu um erro !');
		//	}
		//});
		
		// RETORNO JSON
		$.ajax({
			type:'POST',
			url:'retornoJson',
			data:txt,
			//dataType:'json',
			success: function(data){
				console.log('retorno do json Nome '+data.nome)
				console.log('retorno do json Senha '+data.senha)
				$('div').html('Nome: '+data.nome+' Senha: '+data.senha);
			},
			error: function(err){
				alert('Ocorreu um erro !'+err);
			}
		});
	});
});