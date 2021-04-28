AOS.init();


//Comportamento da seta sobe
//Quando ocorre rolagem na tela do navegador
$(window).scroll(function(){
    //SE A ROLAGEM FOR MAIOR OU IGUAL A 550
    //MOSTRA A SETA COM FADE
    //CASO CONTRÁRIO, OCULTA A SETA COM FADE
    if($(window).scrollTop() >= 400)
    {
        $('.seta-sobe').fadeIn();
    }else{
        $('.seta-sobe').fadeOut();
    }
    
});
$('.seta-sobe').click(function(){
    // aplica animação de rolagem no body,html no topo
    $('body, html').animate({
       scrollTop: 0
       
    });
});

//Rolagem com animação nos links superiores
$('.rolagem').click(function(){
    //posição vertical do item clicado
    var id = $(this).attr('href');
    var destino = $(id).offset().top;
    $('html, body').animate({
        scrollTop: destino,
    });
});