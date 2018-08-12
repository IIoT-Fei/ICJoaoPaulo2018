jQuery(document).ready(function () {
    montaHtmlParaNewsletter();
    jQuery(".edgcore-popup-cadastre :contains('Cadastre-se')").each(function(abc, dce){
        if (jQuery(dce).text() == "Cadastre-se"){
            jQuery(dce).bind('click', abrirPopUp);
            jQuery(dce).attr('href','#');

        }
    });
});

function abrirPopUp(){

  var size_x = (jQuery(window).width() / 2);
  var popup = jQuery('#cadastro-iframe-rodape');
  var size_x_popup = (popup.width() / 2);
  popup.css({left: (size_x - size_x_popup) + 'px'});
  jQuery('#cadastro-iframe-rodape').show();
  jQuery('#cadastre-se-rodape-shadow').show();
  jQuery("html, body").animate({ scrollTop: 0 }, 1000);

  return false;
}

function fecharPopupNewsletterRodape()
{
  jQuery('#cadastro-iframe-rodape').hide();
  jQuery('#cadastre-se-rodape-shadow').hide();
}

function montaHtmlParaNewsletter(){
    jQuery('body').append('<div class="popup-bkg-shadow" id="cadastre-se-rodape-shadow">&nbsp;</div>');
    jQuery('body').append('<div class="popup-newsletters" id="cadastro-iframe-rodape" style="background:none repeat scroll 0 0 rgba(0, 0, 0, 0); width: 554px;">');
    jQuery('#cadastro-iframe-rodape').append('<a class="popup-close" href="javascript:fecharPopupNewsletterRodape()" style="height: 15px;">Fechar</a>');
    jQuery('#cadastro-iframe-rodape').append('<iframe src="https://cdn.wsedg.globo.com/newsletter/box_geral.html" width="554px" height="689px" frameborder="0" scrolling="no"></iframe>');
}
