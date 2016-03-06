/**
 * Created by willli on 16/2/26.
 */
$(function(){


    var $h2_product = $(".h2-product");
    var $h3_1st = $(".h3-wrap h3.h3-1st");
    var $h3 = $(".h3-wrap h3");

    var $purchase = $(".h3-purchase");
    var $purchase_oth = $(".h3-purchase ~ .h3-oth");
    var $good = $(".h3-good");
    var $good_oth = $(".h3-good ~ .h3-oth");
    var $athlete = $(".h3-athlete");
    var $athlete_oth = $(".h3-athlete ~ .h3-oth");
    var $about = $(".h3-about");
    var $about_oth = $(".h3-about ~ .h3-oth");




    $($h2_product).click(function(){
        if($h3_1st.is(":visible")){
            $($h3_1st).slideUp(300);
            $($h3).slideUp(300);
            $("#product").removeClass().addClass("fa fa-plus");
            $(".fa").removeClass().addClass("fa fa-plus");
        }
        else{
            $($h3_1st).slideDown(300);
            $("#product").removeClass().addClass("fa fa-minus");
        }
        return false;
    });


    $($purchase).click(function(){
        if($purchase_oth.is(":visible")){
            $($purchase_oth).slideUp(300);
            $("#purchase").removeClass().addClass("fa fa-plus");

        }
        else{
            $($purchase_oth).slideDown(300);
            $("#purchase").removeClass().addClass("fa fa-minus");
        }
        return false;
    });

    $($good).click(function(){
        if($good_oth.is(":visible")){
            $($good_oth).slideUp(300);
            $("#good").removeClass().addClass("fa fa-plus");
        }
        else{
            $($good_oth).slideDown(300);
            $("#good").removeClass().addClass("fa fa-minus");
        }
        return false;
    });

    $($athlete).click(function(){
        if($athlete_oth.is(":visible")){
            $($athlete_oth).slideUp(300);
            $("#athlete").removeClass().addClass("fa fa-plus");
        }
        else{
            $($athlete_oth).slideDown(300);
            $("#athlete").removeClass().addClass("fa fa-minus");
        }
        return false;
    });

    $($about).click(function(){
        if($about_oth.is(":visible")){
            $($about_oth).slideUp(300);
            $("#about").removeClass().addClass("fa fa-plus");
        }
        else{
            $($about_oth).slideDown(300);
            $("#about").removeClass().addClass("fa fa-minus");
        }
        return false;
    });


})