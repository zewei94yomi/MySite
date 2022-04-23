// 新增一个Tag
function publishTag(update) {
    // 获取数据
    var data={
        "tag_id": $("[name='tag_id']").val(),
        "tag_name": $("[name='tag_name']").val()
    }
    clearTagMsgClass();
    // 非空验证
    if (data.tag_name === "" || data.tag_name === null) {
        $('#tag-msg').addClass('negative');
        $('#tag-msg-content').text("请输入标签名称！");
        return;
    }
    // 发送请求
    $.ajax({
        url : "/admin/tag/input",
        contentType: "application/json",
        type: "post",
        data: JSON.stringify(data),
        success: function (response) {
            if (response.status === "200") {
                $('#tag-msg').addClass('success');
                $('#tag-msg-content').text(response.message);
                $("[name='tag_name']").val("");
                if (update === true) {
                    // 更新分类下拉菜单
                    $("#tag-menu").load("/admin/tag/list");
                }
            } else {
                $('#tag-msg').addClass('negative');
                $('#tag-msg-content').text(response.message);
            }
            console.log(response);
        }
    })
}

// 打开modal前清空他的样式
function clearTagMsgClass() {
    let $msg = $('#tag-msg');
    $msg.removeClass('hidden');
    $msg.removeClass('success');
    $msg.removeClass('negative');
}
