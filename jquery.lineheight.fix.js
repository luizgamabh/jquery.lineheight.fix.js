/*
 * Small fix for browsers that always rounds down line-height measures.
 * @Author: Luiz Gustavo Freire Gama => http://github.com/luizgamabh
 */

function isFloat(n) {
    return !isNaN(n) && parseFloat(n) != parseInt(n, 10);
}

jQuery.fn.lineHeightFix = function() {
    return this.each(function(){
        var lh = jQuery(this).css("line-height").replace(/\s?px/,'');
        if (isFloat(lh)) jQuery(this).css("line-height",Math.round(lh)+"px");
    });
};

jQuery(document).ready(function(){
    jQuery("*").lineHeightFix();
});