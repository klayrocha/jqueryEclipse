// EXEMPLO 01
//$( document ).ready(function(){
//    alert("Iniciou no ready");
//});

// EXEMPLO 02
//$(function(){
//  alert("Iniciou no ready nova forma");
//});

// EXEMPLO 03
//$( document ).ready(funcaoInicio);
//$(funcaoInicio());
//$(funcaoInicio);
//function funcaoInicio(){
//    alert("Iniciou no ready chamando funcao");
//}

// EXEMPLO 04
//var $K =  jQuery.noConflict();
//$K(funcaoInicio);
//$K(alert('Com o novo nome'));

// EXEMPLO 05
//jQuery(document).ready(function(){
//    alert(' Funcionando Nativamente...');
//});

// EXEMPLO 06
//$(function(){
    //$("nome tag") recuperar pela nome da tag
    //$("#nome id"); // recuperar pelo id
    //$(".nome classe"); // recuperar pelo nome da classe
    //$("button"); pelo nome da tag
    //$("#botao1"); // pelo id
    //$(".botao"); // pelo classe
    //$("li.botao"); // apenas a li que tem a classe botão
    //$(".lista2 li.botao"); // apenas a li que tem a classe botão
    //$("ul li.botao"); // as li(s) que tem a classe botão de dos ul(s)
    //$("ul.lista2 li.botao"); // as li(s) que tem a classe botão de dos ul(s)
    // VERIFICAR SE O COMPONENTE EXISTE
     //if($('.botao').length > 0)  {
     //    alert('Tem botao na página');
     //}
//});

// EXEMPLO 07
//$(function(){
//    var elementoNaVariavel = $(".lista2 li.botao");
//    alert(elementoNaVariavel);
//});

