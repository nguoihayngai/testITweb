
import React, { useState } from 'react';

const codeBlockStyle = {
  backgroundColor: '#f4f4f4',
  padding: '1rem',
  borderRadius: '8px',
  borderTopLeftRadius: '0',
  overflowX: 'auto',
  textAlign: 'left',
  fontSize: '0.9rem',
  margin: '0 0 1rem 0',
  border: '1px solid #ddd'
};

const CodeBlock = ({ snippets }) => {
  const [lang, setLang] = useState('cpp');

  const languageNames = {
    cpp: 'C++',
    javascript: 'JavaScript',
    python: 'Python',
    java: 'Java',
  };

  const buttonStyle = (language) => ({
    padding: '0.3rem 0.8rem',
    border: '1px solid #ddd',
    backgroundColor: lang === language ? '#007aff' : '#f4f4f4',
    color: lang === language ? '#fff' : '#333',
    cursor: 'pointer',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    marginRight: '4px',
    fontFamily: 'inherit',
    fontSize: '0.85rem'
  });

  return (
    <div>
      <div style={{ marginBottom: '-1px' }}>
        {Object.keys(snippets).map(language => (
          <button key={language} style={buttonStyle(language)} onClick={() => setLang(language)}>
            {languageNames[language]}
          </button>
        ))}
      </div>
      <pre style={codeBlockStyle}>
        <code>{snippets[lang]}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
