
import React from 'react';
import { styles } from '../styles';

export const Modal = ({ item, onClose }) => {
    if (!item) return null;
    return (
      <div style={styles.modalOverlay} onClick={onClose}>
        <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
          <button style={styles.closeButton} onClick={onClose}>&times;</button>
          <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
             <div style={styles.courseIcon}>{item.icon}</div>
             <h3 style={styles.modalTitle}>{item.title}</h3>
          </div>
          <div>{item.content}</div>
        </div>
      </div>
    );
  };
