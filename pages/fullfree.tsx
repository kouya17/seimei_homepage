import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
import { FaTwitter, FaLine } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'

const Fullfree: NextPage = () => {
  const navs = [
    {text: "価格例", href: "#price"},
    {text: "実績例", href: "#experience"},
    {text: "お問い合わせ", href: "#contact"},
  ]

  return (
    <div className='dark:bg-zinc-800 dark:text-gray-200'>
      <Head>
        <title>清明ソフト開発 | Fullfree</title>
        <meta name="description" content="Fullfreeのカスタマイズは清明ソフト開発にお任せください。" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="清明ソフト開発 | Fullfreeカスタマイズ" />
        <meta property="og:description" content="Fullfreeのカスタマイズは清明ソフト開発にお任せください。" />
        <meta name="twitter:card" content="summary" />
      </Head>
      
      <div className='bg-white dark:bg-zinc-900 sticky top-0'>
        <Header navs={navs}/>
      </div>
      
      <main className='flex-grow container max-w-lg mx-auto px-4 flex flex-col'>
        <h1 className='text-4xl font-bold py-10 text-center'>
          Fullfreeのカスタマイズは清明ソフト開発にお任せください
        </h1>

        <h2 className='text-2xl py-3 text-center font-bold'>顧客管理コストの削減をご検討ですか？</h2>
        <div className='py-2'>
          Fullfreeとは株式会社フリースタイルが開発している、無料で利用可能な顧客管理ソフトです。カスタマイズ性や操作性に優れ、顧客管理コストの削減に寄与します。
        </div>
        <div className='py-2'>
          清明ソフト開発には国家資格である「データベーススペシャリスト」を所有している技術者が在籍しています。専門知識を駆使し、既存システムからの移行や、データベースシステムの新規開発を請け負います。
        </div>

        <h2 id="price" className='text-2xl pt-8 pb-3 text-center font-bold'>価格例</h2>
        <ul className='list-disc py-2 px-5'>
          <li>シンプルなデータ構成の場合: 5000円～</li>
          <li>関数の利用が必要なデータ構成の場合: 20000円～</li>
        </ul>
        <div className='py-2'>
          そもそもFullfreeの利用が適切かどうかを含めたシステム構築に関するご相談等も承りますので、なんでもお気軽にお問い合わせください。
        </div>

        <h2 id="experience" className='text-2xl pt-8 pb-3 text-center font-bold'>実績例</h2>
        <ul className='list-disc py-2 px-5'>
          <li>個人運営サービス向けの顧客管理データベース設計: 対価3万円程度</li>
          <li>法人運営サービス向けの顧客管理データベース検討: 対価2万円程度</li>
        </ul>
        
        <h2 id="contact" className='text-2xl pt-8 pb-3 text-center font-bold'>お問い合わせ</h2>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
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
      </main>

      <div className='mt-10 pt-8 pb-6 bg-gray-100 dark:bg-zinc-900'>
        <div className=' flex-grow container max-w-lg mx-auto px-4 flex flex-col'>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default Fullfree
