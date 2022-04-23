// 删除 - 确认框
function confirmDelete(url) {
    $(".ui.modal")
        .modal({
            onShow: function () {
            },
            onVisible: function () {
            },
            onHide: function () {
            },
            onHidden: function () {
            },
            onApprove:function () { //单击确认按钮
                console.log("确认");
                window.location.href=url;
            },
            onDeny:function () {  //单击取消按钮
                console.log("拒绝");
            }
        })
        .modal("show");
    return false;
}

// 折叠菜单栏：支持移动端，网页以移动端显示时，自动折叠菜单栏，成为一个点击打开的菜单
$('.menu.toggle').click(function () {
    $('.m-item').toggleClass('m-mobile-hide');
});

// 下拉
$('.ui.dropdown').dropdown({
    on : 'hover'
});

// 消息提示关闭初始化
$('.message .close')
    .on('click', function () {
        $(this)
            .closest('.message')
            .transition('fade');
    });

$('.clickPopup').popup({
    on : 'click'
})


// 判断图片url能否访问 404
function isImgUrl(imgurl) {
    return new Promise(function(resolve, reject) {
        var ImgObj = new Image(); //判断图片是否存在
        ImgObj.src = imgurl;
        ImgObj.onload = function(res) {
            resolve(res);
        }
        ImgObj.onerror = function(err) {
            reject(err);
        }
    });
}
