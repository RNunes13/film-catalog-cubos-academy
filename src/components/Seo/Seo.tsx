import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'

const basePath = process.env.NEXT_PUBLIC_URL

interface ISeo {
  description: string;
  title: string;
  siteTitle?: string;
  image?: string;
}

export const SEO: React.FC<ISeo> = ({ description, title, siteTitle, image = 'logo.png' }) => {
  const { t } = useTranslation('common')
  const mainTitle = siteTitle ?? t('meta.title')

  return (
    <Head>
      <title>{mainTitle && title ? `${mainTitle} | ${title}` : (title ?? mainTitle)}</title>
      <meta name="description" key="description" content={description} />
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:title" key="og:title" content={title ?? mainTitle} />
      <meta property="og:description" key="og:description" content={description} />
      <meta property="og:site_name" key="og:site_name" content={mainTitle} />
      <meta property="og:url" key="og:url" content={basePath} />
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:description" key="og:description" content={description} />
      <meta property="og:image" key="og:image" content={`${basePath}/${image}`} />
    </Head>
  )
}
