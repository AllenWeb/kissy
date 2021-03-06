/**
 * italic button.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/italic/index", function (S, Editor, ui,cmd) {
    return {
        init:function (editor) {
            cmd.init(editor);
            editor.addButton("italic",{
                cmdType:'italic',
                tooltip:"斜体 "
            }, ui.Button);
        }
    };
}, {
    requires:['editor', '../font/ui','./cmd']
});