
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { algorithms } from './data/index.js';
import { basics } from './data/basics/index.js';

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

  return React.createElement('div', null,
    React.createElement('div', { style: { marginBottom: '-1px' } },
      Object.keys(snippets).map(language =>
        React.createElement('button', { key: language, style: buttonStyle(language), onClick: () => setLang(language) },
          languageNames[language]
        )
      )
    ),
    React.createElement('pre', { style: styles.codeBlock },
      React.createElement('code', null, snippets[lang])
    )
  );
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return React.createElement('p', { key: index }, item.text);
        case 'heading':
          const Heading = `h${item.level}`;
          return React.createElement(Heading, { key: index }, item.text);
        case 'code':
          return React.createElement(CodeBlock, { key: index, snippets: item.snippets });
        default:
          return null;
      }
    });
  };

  const Modal = ({ item, onClose }) => {
    if (!item) return null;
    return React.createElement('div', { style: styles.modalOverlay, onClick: onClose },
      React.createElement('div', { style: styles.modalContent, onClick: e => e.stopPropagation() },
        React.createElement('button', { style: styles.closeButton, onClick: onClose }, '×'),
        React.createElement('div', { style: { textAlign: 'center', marginBottom: '1.5rem' } },
          React.createElement('div', { style: styles.courseIcon }, item.icon),
          React.createElement('h3', { style: styles.modalTitle }, item.title)
        ),
        React.createElement('div', null, renderContent(item.content))
      )
    );
  };

  return React.createElement('div', { style: styles.container },
    React.createElement('header', { style: styles.header },
      React.createElement('h1', { className: "logo", style: styles.logo },
        'IT',
        React.createElement('span', { style: { fontSize: 'calc(2rem * 2 / 5)', fontWeight: 400, marginLeft: '2px' } }, 'of Van Lang')
      ),
      React.createElement('nav', { className: "mainNav" },
        React.createElement('a', { href: "#hero", className: "navLink", style: styles.navLink }, 'Trang Chủ'),
        React.createElement('a', { href: "#!", onClick: (e) => e.preventDefault(), className: "navLink", style: styles.navLink }, 'VLOJ')
      )
    ),
    React.createElement('main', { style: styles.main },
      React.createElement('section', { id: "hero", style: styles.hero },
        React.createElement('h2', { className: "heroTitle", style: styles.heroTitle }, 'VLOJ contest'),
        React.createElement('p', { style: styles.heroSubtitle }, 'Thử sức mình với những câu hỏi thật hay!'),
        React.createElement('button', { className: "ctaButton", style: styles.ctaButton }, 'Bắt Đầu Ngay')
      ),
       React.createElement('section', { style: styles.basicsSection },
        React.createElement('h3', { style: styles.sectionTitle }, 'Hướng Dẫn Cơ Bản'),
        React.createElement('div', { style: styles.coursesGrid },
          basics.map((item, index) =>
            React.createElement('div', { key: index, className: "courseCard", style: { ...styles.courseCard, cursor: 'pointer' }, onClick: () => setSelectedItem(item) },
              React.createElement('div', { style: styles.courseIcon }, item.icon),
              React.createElement('h4', { style: styles.courseTitle }, item.title),
              React.createElement('p', { style: styles.iconCardDescription }, item.description)
            )
          )
        )
      ),
      React.createElement('section', { style: styles.algorithmsSection },
        React.createElement('h3', { style: styles.sectionTitle }, 'Hướng Dẫn Thuật Toán'),
        React.createElement('div', { style: styles.coursesGrid },
          algorithms.map((algo, index) =>
            React.createElement('div', { key: index, className: "courseCard", style: { ...styles.courseCard, cursor: 'pointer' }, onClick: () => setSelectedItem(algo) },
              React.createElement('div', { style: styles.courseIcon }, algo.icon),
              React.createElement('h4', { style: styles.courseTitle }, algo.title),
              React.createElement('p', { style: styles.iconCardDescription }, algo.description)
            )
          )
        )
      )
    ),
    React.createElement('footer', { style: styles.footer },
      React.createElement('p', null, `© ${new Date().getFullYear()} IT of Van Lang. All rights reserved.`)
    ),
    React.createElement(Modal, { item: selectedItem, onClose: () => setSelectedItem(null) })
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '2rem',
    color: '#007aff',
    margin: 0,
    lineHeight: 1,
    display: 'flex',
    alignItems: 'baseline',
  },
  navLink: {
    margin: '0 1rem',
    textDecoration: 'none',
    color: '#555',
    fontWeight: 500,
    transition: 'color 0.3s',
  },
  main: {
    flex: '1',
  },
  hero: {
    textAlign: 'center',
    padding: '5rem 2rem',
    backgroundColor: '#f0f8ff',
    borderRadius: '12px',
    margin: '2rem',
  },
  heroTitle: {
    fontSize: '3rem',
    color: '#007aff',
    marginBottom: '1rem',
    fontWeight: 700,
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
  },
  ctaButton: {
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007aff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  basicsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#ffffff',
  },
  algorithmsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#333',
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  courseCard: { // Icon card
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    display: 'flex',
    flexDirection: 'column',
  },
  courseIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  courseTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#007aff',
  },
  iconCardDescription: {
    color: '#666',
    lineHeight: '1.6',
    flexGrow: 1,
  },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    color: '#777',
    borderTop: '1px solid #e9ecef',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
    opacity: 1,
    transition: 'opacity 0.3s ease-in-out',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '2rem 2.5rem',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '600px',
    position: 'relative',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  modalTitle: {
    fontSize: '2rem',
    color: '#007aff',
    margin: 0,
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1.5rem',
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#888',
  },
  codeBlock: {
    backgroundColor: '#f4f4f4',
    padding: '1rem',
    borderRadius: '8px',
    borderTopLeftRadius: '0',
    overflowX: 'auto',
    textAlign: 'left',
    fontSize: '0.9rem',
    margin: '0 0 1rem 0',
    border: '1px solid #ddd'
  }
};

const DynamicStyles = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      .navLink:hover {
        color: #007aff !important;
      }
      
      .ctaButton:hover {
        background-color: #0056b3 !important;
        transform: translateY(-2px);
      }
    
      .courseCard:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
      }
    
      @media (max-width: 768px) {
        .logo {
          font-size: 1.5rem !important;
        }
        .mainNav {
            display: none !important;
        }
        .heroTitle {
            font-size: 2.2rem !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  return null;
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    React.createElement(React.Fragment, null,
      React.createElement(DynamicStyles),
      React.createElement(App)
    )
  );
}
