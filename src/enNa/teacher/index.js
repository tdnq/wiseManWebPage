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

    (function(){
        var edit_btn = $(".btn-edit-course");
        edit_btn.on("click",function(e){
            var replaceEle = '#'+$(this).attr("num");
            $(replaceEle).hide();
            var addEle = `<div class="edit-course px-4 py-3">
            <div class="row">
                <div class="col-12 mt-3">
                        <label for="name">课程名称:</label>
                        <input type="text" class="form-control w-50" id="name" />
                    </div>
                <div class="col-12 mt-3">
                        <label for="subject">所属学科:</label>
                        <input type="text" class="form-control w-50" id="subject" />
                    </div>
                <div class="col-12 mt-3">
                        <label for="introdection">课程描述:</label>
                        <textarea class="form-control w-75" id="introdection"  rows="3"></textarea>
                    </div>
                <div class="col-12 mt-3">
                        <label for="name">课程封面:</label>
                        <img src="../fonts/resource.png" alt="cover" width="35" title="上传封面">
                    </div>
                <div class="mt-3 text-center d-block">
                    <button class="btn btn-secondary mr-2">添加单元</button>
                    <button class="btn btn-primary">编辑完成</button>
                </div>
            </div>
        </div>`
        $(replaceEle).before(addEle);
        });
    })();
});
