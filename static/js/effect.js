$(function(){
    funResizeHeight();
    $(window).on('resize',funResizeHeight);
    $('.subscribe_number').on('blur',function(){
        var copyChind = '<li><div class="subscribe_item"><input type="text" class="input" placeholder="Name"></div><div class="subscribe_item"><input type="text" class="input" placeholder="Passport Number"></div></li>';
        $('.subscribe_ul').append(copyChind);
    });
    $('.login_submit').on('click',function(){
        $('body').confirm({
            title: 'Mailbox duplicate',
            icon: 'error',   //success|error|warn
            content: 'Sorry. This login email already exists. Please try another.',        //内容
            success:function(){
                $('.window_dialog').remove()
            }
        });
    });
    $('#cancel_order').on('click',function(){
        $('body').confirm({
            title: 'Mailbox duplicate',
            icon: 'warn',   //success|error|warn
            showCancel: true,
            content: 'Sorry. This login email already exists. Please try another.',        //内容
            success:function(){
                $('.window_dialog').remove()
            }
        });
    })
    
})

function funResizeHeight(){
    var initHeight = 0;
    var oContent = $('.content');
    var oConWrap = $('.con_height');
    var oWrapHeight = oConWrap.outerHeight();
    var oHeadHeight = $('.header').outerHeight();
    var oFootHeight = $('.footer').outerHeight();
    var oWinHeight = $(window).outerHeight() - oFootHeight - oHeadHeight;
    var marginTop = (oWinHeight - oWrapHeight)/2;

    if( oWinHeight >= oWrapHeight ){
        initHeight = oWinHeight + 30
    } else {
        initHeight = oWrapHeight + 80;
    }
    oContent.css({
        'height': initHeight,
        'overflow':'auto'
    });
    oConWrap.css({
        'margin-top': marginTop<=0?40:marginTop
    })
}