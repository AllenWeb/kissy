﻿/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 8 00:39
*/
/**
 * italic command.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/italic/cmd", function (S, Editor, Cmd) {

    var ITALIC_STYLE = new Editor.Style({
        element:'em',
        overrides:[
            {
                element:'i'
            },
            {
                element:'span',
                attributes:{
                    style:'font-style: italic;'
                }
            }
        ]
    });
    return {
        init:function (editor) {
            Cmd.addButtonCmd(editor, "italic", ITALIC_STYLE);
        }
    }
}, {
    requires:['editor', '../font/cmd']
});
