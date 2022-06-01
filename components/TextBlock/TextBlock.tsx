// @ts-nocheck
import React from 'react';

export const TextBlock: React.FC = (props) => {
  return (
    <div style={{ padding: 64 }}>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
}

export default TextBlock;