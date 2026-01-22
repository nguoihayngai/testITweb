

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { algorithms } from './data/index.js';

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
      <pre style={styles.codeBlock}>
        <code>{snippets[lang]}</code>
      </pre>
    </div>
  );
};


const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return <p key={index}>{item.text}</p>;
        case 'heading':
          // FIX: Cast the dynamically created tag name to `keyof JSX.IntrinsicElements`
          // to inform TypeScript that it is a valid HTML tag name. This resolves the
          // "'children' does not exist on type 'IntrinsicAttributes'" error.
          const Heading = `h${item.level}` as keyof JSX.IntrinsicElements;
          return <Heading key={index}>{item.text}</Heading>;
        case 'code':
          return <CodeBlock key={index} snippets={item.snippets} />;
        default:
          return null;
      }
    });
  };

  const Modal = ({ item, onClose }) => {
    if (!item) return null;
    return (
      <div style={styles.modalOverlay} onClick={onClose}>
        <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
          <button style={styles.closeButton} onClick={onClose}>&times;</button>
          <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
             <div style={styles.courseIcon}>{item.icon}</div>
             <h3 style={styles.modalTitle}>{item.title}</h3>
          </div>
          <div>{renderContent(item.content)}</div>
        </div>
      </div>
    );
  };


  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 className="logo" style={styles.logo}>
            IT of Van Lang
        </h1>
        <nav className="mainNav">
          <a href="#hero" className="navLink" style={styles.navLink}>Trang Chủ</a>
        </nav>
      </header>

      <main style={styles.main}>
        <section id="hero" style={styles.hero}>
          <h2 className="heroTitle" style={styles.heroTitle}>VLOJ contest</h2>
          <p style={styles.heroSubtitle}>
            Thử sức mình với những câu hỏi thật hay!
          </p>
          <button className="ctaButton" style={styles.ctaButton}>Bắt Đầu Ngay</button>
        </section>

        <section style={styles.algorithmsSection}>
          <h3 style={styles.sectionTitle}>Hướng Dẫn Thuật Toán</h3>
          <div style={styles.coursesGrid}>
            {algorithms.map((algo, index) => (
              <div key={index} className="courseCard" style={{...styles.courseCard, cursor: 'pointer'}} onClick={() => setSelectedItem(algo)}>
                <div style={styles.courseIcon}>{algo.icon}</div>
                <h4 style={styles.courseTitle}>{algo.title}</h4>
                <p style={styles.iconCardDescription}>{algo.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} IT of Van Lang. All rights reserved.</p>
      </footer>
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
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
// FIX: Add a null check for the container to prevent the app from crashing if the 'root' element doesn't exist.
if (container) {
  const root = createRoot(container);
  root.render(
    <>
      <DynamicStyles />
      <App />
    </>
  );
}