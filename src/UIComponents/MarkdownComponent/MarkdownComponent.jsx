import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownComponent({filepath}) {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(filepath)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filepath]);
  console.log(filepath);

  return (
    <section className="text-2xl">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </section>
  );
}

export default MarkdownComponent;