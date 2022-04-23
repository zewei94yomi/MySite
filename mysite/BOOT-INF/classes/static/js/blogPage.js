
// 文章目录，附着在id="context"
$('.ui.sticky')
    .sticky({
        context: '#content-container'
    })
;

// 弹出目录（弃用）
// $('.toc.button').popup({
//     popup : $('.toc-container.popup'),
//     on : 'click',
//     position: 'left center'
// });

// 弹出工具栏中的二维码（弃用）
// $('.wechat').popup({
//     popup : $('.wechatQR.popup'),
//     on : 'click',
//     position: 'left center'
// });

// 工具栏中的目录初始化
tocbot.init({
    // Where to render the table of contents.
    tocSelector: '.toc',
    // Where to grab the headings to build the table of contents.
    contentSelector: '.js-toc-content',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h1, h2, h3, h4, h5, h6',
});

// 工具栏中的"至顶端"功能
function toTop() {
    $(window).scrollTo(0,500);
}

// 下滑：当在博客最顶端时不显示工具箱，当下滑时自动显示
var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function (direction) {
        if (direction === 'down') {
            $('#toolbar').show(100);
        } else {
            $('#toolbar').hide(500);
        }
        // console.log('Scrolled to waypoint!  ' + direction);
    }
});

// 点赞
function like(likes, url, blog_id) {
    $.ajax({
        url : url,
        contentType : "application/json",
        type : "get",
        data : "",
        success : function f(data) {
            console.log("点赞成功");
            // 点赞按钮变红
            $("#like-icon").removeClass('outline');
            $("#like-btn").addClass('red');
            $("#like-a").addClass('red');
            // 点赞数+1
            $("#like-a").text(likes+1);
            $("#like-view").text(likes+1);
            // 向浏览器缓存存入博客id
            console.log("当前博客id : " + blog_id);
            localStorage.setItem(blog_id, "like");
        }
    })
}

// 取消点赞
function cancelLike(likes, url, blog_id) {
    if (likes > 0) {
        $.ajax({
            url : url,
            contentType : "application/json",
            type : "get",
            data : "",
            success : function f(data) {
                console.log("取消点赞成功");
                // 点赞按钮变回普通
                $("#like-icon").addClass('outline');
                $("#like-btn").removeClass('red');
                $("#like-a").removeClass('red');
                // 点赞数-1
                $("#like-a").text(likes-1);
                $("#like-view").text(likes-1);
                // 向浏览器缓存删除博客id key
                console.log("当前博客id : " + blog_id);
                localStorage.removeItem(blog_id);
            }
        })
    }
}

// 设置点赞按钮的样式
function setLikeBtnStyle(blog_id) {
    if (localStorage.getItem(blog_id) === "like") {
        $("#like-icon").removeClass('outline');
        $("#like-btn").addClass('red');
        $("#like-a").addClass('red');
    } else {
        $("#like-icon").addClass('outline');
        $("#like-btn").removeClass('red');
        $("#like-a").removeClass('red');
    }
}

// 打开/收起评论
function setComment() {
    $('#comment-content-container').transition('slide down');
    console.log($('#comment-switch').text());
    if ($('#comment-switch').text() === '打开') {
        $('#comment-switch').text('收起');
    } else if ($('#comment-switch').text() === '收起') {
        $('#comment-switch').text('打开');
    }
}



