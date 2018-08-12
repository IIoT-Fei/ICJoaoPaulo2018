/*
|--------------------------------------------------------------------------
| Publicidade Fixa
|--------------------------------------------------------------------------
*/

var publicidadeFixa = {

    init: function () {

        this.manipularSuper();

        var interval = setInterval(function(){

            var alturaSuper = jQuery('#super').height();

            if(jQuery(window).width() >= 768 && alturaSuper > 20 ){
                publicidadeFixa.scrollar();
            }else{
                publicidadeFixa.publicidadeMobile();
            }

            if(alturaSuper > 20){
                clearTimeout(interval);
            }

        }, 100)
    },

    manipularSuper: function(){
        jQuery('.banner.banner-topo').before('<div class="sticky-element"></div>');
    },

    // Scrollar

    scrollar: function () {

        var timer;

        jQuery(window).on('scroll', function() {

            var alturaJanela = jQuery(this).scrollTop();
            var alturaHeader = jQuery('.sticky-element').offset().top - 40;
            var alturaSuper = jQuery('#super').height();

            timer = publicidadeFixa.cronometrar(alturaJanela,alturaHeader);

            if (alturaJanela >= alturaHeader && alturaSuper < 200){
                publicidadeFixa.fixarScroll();
            }else{
                publicidadeFixa.fixarTopo();
                publicidadeFixa.limparTempo(timer);
            }

        });
    },

    // Cronometrar

    cronometrar: function(alturaJanela, alturaHeader) {

        if(!jQuery('.banner-topo-fixed').hasClass('timer')){

            jQuery('.banner-topo-fixed').addClass('timer');
            timer =  setTimeout(function() {

                if (alturaJanela >= alturaHeader ){
                    publicidadeFixa.esconder();
                }

            }, 10000);

        }
        return timer;
    },

    // Limpar Tempo

    limparTempo: function(timer){
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    },

    // Fixar Topo

    fixarTopo: function(){
        jQuery('.banner-topo-fixed').removeClass('banner-scroll-fixed timer fadeOut banner-hide').show();;
        jQuery('.sticky-element').height(0);
    },

    // Fixar Scroll

    fixarScroll: function() {
        if (!jQuery('.banner-topo-fixed').hasClass('banner-hide')) {

            jQuery('.banner-topo-fixed').addClass('banner-scroll-fixed animated');
            var gapHeight = jQuery('.banner-topo-fixed').outerHeight();
            jQuery('.sticky-element').height(gapHeight);

        }
    },

    // Esconder

    esconder: function() {
        jQuery('.banner-topo-fixed').addClass('fadeOut banner-hide').delay('500').queue(function(){

            jQuery(this).hide(0).removeClass('banner-scroll-fixed timer fadeOut');
            jQuery('.sticky-element').height(0);
            jQuery('.banner-topo-fixed').show(0);
            jQuery(this).dequeue();
            
        });
    },

    // Publicidade Mobile

    publicidadeMobile: function(){
        $('.banner-topo').addClass('banner-topo-fixed');
    }
}

// CHAMADA

jQuery(document).ready(function(){
    publicidadeFixa.init();
});
