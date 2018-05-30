$(function(){
    console.log('Valor com espaco --> ',$('#algo').html());
    console.log('Valor sem espaco --> ',$.trim($('#algo').html()));

    $('li').each(function(){
        alert($(this).html());
    });

    var idade = 90;

    alert($.type(idade));

    alert($.isNumeric(idade));

    alert($.isArray(idade));

    alert($.isFunction(idade));


    if( $('#algo').length > 0){
        alert('Existe');
    } else {
        alert('Não existe');
    }

    if( $('#algo').hasClass('classeKlay22')){
        alert('Tem a classe');
    } else {
        alert('Não tem classe');
    }

    $('#nome').attr('disabled','disabled');

    $('#nome').removeAttr('disabled');
});