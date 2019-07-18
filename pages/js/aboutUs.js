$(document).ready(function(){

    //代码部分
    //滚轮监听

    var topDistance = $(".navbar").outerHeight() + $(".firstImg").outerHeight();
    $(window).scroll( function(){
        console.log($("html").scrollTop());
        if(topDistance<$("html").scrollTop()){
            console.log("yes");
        }
    }
    );


    //代码结尾
});