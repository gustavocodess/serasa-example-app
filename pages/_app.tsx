import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Builder } from '@builder.io/react';
import '@builder.io/widgets';

import '../components/HeroProduct/HeroProduct.builder';
import '../components/MidiaBlock/MidiaBlock.builder';
import '../components/TextBlock/TextBlock.builder';
import '../components/CTA/CTA.builder';

Builder.register('insertMenu', {
  name: 'Custom Serasa Components',
  items: [
    { name: 'HeroProduct' },
    { name: 'MidiaBlock' },
    { name: 'TextBlock' },
    { name: 'CTA' },
  ],
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
