$(function(){
    var titulo = $('h1');
    titulo.html('Titulo Novo 2');

    var div = document.getElementById('div');
    //alert(div);
    $(div).html('Agora é elemento jQuery');

    $(document.getElementById('div')).html('Tudo em uma só linha');

    var divJquery = $('#div');
    divJquery.html('Div do Jquery');

    //var item2 = $('li:eq(1)'); EXEMPLO 01
    var item2 = $('li').eq(1); // EXEMPLO 02
    item2.html('Item 2 Alterado');
});