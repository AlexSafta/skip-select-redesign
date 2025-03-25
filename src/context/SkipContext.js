import React, { createContext, useState, useContext } from 'react';

// Create context
const SkipContext = createContext();

// Custom hook for using the context
export const useSkipContext = () => useContext(SkipContext);

// Provider component
export const SkipProvider = ({ children }) => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [postcode, setPostcode] = useState('LE10');
  const [area, setArea] = useState('1SH');
  const [orderDetails, setOrderDetails] = useState({
    deliveryDate: null,
    contactDetails: {
      name: '',
      email: '',
      phone: ''
    },
    deliveryAddress: {
      line1: '',
      line2: '',
      city: '',
      postcode: ''
    }
  });

  // Function to select a skip
  const selectSkip = (skipId) => {
    setSelectedSkip(skipId);
  };

  // Function to update postcode and area
  const updateLocation = (newPostcode, newArea) => {
    setPostcode(newPostcode);
    setArea(newArea);
  };

  // Function to update order details
  const updateOrderDetails = (details) => {
    setOrderDetails(prevDetails => ({
      ...prevDetails,
      ...details
    }));
  };

  // Values to be provided to consumers
  const value = {
    selectedSkip,
    postcode,
    area,
    orderDetails,
    selectSkip,
    updateLocation,
    updateOrderDetails
  };

  return (
    <SkipContext.Provider value={value}>
      {children}
    </SkipContext.Provider>
  );
};
