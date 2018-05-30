$(function(){

    //EXEMPLO 01
    //$('.botao').on('click', function(){
        //$('.div').hide('slow');
        //$('.div').toggle('slow');
        //$('.div').toggle();
        //$('.div').fadeOut();
        //$('.div').fadeIn();
        //$('.div').fadeTo('slow',0.5);
        //$('.div').fadeToggle('slow');
        //$('.div').slideUp('slow');
        //$('.div').slideDown('slow');
        //$('.div').slideToggle('slow');
    //});
    $('.hellobar').slideUp();
    //$('.hellobar').on('click', function(){
    //    $(this).slideUp();
    //});
    // EXEMPLOL 02
    $('.botao').on('click', function(){
        $('.div').animate({
            'margin-left':100,
            'margin-top':20,
            'width':500,
            'border-radius':75
        }, 1000);
    });
});