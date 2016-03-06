/** Created by willli on 16/2/25. */
$(function(){
    $(".menu a").mouseover(function(){
        $(this).css("background", "#f2f2f2");
        return false;
    }).mouseout(function(){
        $(this).css("background", "#ffffff");
    });
})