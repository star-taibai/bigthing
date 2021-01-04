$(function() {
    $("#link_reg").on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    $("#link_login").on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    //校验规则

    // 提交表单监听事件
    $("#form_reg").on("submit", function(e) {
        //  阻止默认的提交行为
        e.preventDefault()
            // 发出ajax的post请求
        let data = {
            username: $('#form_reg[name=username]').val(),
            password: $("#form_reg[name=password]").val()
        }
        $.post('/api/reguser', data, function(res) {

        })
    })

    // 登陆接口
    $('#form_login').submit(function(e) {
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            data: $(this).serialize(),
            method: 'POST',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('登陆失败!')
                }
                layer.msg('登陆成功!')
                    // 讲登陆成功得到的token 字符串,保存在localStorage中
                localStorage.setItem('token', res.token)
                    // 跳转到后台
                location.href = '/index.html'
            }
        })
    })
})