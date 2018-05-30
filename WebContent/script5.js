$(function(){
    $('.filha').parent().prepend('texto alterado no parent');// CAMINHO DE BAIXO PARA CIMA
    console.log('Verficando valor --> ' + $('.site').find('.topo').find('.filha').html());
    console.log($('.filha').closest('.site').html());
    $("button").css('font-size','20')
    $("button").css('background-color','red');
    $("button").css('border','2px solid #000');
    $("button").on('click',mudarBorda);
    $("input").data('help-token','KLAY_HELP_123');
});

function mudarBorda(){
    $("input").data('caracteres',$("input").val().length);
    alert($("input").data('help-token'));
    alert($("input").data('caracteres'));

    console.log($("button").css('background-color'));
    console.log($("button").css('border'));
    if($("button").css('background-color') == 'rgb(255, 0, 0)'){
        $("button").css('background-color','blue');    
    } else if($("button").css('background-color') == 'rgb(0, 0, 255)'){
        $("button").css('background-color','red');    
    }

    if($("button").css('border') == '2px solid rgb(0, 0, 0)'){
        $("button").css('border','4px solid #000');
    } else if($("button").css('border') == '4px solid rgb(0, 0, 0)'){
        $("button").css('border','2px solid #000');
    }

}