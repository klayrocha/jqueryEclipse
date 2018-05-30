$(function(){

    $('#form').on('submit', function(e){
        e.preventDefault();
        console.log('O formulario foi enviado....');
    });

    $('#idade').on('change', function(e){
        $('#nome').val( $('#idade').val());
    });
});
