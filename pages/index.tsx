import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

const Home: NextPage = () => {
  return (
    <div className='dark:bg-gray-800 dark:text-gray-200'>
      <Head>
        <title>清明ソフト開発 | TOP</title>
        <meta name="description" content="清明ソフト開発のTOPページ" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="清明ソフト開発 | TOP" />
        <meta property="og:description" content="清明ソフト開発のTOPページ" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <main className='flex-grow container max-w-lg mx-auto px-4 flex flex-col min-h-screen'>
        <h1 className='text-3xl font-bold py-10 text-center'>
          清明ソフト開発
        </h1>

        <div className='py-3'>
          小規模なソフト開発を承ります。主に動画処理、Webスクレイピング周りを強みとしています。
        </div>
        <a href="https://forms.gle/TEoSozXFawU8DhbE8">
          <button className='my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
            お問い合わせ
          </button>
        </a>

        <h2 className='text-xl pt-8 pb-3 text-center'>実績例</h2>
        <ul>
          <li>多段SSH用のスクリプト作成: 対価1万円程度</li>
          <li>画像ファイルからタイムラプスを生成するWebアプリ: 対価5万円程度</li>
          <li>データベースソフト「Fullfree」向けのデータベース設計: 対価3万円程度</li>
        </ul>

        <h2 className='text-xl pt-8 pb-3 text-center'>清明ソフト開発について</h2>
        <div>清明ソフト開発は神奈川県で活動しているフリーランスエンジニアの個人事務所です。私の経歴は以下から確認できます。</div>
        <Link href="https://resume.kouya17.com/">
          <a className='text-blue-600'>
            https://resume.kouya17.com/
          </a>
        </Link>
      </main>

      <Footer />

    </div>
  )
}

export default Home
