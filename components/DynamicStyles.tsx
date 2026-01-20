
import { useEffect } from 'react';

export const DynamicStyles = () => {
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
