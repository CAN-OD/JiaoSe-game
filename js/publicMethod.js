/**
 * Created by SF-1888 on 2016/9/16.
 */
$(function(){
    // 动态加在css 与 js 文件方法
    $.extend({
        includePath: '',
        include: function(file)
        {
            var files = typeof file == "string" ? [file] : file;
            var styleTag = "";
            for (var i = 0; i < files.length; i++)
            {
                var name = files[i].replace(/^s|$/g, "");
                var att = name.split('.');
                var ext = att[att.length - 1].toLowerCase();
                var isCSS = ext === "js";
                var tag = !isCSS ? '<link />' : '<script></script>';
                var attrType = !isCSS ? 'text/css' : 'text/javascript';
                var attrRl= !isCSS ? 'stylesheet' : 'javascript';
                styleTag = $(tag);
                styleTag.attr("type", attrType);
                if(!isCSS){
                    styleTag.attr({
                        "rel": attrRl,
                        "href": $.includePath + name
                    });
                }else{
                    styleTag.attr({
                        "language": attrRl,
                        "src": $.includePath + name
                    });
                }
                $("head").append(styleTag);
            }
        }
    });

});