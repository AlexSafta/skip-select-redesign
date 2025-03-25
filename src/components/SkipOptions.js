import React from 'react';
import { formatCurrency } from '../utils/helpers';
import './SkipOptions.css';

// Imaginea statică pentru toate cardurile
const SKIP_IMAGE_URL = 'https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800';

const SkipOptions = ({ options, selectedSkip, onSelect }) => {
  return (
    <div className="skip-options-grid">
      {options.map((skip) => {
        // Extract yard size from name (e.g., "4 Yard Skip" -> 4)
        const yardSize = parseInt(skip.name.split(' ')[0], 10);
        
        return (
          <div 
            key={skip.id}
            className={`skip-option ${selectedSkip === skip.id ? 'selected' : ''}`}
            onClick={() => onSelect(skip.id)}
          >
            <div className="skip-image-container">
              <img 
                src={SKIP_IMAGE_URL} 
                alt={skip.name} 
                className="skip-image" 
              />
              <div className="skip-size-badge">{skip.sizeLabel}</div>
              
              {selectedSkip === skip.id && (
                <div className="selected-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  SELECTED
                </div>
              )}
              
              {skip.warnings && skip.warnings.length > 0 && (
                <div className="warning-badges">
                  {skip.warnings.map((warning, index) => (
                    <div key={index} className="warning-badge">
                      <svg className="warning-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>
                      {warning.text}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="skip-details">
              <h3 className="skip-name">{skip.name}</h3>
              <p className="skip-period">{skip.hirePeriod}</p>
              
              {skip.description && (
                <p className="skip-description">{skip.description}</p>
              )}
              
              <div className="skip-price">
                {formatCurrency(skip.price)} 
                <span className="price-period">per week</span>
              </div>
              
              <button className="select-button">
                {selectedSkip === skip.id ? 'Selected' : 'Select This Skip'}
                {selectedSkip === skip.id ? (
                  <svg className="select-button-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <svg className="select-button-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                )}
              </button>
            </div>
            
            {selectedSkip === skip.id && <div className="glow-effect"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default SkipOptions;
