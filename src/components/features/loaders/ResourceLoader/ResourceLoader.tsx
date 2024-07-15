import React from 'react';

import ResourceLoaderProps from './ResourceLoaderProps';

const ResourceLoader: React.FC<ResourceLoaderProps> = ({
  children,
  loadingMessage,
  isLoading,
}) => {
  if (isLoading) {
    return <>{loadingMessage}</>;
  }

  return <>{children}</>;
};

export default ResourceLoader;
