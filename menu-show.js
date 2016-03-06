/**
 * Created by willli on 16/2/25.
 */
$(function(){

    var $menu_man = $(".menu-man");
    var $menu_woman = $(".menu-woman");
    var $menu_children = $(".menu-children");
    var $menu_custom = $(".menu-custom");

    $(".nav-man")
        .mouseenter(function(){
            $(this).css("border-bottom", "4px solid #a3a3a3")
            $menu_man.fadeIn(300);
            $menu_woman.fadeOut(300);
            $menu_children.fadeOut(300);
            $menu_custom.fadeOut(300);
        })
        .mouseleave(function(){
            $(this).css("border-bottom", "4px solid #ffffff")
        });
    $(".nav-woman")
        .mouseenter(function(){
            $(this).css("border-bottom", "4px solid #a3a3a3")
            $menu_man.fadeOut(300);
            $menu_woman.fadeIn(300);
            $menu_children.fadeOut(300);
            $menu_custom.fadeOut(300);
        })
        .mouseleave(function(){
            $(this).css("border-bottom", "4px solid #ffffff")
        });
    $(".nav-children")
        .mouseenter(function(){
            $(this).css("border-bottom", "4px solid #a3a3a3")
            $menu_man.fadeOut(300);
            $menu_woman.fadeOut(300);
            $menu_children.fadeIn(300);
            $menu_custom.fadeOut(300);
        })
        .mouseleave(function(){
            $(this).css("border-bottom", "4px solid #ffffff")
        });
    $(".nav-custom")
        .mouseenter(function(){
            $(this).css("border-bottom", "4px solid #a3a3a3")
            $menu_man.fadeOut(300);
            $menu_woman.fadeOut(300);
            $menu_children.fadeOut(300);
            $menu_custom.fadeIn(300);
        })
        .mouseleave(function(){
            $(this).css("border-bottom", "4px solid #ffffff")
        });

/*
    $(".nav-woman")
        .mouseenter(function(){
            $(this).css("border-bottom", "4px solid #a3a3a3")
        })
        .mouseleave(function(){
            $(this).css("border-bottom", "0")
        })
        .click(function(){
            if($menu_woman.is(":visible")){
                $menu_woman.slideUp(300);
            }
            else{
                $menu_man.slideUp(300);
                $menu_woman.slideDown(300);
                $menu_children.slideUp(300);
                $menu_custom.slideUp(300);
            }
            return false;
        });
    $(".nav-children")
        .mouseenter(function(){
            $(this).css("border-bottom", "4px solid #a3a3a3")
        })
        .mouseleave(function(){
            $(this).css("border-bottom", "0")
        })
        .click(function(){
            if($menu_children.is(":visible")){
                $menu_children.slideUp(300);
            }
            else{
                $menu_man.slideUp(300);
                $menu_woman.slideUp(300);
                $menu_children.slideDown(300);
                $menu_custom.slideUp(300);
            }
            return false;
        });
    $(".nav-custom")
        .mouseenter(function(){
            $(this).css("border-bottom", "4px solid #a3a3a3")
        })
        .mouseleave(function(){
            $(this).css("border-bottom", "0")
        })
        .click(function(){
            if($menu_custom.is(":visible")){
                $menu_custom.slideUp(300);
            }
            else{
                $menu_man.slideUp(300);
                $menu_woman.slideUp(300);
                $menu_children.slideUp(300);
                $menu_custom.slideDown(300);
            }
            return false;
        });
*/



    $(".menu").mouseleave(function(){
        $(this).slideUp(300);
    });


})