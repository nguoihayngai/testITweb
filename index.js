
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { algorithms } from './data/index.js';
import { basics } from './data/basics/index.js';
import { math } from './data/math/index.js';
import { contests } from './data/contests/index.js';

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
  const [view, setView] = useState({ page: 'home', topic: null });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return React.createElement('p', { key: index, style: styles.paragraph }, item.text.split('\n').map((line, i) => React.createElement(React.Fragment, { key: i }, line, React.createElement('br'))));
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
  
  const navItems = [
    { id: 'home', title: 'Trang Chủ' },
    { id: 'basics', title: 'Cơ Bản' },
    { id: 'math', title: 'Toán Học' },
    { id: 'algorithms', title: 'Thuật Toán' },
    { id: 'contests', title: 'Bài Toán' },
    { id: 'vloj', title: 'VLOJ' },
  ];

  const handleNavClick = (pageId) => {
    setView({ page: pageId, topic: null });
    setIsMobileMenuOpen(false);
  };

  const pageData = {
    basics: { title: 'Hướng Dẫn Cơ Bản', items: basics, style: styles.basicsSection },
    math: { title: 'Toán Học Thi Đấu', items: math, style: styles.mathSection },
    algorithms: { title: 'Hướng Dẫn Thuật Toán', items: algorithms, style: styles.algorithmsSection },
    contests: { title: 'Giải Các Bài Toán Kinh Điển', items: contests, style: styles.algorithmsSection },
  };

  const CurrentPageContent = () => {
    if (view.page === 'home' || view.page === 'vloj') {
      const homePageCategories = [
        {
          id: 'basics',
          title: 'Cơ Bản',
          description: 'Nền tảng vững chắc với kiểu dữ liệu, luồng điều khiển, và các khái niệm cốt lõi.',
          icon: '🚀',
        },
        {
          id: 'math',
          title: 'Toán Học',
          description: 'Lý thuyết số, tổ hợp, và các công cụ toán học cần thiết cho lập trình thi đấu.',
          icon: '♾️',
        },
        {
          id: 'algorithms',
          title: 'Thuật Toán',
          description: 'Sắp xếp, tìm kiếm, quy hoạch động, đồ thị, và các thuật toán nâng cao.',
          icon: '🧩',
        }
      ];

      return React.createElement(React.Fragment, null,
        React.createElement('section', { id: "hero", className: "hero", style: styles.hero },
          React.createElement('h2', { className: "heroTitle", style: styles.heroTitle }, 'VLOJ contest'),
          React.createElement('p', { style: styles.heroSubtitle }, 'Thử sức mình với những câu hỏi thật hay!'),
          React.createElement('div', { style: styles.ctaButtonContainer },
            React.createElement('button', { className: "ctaButton", style: styles.ctaButton, onClick: () => setView({ page: 'contests', topic: null }) }, 'Bắt Đầu Ngay'),
            React.createElement('button', {
              className: "secondaryCtaButton",
              style: styles.secondaryCtaButton,
              onClick: () => {
                document.getElementById('explore-topics').scrollIntoView({ behavior: 'smooth' });
              }
            }, 'Khám Phá Chủ Đề')
          )
        ),
        React.createElement('section', { id: 'explore-topics', className: 'contentSection', style: styles.basicsSection },
          React.createElement('h3', { className: "sectionTitle", style: styles.sectionTitle }, 'Khám Phá Các Chủ Đề'),
          React.createElement('div', { className: "coursesGrid", style: styles.coursesGrid },
            homePageCategories.map((item, index) =>
              React.createElement('div', { 
                key: index, 
                className: "courseCard", 
                style: { ...styles.courseCard, cursor: 'pointer' }, 
                onClick: () => setView({ page: item.id, topic: null }) 
              },
                React.createElement('div', { style: styles.courseIcon }, item.icon),
                React.createElement('h4', { style: styles.courseTitle }, item.title),
                React.createElement('p', { style: styles.iconCardDescription }, item.description)
              )
            )
          ),
          React.createElement('div', { style: styles.extraCtaContainer },
            React.createElement('button', {
              className: "ctaButton",
              style: styles.ctaButton,
              onClick: () => setView({ page: 'contests', topic: null })
            }, 'Tới Trang Bài Toán')
          )
        )
      );
    }
    
    const currentPageInfo = pageData[view.page];
    if (!currentPageInfo) return null;

    if (view.topic) {
      return React.createElement('section', { style: { ...currentPageInfo.style, ...styles.detailViewContainer } },
        React.createElement('button', { className: "backButton", style: styles.backButton, onClick: () => setView({ ...view, topic: null }) }, '‹ Quay Lại'),
        React.createElement('div', { style: { textAlign: 'center', marginBottom: '1.5rem' } },
          React.createElement('div', { style: styles.courseIcon }, view.topic.icon),
          React.createElement('h3', { style: styles.modalTitle }, view.topic.title)
        ),
        React.createElement('div', null, renderContent(view.topic.content))
      );
    } else {
      return React.createElement('section', { className: 'contentSection', style: currentPageInfo.style },
        React.createElement('h3', { className: "sectionTitle", style: styles.sectionTitle }, currentPageInfo.title),
        React.createElement('div', { className: "coursesGrid", style: styles.coursesGrid },
          currentPageInfo.items.map((item, index) =>
            React.createElement('div', { key: index, className: "courseCard", style: { ...styles.courseCard, cursor: 'pointer' }, onClick: () => setView({ ...view, topic: item }) },
              React.createElement('div', { style: styles.courseIcon }, item.icon),
              React.createElement('h4', { style: styles.courseTitle }, item.title),
              React.createElement('p', { style: styles.iconCardDescription }, item.description)
            )
          )
        )
      );
    }
  };

  const MobileMenu = () => {
    if (!isMobileMenuOpen) return null;
    return React.createElement('div', { style: styles.mobileNavOverlay },
      React.createElement('button', { style: styles.mobileNavClose, onClick: () => setIsMobileMenuOpen(false) }, '×'),
      React.createElement('nav', { style: styles.mobileNav },
        navItems.map(item =>
          React.createElement('a', {
            key: item.id,
            href: "#!",
            onClick: (e) => { e.preventDefault(); handleNavClick(item.id); },
            style: styles.mobileNavLink
          }, item.title)
        )
      )
    );
  };

  return React.createElement('div', { style: styles.container },
    React.createElement(MobileMenu),
    React.createElement('header', { style: styles.header },
      React.createElement('h1', {
        className: "logo",
        style: styles.logo,
        onClick: () => setView({ page: 'home', topic: null })
      },
        'IT',
        React.createElement('span', { style: { fontSize: 'calc(2rem * 2 / 5)', fontWeight: 400, marginLeft: '2px' } }, 'of Van Lang')
      ),
      React.createElement('nav', { className: "mainNav" },
        navItems.map(item => 
          React.createElement('a', { 
            key: item.id,
            href: "#!", 
            onClick: (e) => { e.preventDefault(); handleNavClick(item.id); }, 
            className: "navLink", 
            style: view.page === item.id ? styles.navLinkActive : styles.navLink
          }, item.title)
        )
      ),
      React.createElement('button', { className: 'hamburgerMenu', style: styles.hamburgerMenu, onClick: () => setIsMobileMenuOpen(true) },
        React.createElement('span', { style: styles.hamburgerBar }),
        React.createElement('span', { style: styles.hamburgerBar }),
        React.createElement('span', { style: styles.hamburgerBar })
      )
    ),
    React.createElement('main', { style: styles.main },
      React.createElement(CurrentPageContent)
    ),
    React.createElement('footer', { style: styles.footer },
      React.createElement('p', null, `© ${new Date().getFullYear()} IT of Van Lang. All rights reserved.`)
    )
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
    cursor: 'pointer',
  },
  navLink: {
    margin: '0 1rem',
    textDecoration: 'none',
    color: '#555',
    fontWeight: 500,
    transition: 'color 0.3s',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid transparent',
  },
   navLinkActive: {
    margin: '0 1rem',
    textDecoration: 'none',
    color: '#007aff',
    fontWeight: 600,
    transition: 'color 0.3s, border-bottom 0.3s',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #007aff',
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
  ctaButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  secondaryCtaButton: {
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    color: '#007aff',
    backgroundColor: 'transparent',
    border: '2px solid #007aff',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s, transform 0.2s',
  },
  basicsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#ffffff',
  },
  mathSection: {
    padding: '4rem 2rem',
    backgroundColor: '#f8f9fa',
  },
  algorithmsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#333',
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  courseCard: { 
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
  detailViewContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    paddingTop: '2rem',
    paddingBottom: '4rem',
  },
  backButton: {
    display: 'inline-block',
    marginBottom: '2rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#007aff',
    backgroundColor: 'transparent',
    border: '1px solid #007aff',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  },
  modalTitle: {
    fontSize: '2.5rem',
    color: '#007aff',
    margin: 0,
  },
  codeBlock: {
    backgroundColor: '#f4f4f4',
    padding: '1rem',
    borderRadius: '8px',
    borderTopLeftRadius: '0',
    overflowX: 'auto',
    textAlign: 'left',
    fontSize: '0.9rem',
    margin: '1rem 0',
    border: '1px solid #ddd'
  },
  paragraph: {
    lineHeight: 1.7,
    fontSize: '1.1rem',
    color: '#333',
  },
  hamburgerMenu: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '2rem',
    height: '2rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 1010,
  },
  hamburgerBar: {
    width: '2rem',
    height: '0.25rem',
    background: '#333',
    borderRadius: '10px',
  },
  mobileNavOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    zIndex: 2000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s',
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  mobileNavLink: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none',
  },
  mobileNavClose: {
    position: 'absolute',
    top: '1.5rem',
    right: '2rem',
    background: 'none',
    border: 'none',
    fontSize: '3rem',
    cursor: 'pointer',
    color: '#333',
  },
  extraCtaContainer: {
    textAlign: 'center',
    marginTop: '4rem',
  },
};

const DynamicStyles = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      .navLink:hover {
        color: #007aff !important;
        border-bottom-color: #007aff !important;
      }
      
      .ctaButton:hover {
        background-color: #0056b3 !important;
        transform: translateY(-2px);
      }

      .secondaryCtaButton:hover {
        background-color: #007aff !important;
        color: #fff !important;
        transform: translateY(-2px);
      }
    
      .courseCard:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
      }
      
      .backButton:hover {
        background-color: #007aff !important;
        color: #fff !important;
      }
    
      @media (max-width: 768px) {
        .logo {
          font-size: 1.5rem !important;
        }
        .mainNav {
            display: none !important;
        }
        .hamburgerMenu {
            display: flex !important;
        }
        .heroTitle {
            font-size: 2.2rem !important;
        }
        .hero {
            margin: 1rem !important;
            padding: 3rem 1rem !important;
        }
        .contentSection {
            padding: 3rem 1rem !important;
        }
        .sectionTitle {
            font-size: 2rem !important;
            margin-bottom: 2rem !important;
        }
        .detailViewContainer {
            padding: 1rem !important;
        }
        .header {
           padding: 1rem 1.5rem !important;
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
