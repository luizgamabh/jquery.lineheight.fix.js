/*
 * Small fix for browsers that always rounds down line-height measures.
 * @Author: Luiz Gustavo Freire Gama => http://github.com/luizgamabh
 */

jQuery.fn.lineHeightFix = function() {
    return this.each(function(){
        var lh = jQuery(this).css("line-height").replace(/\s?px/,'');
        if (!isNaN(lh)) jQuery(this).css("line-height",Math.round(lh)+"px");
    });
};

jQuery(document).ready(function(){
    jQuery("*").lineHeightFix();
});