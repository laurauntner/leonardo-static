
function setTitle(cameraNr) {
    $.getJSON('/getTitleForCamera/' + cameraNr, function(data) {
        $.each(data, function(key,value)
        {
            if (key == "title") {
                $("#leo_section_title").text(value);
            }
            if (key == "url") {
            $("#leo_section_url").attr("href", value);}
        });
    });
}
// exchange image smouthly

var use_first = true;
function exchangeImageTime(image,div_img1,div_img2, time) {

    if (use_first) {
        $(div_img1).fadeOut(time);
        $(div_img2).load(image);
        $(div_img2).fadeIn(time);
        use_first = false;
    } else {
        $(div_img2).fadeOut(time);
        $(div_img1).load(image);
        $(div_img1).fadeIn(time);
        use_first = true;
    }
}


function exchangeImage(image,div_img1,div_img2){
        exchangeImageTime(image,div_img1,div_img2,1000);
       }

$(document).ready(function() {


    $('#leo_preview_streetview').toggle('slow');
    $("#leo_main_section_text").hide("slow");
    $("#leo_main_title").addClass("pointer");
    $("#leo_main_title").click(function(){
        $("#leo_main_section_text").toggle("slow");

        if ($("#leo_main_title span").text() == "<") {
         $("#leo_main_title span").text("v");
        } else {
              $("#leo_main_title span").text("<");
        }
    });

    $("#leo_main_subsection_text").hide("slow")
    $("#leo_main_subtitle").addClass("pointer");
    $("#leo_main_subtitle").click(function(){
        $("#leo_main_subsection_text").toggle("slow");

         if ($("#leo_main_subtitle span").text() == "<") {
         $("#leo_main_subtitle span").text("v");
        } else {
              $("#leo_main_subtitle span").text("<");
        }
    });


 $('#leo_preview_carousel').on('slide.bs.carousel', function (e) {

    /*

    CC 2.0 License Iatek LLC 2018
    Attribution required

    */
    alert(bla);
    var $e = $(e.relatedTarget);

    var idx = $e.index();
    console.log("IDX :  " + idx);

    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

});

function showObjects() {
$('#leo_preview_streetview').toggle('slow');
$('#camery_image_container').toggleClass("hidden");
$('#hideobjects').toggleClass("hidden");
$('#showobjects').toggleClass("hidden");
}