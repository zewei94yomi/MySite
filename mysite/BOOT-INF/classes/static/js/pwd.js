// 修改密码表单验证
$('.ui.pwd.form').form({
    fields : {
        oldPwd : {
            identifier: 'oldPwd',
            rules: [{
                type : 'empty',
                prompt: '请输入原密码'
            }]
        },
        newPwd : {
            identifier: 'newPwd',
            rules: [{
                type : 'empty',
                prompt: '请输入新密码'
            },
                {
                    type : 'different[oldPwd]',
                    prompt: '新密码不能与旧密码相同'
                }]
        },
        confirmPwd : {
            identifier: 'confirmPwd',
            rules: [{
                type : 'match[newPwd]',
                prompt: '输入新密码不一致'
                }]
        }
    },
    inline : true,
    on     : 'blur'
});

