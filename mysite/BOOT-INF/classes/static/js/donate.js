// 微信：弹出支付二维码（赞赏功能）
$('.wechatPay').popup({
    popup : $('.wechatPayQR.popup'),
    on : 'click',
    position: 'bottom center'
});

// 支付宝：弹出支付二维码（赞赏功能）
$('.alipayPay').popup({
    popup : $('.alipayPayQR.popup'),
    on : 'click',
    position: 'bottom center'
});