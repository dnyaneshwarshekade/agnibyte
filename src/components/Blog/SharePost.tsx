// components/Blog/SharePost.tsx
import React from 'react';

const SharePost: React.FC = () => (
  <div className="share-post">
    <button onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, '_blank')}>
      Share on Facebook
    </button>
    <button onClick={() => window.open('https://twitter.com/intent/tweet?url=' + window.location.href, '_blank')}>
      Share on Twitter
    </button>
    {/* Add more share options as needed */}
  </div>
);

export default SharePost;
