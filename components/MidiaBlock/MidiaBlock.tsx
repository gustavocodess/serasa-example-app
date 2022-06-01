// @ts-nocheck
import { Button } from 'evergreen-ui';
import Image from 'next/image';
import React from 'react';

// @ts-ignore
export const MidiaBlock: React.FC = (props) => {
  console.log('midia block props ', props)
  const TitleTag = props.titleTag || 'h1' as keyof JSX.IntrinsicElements
  const SubtitleTag = props.subtitleTag || 'h2' as keyof JSX.IntrinsicElements
  return (
    <div style={{ backgroundColor: props.backgroundColor, padding: 64 }}>
      {
        props.type === 'video' ? (
          
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a href={`https://www.youtube.com/watch?v=${props.video.url}`} target="_blank" rel="noreferrer">
                <Image src={props.image.url} height={props.image.height} width={props.image.width} alt={props.image.alt} />
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 64 }}>
              <TitleTag dangerouslySetInnerHTML={{ __html: props.title }} />
              <SubtitleTag dangerouslySetInnerHTML={{ __html: props.subtitle }} />
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
              {
              props.hasButton ? (
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
              ) : null
            }
            </div>
          </div>
          
        ) : null
      }
    </div>
  );
}

export default MidiaBlock;