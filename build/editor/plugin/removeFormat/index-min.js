/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 8 00:39
*/
KISSY.add("editor/plugin/removeFormat/index",function(d,b,c){return{init:function(a){c.init(a);a.addButton("removeFormat",{tooltip:"清除格式",listeners:{click:{fn:function(){a.execCommand("removeFormat")}}},mode:b.WYSIWYG_MODE})}}},{requires:["editor","./cmd","../button/"]});
