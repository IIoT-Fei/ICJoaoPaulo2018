/*
|--------------------------------------------------------------------------
| Menu Fixo
|--------------------------------------------------------------------------
*/

var menuFixo = {

    init : function(){

        this.loadFixedNav();
        this.fixedNav();
        
    },

    // Clona o Menu Principal

    loadFixedNav : function(){

      $loadFixedNav = $('#fixed-nav .container');
      $mainNav = $('.menu-principal .main-nav');
      $mainNav.clone().appendTo('#fixed-nav .container');

    },

    // Alterna visibilidade do menu fixo

    fixedNav: function() {

        var nav = $('#fixed-nav');
        var header = $('#main-header');
        var pos_nav = jQuery('.sticky-element').offset().top - 40;

        $(window).scroll(function () {
            if ($(this).scrollTop() > pos_nav) {
                nav.show();
            } else {
                nav.hide();
            }
        });

    }


}

/*
|--------------------------------------------------------------------------
| Chamada
|--------------------------------------------------------------------------
*/

$(document).ready(function() {

  menuFixo.init()

});
