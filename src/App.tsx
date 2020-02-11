import React, { useState } from "react";
import "./App.css";
import MonacoEditor from "react-monaco-editor";

const App = () => {
	const [code, setCode] = useState('')

	// methods
	const codeChange = (code: string) => {
		console.log(code)
	}

    return (
        <div className="App">
            <MonacoEditor
                width="600"
                height="800"
                language="javascript"
                theme="vs-dark"
                value={code}
				onChange={codeChange}
				options={{
					selectOnLineNumbers: true
				}}
            />
        </div>
    );
};

export default App;
