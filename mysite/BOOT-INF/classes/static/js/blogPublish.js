// 初始化markdown编辑器
var contentEditor;
$(function() {
    contentEditor = editormd("md-content", {
        width   : "100%",
        height  : 640,
        syncScrolling : "single",
        path    : "/lib/editormd/lib/"
    });
});

// 保存草稿，无需选择博客的分类
function save() {
    $('[name="published"]').val(false);
    // 表单验证
    $('.ui.form').form({
        fields : {
            title : {
                identifier: 'title',
                rules: [{
                    type : 'empty',
                    prompt: '标题：请输入博客标题'
                },
                    {
                        type : 'maxLength[30]',
                        prompt: '标题：长度不能超过30个字符'
                    }
                ]
            },
            content : {
                identifier: 'content',
                rules: [{
                    type : 'empty',
                    prompt: '内容：请输入博客内容'
                }]
            },
            description : {
                identifier: 'description',
                rules: [{
                    type : 'empty',
                    prompt: '描述：请输入博客描述'
                },
                    {
                        type : 'maxLength[100]',
                        prompt: '描述：长度不能超过100个字符'
                    }]
            }
        }
    });
    $('#blog_form').submit();
}

// 发布博客，必须选择博客的分类
function publish() {
    $('[name="published"]').val(true);
    // 表单验证
    $('.ui.form').form({
        fields : {
            title : {
                identifier: 'title',
                rules: [{
                    type : 'empty',
                    prompt: '标题：请输入博客标题'
                },
                    {
                        type : 'maxLength[40]',
                        prompt: '标题：长度不能超过40个字符'
                    }
                ]
            },
            type_id : {
                identifier: 'type.type_id',
                rules: [{
                    type : 'empty',
                    prompt: '分类：请选择博客分类'
                }]
            },
            content : {
                identifier: 'content',
                rules: [{
                    type : 'empty',
                    prompt: '内容：请输入博客内容'
                }]
            },
            description : {
                identifier: 'description',
                rules: [{
                    type : 'empty',
                    prompt: '描述：请输入博客描述'
                },
                    {
                        type : 'maxLength[120]',
                        prompt: '描述：长度不能超过120个字符'
                    }]
            }
        }
    });
    $('#blog_form').submit();
}

// 验证博客发布页面的首图是否合法，并显示图片
function previewPicture() {
    let url = $('#first-picture').val();
    if (url != null && url !== "") {
        isImgUrl(url).then(()=>{
            // success
            console.log("首图URL : " + url);
            openPreview();
            $('#img-promt').css('display', 'none');
            $('#first-picture-img').attr("src", $('#first-picture').val());
        }).catch(()=>{
            // fail
            console.log("首图URL : " + url + "不存在");
            openPreview();
            $('#img-promt').css('display', '');
            $('#first-picture-img').attr("src", '');
        })
    }
}

// 关闭首图预览
function closePreview() {
    $('#preview-container').css('display', 'none');
}

// 打开首图预览
function openPreview() {
    $('#preview-container').css('display', '');
}

// 新增Type的modal
function openTypeModal() {
    $('.ui.newType.modal')
        .modal('show')
    ;
    initTypeModalMsg()
}

// 新增Tag的modal
function openTagModal() {
    $('.ui.newTag.modal')
        .modal('show')
    ;
    initTagModalMsg();
}

// 初始化Type的modal
function initTypeModalMsg() {
    $('#type-msg').addClass("hidden");
    $('#type-msg').removeClass("success");
    $('#type-msg').removeClass("negative");
}

// 初始化Tag的modal
function initTagModalMsg() {
    $('#tag-msg').addClass("hidden");
    $('#tag-msg').removeClass("success");
    $('#tag-msg').removeClass("negative");
}