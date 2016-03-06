/**
 * Created by willli on 16/2/26.
 */
$(function(){
    $(".search")
        .focus(function(){
            $(this).css("border", "1px solid #bebebe");
        })
        .blur(function(){
            $(this).css("border", "1px solid #cfcfcf");
        });
})