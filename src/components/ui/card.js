import React from 'react';

export const Card = ({ children }) => (
  <div className="rounded-lg shadow-lg p-4 bg-white">
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="mt-2">
    {children}
  </div>
);