// ErrorBoundary.js

import React, { useState } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleResetError = () => {
    // Reset the state of your app so the error doesn't happen again
    setHasError(false);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export default ErrorBoundary;
