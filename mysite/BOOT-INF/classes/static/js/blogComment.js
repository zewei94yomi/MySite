// 加载评论
function loadComment(url) {
    $.ajax({
        url: url,
        contentType: "application/json",
        type: "get",
        data: "",
        success: function f(data) {
            $("#comment-container").html(data);
            bindPopup();
            console.log("成功获取评论，并为评论绑定popup()");
            deactivateLoader();
        }
    });
    // 使用load和回调函数，会以post方式发送请求，而这里我们接受的是get请求，id放在url里
    // $("#comment-container").load(/*[[@{/comments/{id}(id=${blog.blog_id})}]]*/"comments/6");
}

// 获取最新的评论数，并且更新
function getCommentNum(url) {
    $.ajax({
        url : url,
        contentType : "application/json",
        type : "get",
        data : "",
        success : function f(data) {
            $(".comment-num").html(data);
            console.log("最新评论总数：" + data);
        }
    })
}

//评论表单验证：
//  1. 评论内容不能为空
//  2. 昵称不能为空
//  3. 邮箱不能为空，格式须为邮箱格式
//  4. 验证条（一个隐藏的input）不能为空 ：<input type="text" style="display:none" name="slideValidation" id="slideValidation"/>
$('.ui.comment.form').form({
    fields: {
        content: {
            identifier: 'content',
            rules: [{
                type: 'empty',
                prompt: '请输入评论内容'
            }
            ]
        },
        nickname: {
            identifier: 'nickname',
            rules: [{
                type: 'empty',
                prompt: '请输入你的昵称'
            }]
        },
        email: {
            identifier: 'email',
            rules: [{
                type: 'email',
                prompt: '请填写正确的邮箱地址'
            }]
        },
        slideValidation: {
            identifier: 'slideValidation',
            rules: [{
                type: 'empty',
                prompt: '请滑动验证条'
            }]
        }
    }
});

// 为'.popupInfo'类元素绑定popup事件（主要是comment相关信息）
// 当用户点击评论中的昵称时自动跳出
function bindPopup() {
    $(".popupInfo").popup({
        on : 'click'
    });
}

// 取消"加载中"的loader，用于在评论加载完成后
function deactivateLoader() {
    $('#comment-loader').removeClass('active');
}

// 用户在评论区点击回复后进行的操作：获取点击评论的id（用于提交给后端），获取点击评论的用户的nickname（用于在评论区展示"@xxx"）
function reply(obj) {
    var commentId = $(obj).data('commentid');
    var commentNickname = $(obj).data('commentnickname');
    $("[name='content']").attr("placeholder", "@" + commentNickname).focus();
    $("[name='parent_id']").val(commentId); // 如果不点击回复，直接评论，这里的'parent_id' = -1
    $("[name='root_parent_id']").val(rootParentId); // 如果不点击回复，直接评论，这里的'root_parent_id' = -1
    $(window).scrollTo($('#comment-form'),500); // 跳转到评论输入框
}

// 验证并提交评论
function validateAndPostComment(url) {
    var isValid = $('.ui.form').form('validate form');
    if (isValid) {
        console.log('评论校验成功');
        postData(url);
    } else {
        console.log('评论校验失败');
    }
}

// 提交评论
// 因为没有使用form，而是使用jquery的方式(Ajax)提交数据，所以这里必须手动加载数据值
function postData(url) {
    $("#comment-container").load(url,{
        "parent_id" : $("[name='parent_id']").val(),
        "blog_id" : $("[name='blog_id']").val(),
        "nickname": $("[name='nickname']").val(),
        "email"   : $("[name='email']").val(),
        "content" : $("[name='content']").val()
    },function (responseTxt, statusTxt, xhr) {
        // 回调函数
        // $(window).scrollTo($('#comment-container'),500);
        deactivateLoader();
        bindPopup();
        clearContent();
        slideResetting();
        updateCommentNum();
    });
}

// 清空按钮的点击事件：清空@等信息
function clearContent() {
    $("[name='parent_id']").val(-1);
    $("[name='content']").val('');
    $("[name='content']").attr("placeholder", "请输入评论信息...");
}

// 删除评论
function modalDeleteComment(url) {
    // 删除评论
    $(".ui.modal")
        .modal({
            onApprove:function () { //单击确认按钮
                console.log("确认删除评论");
                $('#comment-container').load(url, function(response,status){
                    deactivateLoader();
                    updateCommentNum();
                    bindPopup();
                });
            },
            onDeny:function () {  //单击取消按钮
                console.log("拒绝删除评论");
            }
        })
        .modal("show");
}
