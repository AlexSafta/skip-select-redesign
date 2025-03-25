/**
 * Utility functions for the application
 */

/**
 * Format currency values to GBP format
 * @param {number} value - The value to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value) => {
  // Use pound symbol with no decimal places
  return `£${value}`;
};

/**
 * Check if the viewport is mobile
 * @returns {boolean} True if viewport is mobile
 */
export const isMobile = () => {
  return window.innerWidth <= 768;
};

/**
 * Validate UK postcode format
 * @param {string} postcode - Postcode to validate
 * @returns {boolean} True if postcode is valid
 */
export const isValidPostcode = (postcode) => {
  const regex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
  return regex.test(postcode);
};

/**
 * Get readable dimensions for a skip based on its size
 * @param {number} yardSize - Size of skip in yards
 * @returns {string} Human-readable dimensions
 */
export const getSkipDimensions = (yardSize) => {
  switch (yardSize) {
    case 4:
      return '2.1m × 1.5m × 0.9m';
    case 5:
      return '2.3m × 1.7m × 1.0m';
    case 6:
      return '2.5m × 1.8m × 1.2m';
    case 8:
      return '3.4m × 1.7m × 1.4m';
    case 10:
      return '3.7m × 1.8m × 1.5m';
    case 12:
      return '3.9m × 1.9m × 1.8m';
    case 14:
      return '4.1m × 1.9m × 1.9m';
    case 16:
      return '4.3m × 1.9m × 2.0m';
    case 20:
      return '5.0m × 2.3m × 1.8m';
    case 40:
      return '7.5m × 2.4m × 2.3m';
    default:
      return 'Dimensions not available';
  }
};

/**
 * Get waste capacity for a skip based on its size
 * @param {number} yardSize - Size of skip in yards
 * @returns {string} Human-readable capacity
 */
export const getSkipCapacity = (yardSize) => {
  switch (yardSize) {
    case 4:
      return '30-40 bin bags';
    case 5:
      return '40-50 bin bags';
    case 6:
      return '50-60 bin bags';
    case 8:
      return '60-80 bin bags';
    case 10:
      return '80-100 bin bags';
    case 12:
      return '100-120 bin bags';
    case 14:
      return '120-140 bin bags';
    case 16:
      return '140-160 bin bags';
    case 20:
      return '180-200 bin bags';
    case 40:
      return '350-400 bin bags';
    default:
      return 'Capacity information not available';
  }
};
