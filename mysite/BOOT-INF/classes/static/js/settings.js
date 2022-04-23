// 验证头像图片是否合法
function previewAvatarPicture() {
    let url = $('#avatar').val();
    if (url != null && url !== "") {
        openAvatarPreview();
        isImgUrl(url).then(()=>{
            // success
            console.log("头像URL : " + url);
            $('#avatar-img-prompt').css('display', 'none');
            $('#avatar-img').attr("src", $('#avatar').val());
        }).catch(()=>{
            // fail
            console.log("头像URL : " + url + "不存在");
            $('#avatar-img-prompt').css('display', '');
            $('#avatar-img').attr("src", '');
        })
    }
}

// 验证背景图片是否合法
function previewBackgroundPicture() {
    let url = $('#aboutMePicture').val();
    if (url != null && url !== "") {
        openBackgroundPreview();
        isImgUrl(url).then(()=>{
            // success
            console.log("背景URL : " + url);
            $('#background-img-prompt').css('display', 'none');
            $('#background-img').attr("src", $('#aboutMePicture').val());
        }).catch(()=>{
            // fail
            console.log("背景URL : " + url + "不存在");
            $('#background-img-prompt').css('display', '');
            $('#background-img').attr("src", '');
        })
    }
}

// 验证后台首图是否合法
function previewAdminIndexPicture() {
    let url = $('#adminIndexPicture').val();
    if (url != null && url !== "") {
        openAdminIndexPreview();
        isImgUrl(url).then(()=>{
            // success
            console.log("后台首图URL : " + url);
            $('#adminIndex-img-prompt').css('display', 'none');
            $('#adminIndex-img').attr("src", $('#adminIndexPicture').val());
        }).catch(()=>{
            // fail
            console.log("后台首图URL : " + url + "不存在");
            $('#adminIndex-img-prompt').css('display', '');
            $('#adminIndex-img').attr("src", '');
        })
    }
}

// 打开头像预览
function openAvatarPreview() {
    $('#avatar-preview-container').css('display', '');
}

// 打开背景图预览
function openBackgroundPreview() {
    $('#background-preview-container').css('display', '');
}

// 打开后台首图预览
function openAdminIndexPreview() {
    $('#adminIndex-preview-container').css('display', '');
}

// 关闭头像预览
function closeAvatarPreview() {
    $('#avatar-preview-container').css('display', 'none');
}

// 关闭背景图预览
function closeBackgroundPreview() {
    $('#background-preview-container').css('display', 'none');
}

// 关闭后台首图预览
function closeAdminIndexPreview() {
    $('#adminIndex-preview-container').css('display', 'none');
}

// 验证表单
$('.ui.settings.form').form({
    fields: {
        username: {
            identifier: 'username',
            rules: [{
                type: 'empty',
                prompt: '请输入你的用户名'
            }
            ]
        },
        nickname: {
            identifier: 'nickname',
            rules: [{
                type: 'empty',
                prompt: '请输入你的昵称'
            },
                {
                    type: 'maxLength[15]',
                    prompt: '昵称不能超过15个字符；友情提示：昵称过长将影响博客标签的显示'
                }]
        },
        avatar: {
            identifier: 'avatar',
            rules: [{
                type: 'url',
                prompt: '请输入你的头像的URL'
            }]
        },
        aboutMePicture: {
            identifier: 'aboutMePicture',
            rules: [{
                type: 'url',
                prompt: '请输入"关于我"的背景图的URL'
            }]
        },
        email: {
            identifier: 'email',
            rules: [{
                type: 'email',
                prompt: '请输入正确的邮箱'
            }]
        },
        aboutMe: {
            identifier: 'aboutMe',
            rules: [{
                type: 'maxLength[255]',
                prompt: '关于我的介绍不能多余255个字符'
            },
                {
                    type: 'empty',
                    prompt: '请输入个人简介'
                }]
        },
        aboutBlog: {
            identifier: 'aboutBlog',
            rules: [{
                type: 'maxLength[255]',
                prompt: '关于博客的介绍不能多余255个字符'
            },
                {
                    type: 'empty',
                    prompt: '请输入博客简介'
                }]
        },
    },
    inline : true,
    on     : 'blur'
});