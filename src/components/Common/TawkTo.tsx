// components/Common/TawkTo.tsx
import React, { useEffect } from 'react';

const TawkTo: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/66c78cb3ea492f34bc091bd6/1i5tnr84b';
    script.async = true;
    script.charset = 'UTF-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkTo;
