$(function(){
    //$('button').click(function(){
        //alert('clicou no botao');
        //$(this).css('background-color','red');
        //$(this).toggleClass('fundoVermelhor');
        
        //$(this).toggleClass('border2');

        //if($(this).html() == 'Carregando...'){
        //    $(this).html('Clique aqui');
        //} else {
        //    $(this).html('Carregando...');
        //}
    //});


    // EXECMPLO MOUSE OVER OUT HOVER

    //EXEMPLO 01
    //$('button').mouseover(function(){
    //    $(this).addClass('border2');
    //});

    //$('button').mouseout(function(){
    //    $(this).removeClass('border2');
    //});

    //EXEMPLO 02
    //$('button').hover(function(){
    //    $(this).addClass('border2');
    //},function(){
    //    $(this).removeClass('border2');
    //});

    //EXEMPLO 03
    $('button').hover(function(){
        $(this).toggleClass('border2');
    });


   //$('button').bind('click',function(){
     $('button').on('click',function(){  
        $(this).toggleClass('fundoVermelhor');
            
        $(this).toggleClass('border2');

        if($(this).html() == 'Carregando...'){
            $(this).html('Clique aqui');
        } else {
            $(this).html('Carregando...');
        }

        //$(this).unbind('click');
        //$(this).off('click');
   });

   // CHAMAR A ACAO 
   //$('button').trigger('click');

   $(window).on('resize',function(){
        alert('alterou o tamanho resize');
   });

});