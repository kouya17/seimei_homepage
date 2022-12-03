import Head from 'next/head'
import Navigation from './navigation'

export const siteTitle = 'Cooking Timelapse Vlog'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='dark:bg-gray-800 dark:text-white'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Maker Faire Tokyo 2022用の展示物紹介ページです。"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Navigation
        title="mft2022"
        menu={[{name: 'HODAI', path: '/posts/hodai-system'}, {name: 'SShelf', path: '/posts/sshelf'}]}
      />
      <div className='container mx-auto px-4'>
        <main>{children}</main>
      </div>
    </div>
  )
}