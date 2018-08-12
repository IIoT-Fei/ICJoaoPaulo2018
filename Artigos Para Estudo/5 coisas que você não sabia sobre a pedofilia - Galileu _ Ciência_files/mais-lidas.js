MaisLidasGalileu = {

    init : function() {
        var _self = MaisLidasGalileu;
    },

    load : function(json,dias,item) {
        $.getJSON(json, function(data) {
           var posts = "";
           $.each(data, function(i){
               var numeral = i+1 ;
               posts += '<li><span class="posicao">'+numeral+'</span><div class="linha"></div><h2 class="titulo"><a href="'+data[i].url+'">'+data[i].titulo+'</a></h2></li>';
           });
           $(".lista-noticias").html(posts);
        });
    },

    controlaAba : function(obj) {
        $(".mais-lidas .lista-noticias").fadeOut();
        $(obj).fadeIn();
    }

};
