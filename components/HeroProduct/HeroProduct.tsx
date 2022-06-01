// @ts-nocheck
import React from 'react';
import { Button } from 'evergreen-ui'
import Image from 'next/image';
import { Text } from '@builder.io/react';


export const HeroProduct: React.FC = (props) => {
  const SubtitleTag = (props?.subtitle?.tag || 'h2') as keyof JSX.IntrinsicElements
  return (
    <div style={{ backgroundColor: props.backgroundColor, padding: 64 }}>
      <div style={{ flexDirection: 'row', display: 'flex' }}>

        <div style={{ flexDirection: 'column' }}>
          <h1 style={{ color: 'white' }}>
            {props.title}
          </h1>
          <SubtitleTag style={{ color: 'white' }}>{props?.subtitle?.text}</SubtitleTag>
          {
            props.hasButton ? (
              <a href={props.button.action.value}>
                 <Button
                  style={{
                    backgroundColor: 'white', border:'none', color: props.backgroundColor, fontSize: '1rem', fontWeight: '700'
                  }}
                  marginRight={12}
                  height={56}
                  appearance="primary"
                  >
                {props.button.label}
              </Button>
              </a>
            ) : null
          }
        </div>

        <div style={{ flexDirection: 'column', marginLeft: 64 }}>
          {
            props?.midia?.type === 'image' ? (
              <Image
                src={props.midia?.image.url}
                alt={props.midia?.image.alt}
                height={props.midia?.image.height}
                width={props.midia?.image.width}
              />
            ) : null
          }
        </div>
      </div>
    </div>
  );
}

export default HeroProduct;