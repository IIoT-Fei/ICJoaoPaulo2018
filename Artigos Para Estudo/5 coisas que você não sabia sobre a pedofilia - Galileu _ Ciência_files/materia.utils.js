var fix_subtitle_and_foto_divs_width_on_news_body = function () {
    $(".foto .foto-legenda").each(function () {
        $(this).parents(".foto").css("max-width", $(this).siblings("img").width());
        $(this).css("max-width", $(this).siblings("img").width());
    });
};

var set_youtube_div_max_width_according_to_video_width = function () {
    if (typeof($(".youtube")) != 'undefined' && $(".youtube").length > 0) {
        $(".youtube").each(function () {
            $(this).css("width", $(this).children("object").attr("width"));
            $(this).css("height", $(this).children("object").attr("height"));
        });
    }
};


var fix_image_to_responsive = function() {
    $(".foto img").each(function() {
        $(this).removeAttr("width");
        $(this).removeAttr("height");
        $(this).addClass("img-responsive");
    });
};

fix_subtitle_and_foto_divs_width_on_news_body();
set_youtube_div_max_width_according_to_video_width();
fix_image_to_responsive();

var youtube = $(".youtube");
if (typeof(youtube) != 'undefined' && youtube.length > 0) {
    var largura = youtube.css("width").replace("px", "");
    var altura = youtube.css("height").replace("px", "");

    if($(window).width() < 450) {
        youtube.css("height", "");
        youtube.css("padding-bottom", "56.25%");
    } 

    var adapt_youtube_video_size_by_screen_resize = function() {
        window.addEventListener('resize', function () {
            if ($(window).width() < largura) {
                youtube.css("height", "");
                youtube.css("padding-bottom", "56.25%");
            } else {
                youtube.css("padding-bottom", "");
                youtube.css("height", altura + "px");
            }
        });    
    }
    adapt_youtube_video_size_by_screen_resize();
}

// Aplicando filtro pink no header da materia.
function add_pink_filter(background) {
    if(background) {
        var destaque = $("#destaque");
        $(destaque).css("position", "relative");
        $('<div class="pink-filter"></div>').prependTo(destaque);
        $(".header-materia .materia-destaque .pink-filter").css("z-index", "5");
        $(".materia-destaques h1").css("position", "relative").css("z-index", "6"); 
        $(".materia-destaques h4").css("position", "relative").css("z-index", "6"); 
        $(".materia-destaques .banner").css("position", "relative").css("z-index", "6"); 
        $(".materia-destaques span").css("position", "relative").css("z-index", "6"); 
    }
}
