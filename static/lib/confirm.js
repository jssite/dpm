(function($) {
    $.fn.confirm = function(options){
        var defaults={
            title:'this is title',
            content:'this is content',
            icon:'error',
            showCancel:false,
            success:function(){},
            cancel:function(){}
        };
        var endOptions=$.extend(defaults,options);
        this.each(function(){
            var $this = $( this );
            var $render = $('<div class="window_dialog"><div class="dialog"></div><div class="confirm"><div class="confirm_head"><span class="confirm_icon '+ endOptions.icon + '"></span><em class="confirm_tit">' + endOptions.title + '</em></div><div class="confirm_con">' + endOptions.content + '</div><div class="confirm_footer"><a href="javascript:;" class="confirm_btn cancel">clear</a><a href="javascript:;" class="confirm_btn submit">confirm</a></div></div></div>');
            var cancel = $render.find('.cancel');
            var success = $render.find('.submit');
            if( $this.find('.window_dialog').length ){
                $this.find('.window_dialog').remove();
            }
            $this.append($render);
            if( !endOptions.showCancel ){
                $this.find('.cancel').remove()
            }
            success.on('click',function(){
                if( endOptions.success ) endOptions.success()
            });
            cancel.on('click',function(){
                if( $('.window_dialog').length ){
                    $('.window_dialog').remove()
                }
            })
            return this;
        })
    }
})(jQuery);