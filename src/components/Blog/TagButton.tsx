// components/Blog/TagButton.tsx
import React from 'react';

interface TagButtonProps {
  tag: string;
  onClick: (tag: string) => void;
}

const TagButton: React.FC<TagButtonProps> = ({ tag, onClick }) => (
  <button className="tag-button" onClick={() => onClick(tag)}>
    {tag}
  </button>
);

export default TagButton;
