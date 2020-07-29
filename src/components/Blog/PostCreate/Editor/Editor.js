import React from "react";
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

export default function Editor() {
    return (
            <FroalaEditorComponent tag='textarea'/>
        )
}
