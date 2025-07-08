import React from 'react';

const VersionIndicator = () => {
  const version = '1.0.0';
  
  return (
    <div className="version-indicator">
      v{version}
    </div>
  );
};

export default VersionIndicator;