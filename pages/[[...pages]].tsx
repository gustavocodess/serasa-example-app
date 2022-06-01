import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { BuilderComponent, Builder, builder, BuilderContent, BuilderBlocks } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import TextBlock from '../components/TextBlock/TextBlock'

const BUILDER_API_KEY = '9438b679d95f4b72b33c48d45572960f'
builder.init(BUILDER_API_KEY)

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  const page = await builder.get('page', {
    userAttributes: {
      urlPath: '/' + (params?.page?.join('/') || ''),
    }
  })
  .toPromise() || null

  const blogContent = await builder.get('blog-page', { userAttributes: {
    // @ts-ignore
    urlPath: '/' + (params?.pages?.join('/') || ''),
  } })
  .toPromise() || null

  // console.log('PARAMS ', params)
  // console.log('blog conetnt', blogContent)

  return {
    props: {
      page,
      blogContent,
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true }
  })

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  }
}

export default function Page({
  page,
  blogContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  const isLive = !Builder.isEditing && !Builder.isPreviewing
  if (!page && isLive) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="title"></meta>
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <BuilderComponent model="blog-page" content={blogContent} />
      
    </>
  )
}