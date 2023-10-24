import React, { useState } from "react";
import { marked } from "marked"; // Import the 'marked' function from the 'marked' library
import "./App.css";

marked.setOptions({
  breaks: true,
});

const initialMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// code block
function greet(name) {
  return 'Hello, ' + name + '!';
}
\`\`\`
- List item 1
- List item 2

> Blockquote

![Image](https://via.placeholder.com/150)
**Bold Text**
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleEditorChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <div className="editor-container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleEditorChange}
          placeholder="Enter your markdown here..."
        />
      </div>
      <div className="preview-container">
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;
