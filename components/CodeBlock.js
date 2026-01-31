
import React, { useState } from 'react';

const languageNames = {
    cpp: 'C++',
    javascript: 'JavaScript',
    python: 'Python',
    java: 'Java',
};

const codeBlockStyle = {
    backgroundColor: '#f4f4f4',
    padding: '1rem',
    borderRadius: '8px',
    borderTopLeftRadius: '0',
    overflowX: 'auto',
    textAlign: 'left',
    fontSize: '0.9rem',
    margin: '1rem 0',
    border: '1px solid #ddd'
};

const CodeBlock = ({ snippets }) => {
  const [lang, setLang] = useState('cpp');

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

  return React.createElement('div', null,
    React.createElement('div', { style: { marginBottom: '-1px' } },
      Object.keys(snippets).map(language =>
        React.createElement('button', { key: language, style: buttonStyle(language), onClick: () => setLang(language) },
          languageNames[language]
        )
      )
    ),
    React.createElement('pre', { style: codeBlockStyle },
      React.createElement('code', null, snippets[lang])
    )
  );
};

export default CodeBlock;
