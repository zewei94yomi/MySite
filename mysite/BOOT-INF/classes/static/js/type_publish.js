// 新增一个Type
function publishType(update) {
    // 获取数据
    var data={
        "type_id": $("[name='type_id']").val(),
        "type_name": $("[name='type_name']").val()
    }
    clearTypeMsgClass();
    // 非空验证
    if (data.type_name === "" || data.type_name === null) {
        $('#type-msg').addClass('negative');
        $('#type-msg-content').text("请输入分类名称！");
        return;
    }
    // 发送请求
    $.ajax({
        url : "/admin/type/input",
        contentType: "application/json",
        type: "post",
        data: JSON.stringify(data), // 这里必须进行转换
        success: function (response) {
            if (response.status === "200") {
                $('#type-msg').addClass('success');
                $('#type-msg-content').text(response.message);
                $("[name='type_name']").val("");
                if (update === true) {
                    // 更新分类下拉菜单
                    $("#type-menu").load("/admin/type/list");
                }
            } else {
                $('#type-msg').addClass('negative');
                $('#type-msg-content').text(response.message);
            }
            console.log(response);
        }
    })
}

// 打开modal前清空他的样式
function clearTypeMsgClass() {
    let $msg = $('#type-msg');
    $msg.removeClass('hidden');
    $msg.removeClass('success');
    $msg.removeClass('negative');
}


