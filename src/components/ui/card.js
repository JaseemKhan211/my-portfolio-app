import React from 'react';

export const Card = ({ children }) => (
  <div className="rounded-lg shadow-lg p-4 bg-white">
    {children}
  </div>
);

export const CardHeader = ({ title, subtitle }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="mt-2">
    {children}
  </div>
);