import React from "react";

const WeatherDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-1 mt-(--spacing-400) lg:mt-(--spacing-600) lg:grid-cols-[2fr_1fr] gap-(--spacing-400)'>
      {children}
    </div>
  );
};

export default WeatherDashboard;
