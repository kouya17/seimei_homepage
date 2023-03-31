import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import Header from '../components/header'
import { FaTwitter, FaLine } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'
import Image from 'next/image'

const Home: NextPage = () => {
  const navs = [
    { text: "ご挨拶", href: "#greet" },
    { text: "実績例", href: "#experience" },
    { text: "事業者概要", href: "#abstract" },
    { text: "お問い合わせ", href: "#contact" },
    { text: "リンク", href: "#link" },
  ]

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

      <div className='bg-white dark:bg-zinc-900 sticky top-0'>
        <Header navs={navs} />
      </div>

      <main className='flex-grow container max-w-lg mx-auto px-4 flex flex-col'>

        <Image src="/seimei_logo.png" alt="logo" width={500} height={500}/>

        <h2 id="greet" className='text-2xl pb-3 text-center font-bold'>あなたに寄り添うソフト開発を</h2>
        <div className='py-2'>
          清明ソフト開発のホームページにご訪問いただき、ありがとうございます。私たちは、ソフトウェアを活用し、あなたのお困りごとの解消をお手伝いいたします。
        </div>
        <div className='py-2'>
          組み込み機器の開発からウェブサービスの開発まで、ソフトウェアの知識が必要になる領域は多岐に渡ります。清明ソフト開発はソフトウェア及びその周辺を含めた全体最適を追及したサービスの提供を進めてまいります。
        </div>

        <h2 id="experience" className='text-2xl pt-8 pb-3 text-center font-bold'>実績例</h2>
        <ul className='list-disc py-2 px-5'>
          <li>多段SSH用のスクリプト作成: 対価1万円程度</li>
          <li>画像ファイルからタイムラプスを生成するWebアプリ: 対価5万円程度</li>
          <li>データベースソフト「Fullfree」向けのデータベース設計: 対価3万円程度</li>
        </ul>
        <h2 id="abstract" className='text-2xl pt-8 pb-3 text-center font-bold'>事業者概要</h2>
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

        <h2 id="contact" className='text-2xl pt-8 pb-3 text-center font-bold'>お問い合わせ</h2>
        <div className="flex py-2 space-x-6 justify-center">
          <Link href="mailto:seimei.soft.dev&#64;gmail.com">
            <a>
              <FiMail size={40} color="gray" />
              <span className="sr-only">Mail address</span>
            </a>
          </Link>
          <Link href="https://lin.ee/skBfy9m">
            <a>
              <FaLine size={40} color="#06C755" />
              <span className="sr-only">Line account</span>
            </a>
          </Link>
          <Link href="https://twitter.com/aoki_kouya">
            <a>
              <FaTwitter size={40} color="#1DA1F2" />
              <span className="sr-only">Twitter account</span>
            </a>
          </Link>
        </div>

        <h2 id="link" className='text-2xl pt-8 pb-3 text-center font-bold'>各種クラウドソーシングサービスのリンク</h2>
        <div className='py-2'>
          <div>以下サービス経由で依頼を出していただくことも可能です。</div>
          <ul className='list-disc pt-1 px-5'>
            <li><Link href="https://crowdworks.jp/public/employees/4608762"><a className='text-blue-500 hover:underline'>クラウドワークス</a></Link></li>
            <li><Link href="https://www.lancers.jp/profile/kouya_17"><a className='text-blue-500 hover:underline'>ランサーズ</a></Link></li>
            <li><Link href="https://coconala.com/users/2928527"><a className='text-blue-500 hover:underline'>ココナラ</a></Link></li>
          </ul>
        </div>

      </main>

      <div className='mt-10 pt-8 pb-6 bg-gray-100 dark:bg-zinc-900'>
        <div className='flex-grow container max-w-lg mx-auto px-4 flex flex-col'>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Home
