$(document).ready(function () {
    //消息-收起
    (function () {
        var message_content = $(".message-content");
        var message_control = $("#message-control");
        message_content.hide();
        message_control.click(function(){
            message_content.slideToggle();
        });
    })();
    //简历-上传文件
    (function () {
        var upload_img = $(".upload-img");
        upload_img.on('click', function (e) {
            var tigger_attr = '#' + e.target.alt;
            $(tigger_attr).trigger("click");
        });
    })();
});
