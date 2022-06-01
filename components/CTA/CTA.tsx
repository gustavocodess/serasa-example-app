// @ts-nocheck
import { Button } from 'evergreen-ui';
import React from 'react';

export const CTA: React.FC = (props) => {
  console.log('CTA props ', props)
  const TitleTag = ('h1') as keyof JSX.IntrinsicElements
  const SubtitleTag = (props?.subtitle?.tag || 'h2') as keyof JSX.IntrinsicElements
  return (
    <div style={{ padding: 64, backgroundColor: 'ghostwhite', textAlign: 'center' }}>
      <TitleTag>{props.title}</TitleTag>
      <SubtitleTag>{props.subtitle}</SubtitleTag>
      <a href={props.button.link}>
        <Button
          style={{
            backgroundColor: '#e63888', border:'none', color: 'white', fontSize: '1rem', fontWeight: '700'
          }}
          marginRight={12}
          height={56}
          appearance="primary"
          >
          {props.button.label}
        </Button>
      </a>

    </div>
  );
}

export default CTA;