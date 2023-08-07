import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const App = () => {

  const [markdown, setMarkdown] = useState("## Markdown Preview");
  return (
    <main>
      <section className="markdown">
      <textarea className="input-area" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
      <article className="result-area">
        <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
        </section>
    </main>
  )
}

export default App
