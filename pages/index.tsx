import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='dark:bg-zinc-800 dark:text-gray-200'>
      <Head>
        <title>清明ソフト開発 | TOP</title>
        <meta name="description" content="清明ソフト開発のTOPページ" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="清明ソフト開発 | TOP" />
        <meta property="og:description" content="清明ソフト開発のTOPページ" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <main className='flex-grow container max-w-lg mx-auto px-4 flex flex-col'>
        <h1 className='text-4xl font-bold py-10 text-center'>
          清明ソフト開発
        </h1>

        <h2 className='text-xl pb-3 text-center font-bold'>サービス内容</h2>
        <ul className='list-disc py-2 px-5'>
          <li>Webスクレイピングソフトの開発</li>
          <li>動画配信システム構築のコンサルタント</li>
          <li>Webアプリの開発</li>
          <li>各種ツールの開発</li>
          <li>プログラミング教育</li>
          <li>電子工作教育</li>
        </ul>
        <a href="https://forms.gle/TEoSozXFawU8DhbE8">
          <button className='mt-2 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full'>
            見積もりを依頼する
          </button>
        </a>
        <div className='pt-3 pb-3'>LINEからの問い合わせも受け付けています。</div>
        <div className='block mx-auto'>
          <Image src="qr.png" alt="LINEアカウント友達登録用QRコード" width={150} height={150}/>
        </div>

        <h2 className='text-xl pt-8 pb-3 text-center font-bold'>実績例</h2>
        <ul className='list-disc py-2 px-5'>
          <li>多段SSH用のスクリプト作成: 対価1万円程度</li>
          <li>画像ファイルからタイムラプスを生成するWebアプリ: 対価5万円程度</li>
          <li>データベースソフト「Fullfree」向けのデータベース設計: 対価3万円程度</li>
        </ul>

        <h2 className='text-xl pt-8 pb-3 text-center font-bold'>清明ソフト開発について</h2>
        <div className='py-2'>
          <div>清明ソフト開発は神奈川県で活動しているフリーランスエンジニアの個人事務所です。私の経歴は以下から確認できます。</div>
          <Link href="https://resume.kouya17.com/">
            <a className='text-blue-500 hover:underline'>
              https://resume.kouya17.com/
            </a>
          </Link>
        </div>
        
        <h2 className='text-xl pt-8 pb-3 text-center font-bold'>各種クラウドソーシングサービスのリンク</h2>
        <div className='py-2'>
          <div>以下サービス経由で依頼を出していただくことも可能です。</div>
          <ul className='list-disc pt-1 px-5'>
            <li><Link href="https://crowdworks.jp/public/employees/4608762"><a className='text-blue-500 hover:underline'>クラウドワークス</a></Link></li>
            <li><Link href="https://www.lancers.jp/profile/kouya_17"><a className='text-blue-500 hover:underline'>ランサーズ</a></Link></li>
            <li><Link href="https://coconala.com/users/2928527"><a className='text-blue-500 hover:underline'>ココナラ</a></Link></li>
          </ul>
        </div>
        
        <h2 className='text-xl pt-8 pb-3 text-center font-bold'>事業者概要</h2>
        <table className='table-auto my-2'>
          <tbody>
            <tr className='border-b'>
              <td>屋号</td>
              <td>清明ソフト開発</td>
            </tr>
            <tr className='border-b'>
              <td>代表者</td>
              <td>大平 航也</td>
            </tr>
            <tr className='border-b'>
              <td>連絡先</td>
              <td><Link href="https://forms.gle/TEoSozXFawU8DhbE8"><a className='text-blue-500 hover:underline'>お問い合わせ</a></Link></td>
            </tr>
            <tr className='border-b'>
              <td>開業日</td>
              <td>2023年1月2日</td>
            </tr>
            <tr className='border-b'>
              <td>事業内容</td>
              <td>ITサービス・ソフトウェア開発</td>
            </tr>
            <tr className='border-b'>
              <td>主要取引銀行</td>
              <td>楽天銀行</td>
            </tr>
          </tbody>
        </table>
      </main>

      <div className='mt-10 pt-8 pb-6 bg-gray-100 dark:bg-zinc-900'>
        <div className='flex-grow container max-w-lg mx-auto px-4 flex flex-col'>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default Home
