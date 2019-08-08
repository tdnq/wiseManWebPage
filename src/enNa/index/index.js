$(document).ready(function(){

    (function(){
        $("#explore-botton").click(function(){
            var element = $(".explore-content");
            var changeColorEle = $('.navbar');
            this.innerText=this.innerText==="探索"?"收起":"探索";
                if(element.css('display')==='block'){
                    changeColorEle.css('background-color','#f8f9fa');
                }else{
                    changeColorEle.css('background-color','#0058b7');
                }
            element.slideToggle();
        });
        $('#title-course').click(function(){
            console.log(1);
            $(this).addClass('active');
            $('#title-other').removeClass('active');
            $('#item-other').addClass('d-none');
            $('#item-course').removeClass('d-none');
        });
        $('#title-other').click(function(){
            $(this).addClass('active');
            $('#title-course').removeClass('active');
            $('#item-course').addClass('d-none');
            $('#item-other').removeClass('d-none');
        });
    })()

});