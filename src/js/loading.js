// $(document).ready(function(){
    //代码开始
    var targetEle = document.querySelector(".ani");
    var i=0;
    function start(){
        // 设置的时间间隔为 100s
        setInterval(function(){
            i += -290;
            var position = i+'px'+',center';
            targetEle.style.backgroundPosition = position;
        }, 400);

    }

    // 加载初始化方法
        window.onload(
            start()
            );

    //代码结束
// });