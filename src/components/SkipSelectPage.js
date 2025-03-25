import React, { useState, useEffect } from 'react';
import SkipOptions from './SkipOptions';
import { getSkipOptions, getMockSkipOptions } from '../services/apiService';
import { useSkipContext } from '../context/SkipContext';
import './SkipSelectPage.css';

// Imaginea statică pentru toate cardurile
const SKIP_IMAGE_URL = 'https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800';

const SkipSelectPage = () => {
  const [skipOptions, setSkipOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Use our context to manage state
  const { 
    selectedSkip, 
    selectSkip, 
    postcode, 
    area 
  } = useSkipContext();

  useEffect(() => {
    const fetchSkipData = async () => {
      try {
        setLoading(true);
        
        // In production, uncomment this line and remove the mockData
        // const data = await getSkipOptions(postcode, area);
        
        // Using mock data for demo purposes
        // In a real implementation, this would come from the API
        setTimeout(() => {
          const mockData = [
            {
              id: 1,
              name: '4 Yard Skip',
              sizeLabel: '4 Yards',
              hirePeriod: '14 day hire period',
              price: 210,
              description: 'Equivalent to 30-40 black bin bags. Ideal for small home renovation projects.',
              warnings: []
            },
            {
              id: 2,
              name: '5 Yard Skip',
              sizeLabel: '5 Yards',
              hirePeriod: '14 day hire period',
              price: 260,
              description: 'Equivalent to 40-50 black bin bags. Perfect for medium-sized clearance projects.',
              warnings: []
            },
            {
              id: 3,
              name: '6 Yard Skip',
              sizeLabel: '6 Yards',
              hirePeriod: '14 day hire period',
              price: 290,
              description: 'Equivalent to 50-60 black bin bags. Great for larger home renovations.',
              warnings: []
            },
            {
              id: 4,
              name: '8 Yard Skip',
              sizeLabel: '8 Yards',
              hirePeriod: '14 day hire period',
              price: 294,
              description: 'Equivalent to 60-80 black bin bags. Suitable for substantial renovation work.',
              warnings: []
            },
            {
              id: 5,
              name: '10 Yard Skip',
              sizeLabel: '10 Yards',
              hirePeriod: '14 day hire period',
              price: 363,
              description: 'Equivalent to 80-100 black bin bags. Suitable for large scale projects.',
              warnings: [
                { type: 'property', text: 'Private Property Only' },
                { type: 'waste', text: 'Not Suitable for Heavy Waste' }
              ]
            },
            {
              id: 6,
              name: '12 Yard Skip',
              sizeLabel: '12 Yards',
              hirePeriod: '14 day hire period',
              price: 407,
              description: 'Equivalent to 100-120 black bin bags. Ideal for large clearance projects.',
              warnings: [
                { type: 'property', text: 'Private Property Only' },
                { type: 'waste', text: 'Not Suitable for Heavy Waste' }
              ]
            },
            {
              id: 7,
              name: '14 Yard Skip',
              sizeLabel: '14 Yards',
              hirePeriod: '14 day hire period',
              price: 477,
              description: 'Equivalent to 120-140 black bin bags. Designed for major renovation work.',
              warnings: [
                { type: 'property', text: 'Private Property Only' },
                { type: 'waste', text: 'Not Suitable for Heavy Waste' }
              ]
            },
            {
              id: 8,
              name: '16 Yard Skip',
              sizeLabel: '16 Yards',
              hirePeriod: '14 day hire period',
              price: 571,
              description: 'Equivalent to 140-160 black bin bags. For substantial commercial projects.',
              warnings: [
                { type: 'property', text: 'Private Property Only' },
                { type: 'waste', text: 'Not Suitable for Heavy Waste' }
              ]
            },
            {
              id: 9,
              name: '20 Yard Skip',
              sizeLabel: '20 Yards',
              hirePeriod: '14 day hire period',
              price: 763,
              description: 'Equivalent to 180-200 black bin bags. Ideal for major construction projects.',
              warnings: [
                { type: 'property', text: 'Private Property Only' }
              ]
            },
            {
              id: 10,
              name: '40 Yard Skip',
              sizeLabel: '40 Yards',
              hirePeriod: '14 day hire period',
              price: 933,
              description: 'Equivalent to 350-400 black bin bags. For large-scale commercial clearances.',
              warnings: [
                { type: 'property', text: 'Private Property Only' },
                { type: 'waste', text: 'Not Suitable for Heavy Waste' }
              ]
            }
          ];
          
          setSkipOptions(mockData);
          setLoading(false);
        }, 1000); // Simulate loading delay
      } catch (err) {
        setError('Failed to load skip options. Please try again.');
        setLoading(false);
        console.error('Error fetching skip options:', err);
      }
    };

    fetchSkipData();
  }, [postcode, area]);

  const handleSkipSelection = (skipId) => {
    selectSkip(skipId);
    
    // Show tooltip briefly when a skip is selected
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      // In a real implementation, this would navigate to the next step
      alert(`Selected skip ID: ${selectedSkip}. Continuing to next step.`);
    } else {
      alert('Please select a skip to continue.');
    }
  };

  if (loading) return (
    <div className="loading-container">
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading skip options...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="error-container">
      <div className="error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    </div>
  );

  return (
    <div className="skip-select-container">
      {/* Progress steps cu pictograme/emoji-uri */}
      <div className="progress-steps">
        <div className="step completed">
          <div className="step-line"></div>
          <div className="step-icon">📍</div>
          <div className="step-line"></div>
          <div className="step-text">Postcode</div>
        </div>
        <div className="step completed">
          <div className="step-line"></div>
          <div className="step-icon">🗑️</div>
          <div className="step-line"></div>
          <div className="step-text">Waste Type</div>
        </div>
        <div className="step active">
          <div className="step-line"></div>
          <div className="step-icon">🚛</div>
          <div className="step-line"></div>
          <div className="step-text">Select Skip</div>
        </div>
        <div className="step">
          <div className="step-line"></div>
          <div className="step-icon">📝</div>
          <div className="step-line"></div>
          <div className="step-text">Permit Check</div>
        </div>
        <div className="step">
          <div className="step-line"></div>
          <div className="step-icon">📅</div>
          <div className="step-line"></div>
          <div className="step-text">Choose Date</div>
        </div>
        <div className="step">
          <div className="step-line"></div>
          <div className="step-icon">💳</div>
          <div className="step-line"></div>
          <div className="step-text">Payment</div>
        </div>
      </div>
      
      <div className="location-info">
        <p>Skip hire options for <strong>{postcode} {area}</strong></p>
      </div>
      
      <h1>Choose Your Skip Size</h1>
      <p className="instruction">Select the skip size that best suits your needs</p>
      
      {showTooltip && selectedSkip && (
        <div className="selection-tooltip">
          <div className="tooltip-icon">✓</div>
          Skip selected! Click continue when you're ready to proceed.
        </div>
      )}
      
      <SkipOptions 
        options={skipOptions} 
        selectedSkip={selectedSkip} 
        onSelect={handleSkipSelection} 
      />
      
      <div className="action-buttons">
        <button 
          className="back-button"
          onClick={() => window.history.back()}
        >
          Back
        </button>
        <button 
          className="continue-button" 
          onClick={handleContinue}
          disabled={!selectedSkip}
        >
          {selectedSkip ? 'Continue' : 'Please Select a Skip'}
        </button>
      </div>
    </div>
  );
};

export default SkipSelectPage;
