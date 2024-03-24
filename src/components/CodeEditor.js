import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = () => {
    return (
        <AceEditor
            mode="python"
            theme="monokai"
            fontSize={14}
            height="500px"
            value={"# Python Code Goes Here"}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                showLineNumbers: true,
                tabSize: 2,
            }}
        />
    );
};

export default CodeEditor;