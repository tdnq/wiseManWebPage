$(document).ready(function() {
    
    var toggleControl = $("#toggle-control");
    var shortLine = $(".shortLine");
    toggleControl.click(function(){
        var siderControl = $("#sider-control");
        var isSlide = parseInt(siderControl.css("left"));
        if(isSlide){
            console.log(isSlide);
            siderControl.animate({
                left: '0px'
            },500,function(){
                console.log('yes');
                shortLine.css("transform","translate(0.5rem,0.8rem) rotate(90deg)");
            });
        }else{
            siderControl.animate({
                left: '-220px'
            },500,function(){
                shortLine.css("transform","translate(0.5rem,0.5rem) rotate(0deg)");
            });
        }
    });
});