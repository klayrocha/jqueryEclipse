$(function(){
    //$('#teste').html("Texto alterado !");
    //alert($('#teste').html());
    $('#teste').find('button').addClass('estilo'); // ADICIONAR CLASSE 
    $('#teste').find('button').html('Nome do Botao');
    $('#teste').find('button').text('Nome do Botao modo texto');
    $('#teste').find('img').width(150);
    $('#teste').find('img').height(150);
    //$('input').attr('value','texto preechido com attr');
    $('input').val('texto preechido ');
    $('input').after("<div>Texto qualquer depois</div>");
    $('input').before("<div>Texto qualquer antes</div>");
    $('ul').append('<li>Item 5 </li>');
    $('ul').prepend('<li>Item 0 </li>');
    $('#teste').find('button').remove();
});