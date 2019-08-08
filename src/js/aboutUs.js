$(document).ready(function () {

    //代码部分


//公司介绍的的滑动动画
(function (){

    var topDistance = parseInt($(".navbar").outerHeight() + $(".firstImg").outerHeight());
    var listenerRange = 50;

    $(window).scroll(function () {
        var scrollCut = topDistance - $("html").scrollTop();

        var displayDistanceBottom = $("html").scrollTop() - topDistance < parseInt(window.innerHeight / 3)
            && $("html").scrollTop() - topDistance > parseInt(window.innerHeight / 3) - listenerRange;

        var displayDistanceTop = (scrollCut > parseInt(window.innerHeight / 3) - listenerRange) &&
            (scrollCut < parseInt(window.innerHeight / 3));

        var cancelDistanceTop = (scrollCut > window.innerHeight / 3) &&
            (scrollCut < parseInt(window.innerHeight / 3) + listenerRange);;

        var cancelDistanceBottom = $("html").scrollTop() - topDistance > (window.innerHeight * 5 / 6);
        //动画开始
        if (displayDistanceBottom || displayDistanceTop) {
            var isChange = Boolean(parseInt($(".img1").css("opacity")));
            if (!isChange) {
                $(".img1").css({
                    'opacity': 1,
                    'right': '10%'
                });
                $(".p1").css('opacity','1');
                $(".p2").css('opacity','1');
                setTimeout(function () {
                    $(".img2").css({
                        'opacity': 1,
                        'left': '10%',
                    });
                }, 800);

            }

        }
        //动画结束
        else if (cancelDistanceTop || cancelDistanceBottom) {
            if (Boolean(parseInt($(".img1").css("opacity")))) {
                $(".p1").css('opacity','0');
                $(".p2").css('opacity','0');
                $(".img1").css({
                    'opacity': 0,
                    'right': '110%'
                });
                setTimeout(function () {
                    $(".img2").css({
                        'opacity': 0,
                        'left': '110%',
                    });
                }, 400);
            }
        }

    }
    );
})();

//代码结尾
});