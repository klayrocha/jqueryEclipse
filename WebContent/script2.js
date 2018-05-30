 $( function(){
    
    // EXEMPLO 01
    $('a').attr('href','http://www.google.com');
    $('img').attr('width','100');
    $('img').attr('border','10');

    // EXEMPLO 02
    var borderImagem = $('img').attr('border');
    alert(borderImagem);

    var srcImagem = $('img').attr('src');
    alert(srcImagem);
 });
 