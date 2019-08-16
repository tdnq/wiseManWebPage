$(document).ready(function () {
    // 搜索框


    //登录注册
    (function(){
        // 学生
        var studentRegister = $("#studentRegister");
        var student_singup = $(".student-signup");
        var student_login = $(".student-login");
        student_singup.css("display", "none");
        studentRegister.click(function () {
            student_login.hide();
            student_singup.show();
        });
        //老师
        var teacherRegister = $("#teacherRegister");
        var teacher_singup = $(".teacher-signup");
        var teacher_login = $(".teacher-login");
        teacher_singup.css("display", "none");
        teacherRegister.click(function () {
            teacher_login.hide();
            teacher_singup.show();
        });
        // 企业
        var enterpriseRegister = $("#enterpriseRegister");
        var enterprise_singup = $(".enterprise-signup");
        var enterprise_login = $(".enterprise-login");
        enterprise_singup.css("display", "none");
        enterpriseRegister.click(function () {
            enterprise_login.hide();
            enterprise_singup.show();
        });

        $('.toggle-login').click(function(e){
            console.log($("#btn-login"))
            $("#btn-login").trigger('click');
           
        });
    })();

});