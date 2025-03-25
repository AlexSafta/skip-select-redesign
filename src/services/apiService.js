/**
 * API Service for fetching data from the WeWantWaste API
 */

/**
 * Fetches available skip options based on postcode and area
 * @param {string} postcode - The postcode to search for
 * @param {string} area - The area to search for
 * @returns {Promise} Promise that resolves to skip options data
 */
export const getSkipOptions = async (postcode, area) => {
  try {
    const response = await fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching skip options:', error);
    throw error;
  }
};

/**
 * Submits selected skip choice to the API
 * @param {number} skipId - The ID of the selected skip
 * @param {object} userDetails - User details for the order
 * @returns {Promise} Promise that resolves to the order confirmation
 */
export const submitSkipSelection = async (skipId, userDetails) => {
  try {
    const response = await fetch('https://app.wewantwaste.co.uk/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        skipId,
        ...userDetails
      }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting skip selection:', error);
    throw error;
  }
};

/**
 * Gets mock data for testing purposes
 * @returns {Array} Array of mock skip options
 */
export const getMockSkipOptions = () => {
  return [
    {
      id: 1,
      name: '2 Yard Skip',
      description: 'Small skip suitable for small household clearances',
      capacity: '20-30 bin bags',
      dimensions: '1.5m x 0.9m x 0.8m',
      price: 120,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: '4 Yard Skip',
      description: 'Medium skip suitable for small to medium projects',
      capacity: '30-40 bin bags',
      dimensions: '1.8m x 1.2m x 1.0m',
      price: 150,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: '6 Yard Skip',
      description: 'Standard skip suitable for small to medium projects',
      capacity: '40-60 bin bags',
      dimensions: '2.4m x 1.5m x 1.2m',
      price: 180,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: '8 Yard Skip',
      description: 'Large skip suitable for larger projects',
      capacity: '60-80 bin bags',
      dimensions: '3.0m x 1.5m x 1.4m',
      price: 220,
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];
};
