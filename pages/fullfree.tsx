import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'

const Fullfree: NextPage = () => {
  return (
    <div className='dark:bg-zinc-800 dark:text-gray-200'>
      <Head>
        <title>清明ソフト開発 | Fullfree</title>
        <meta name="description" content="Fullfreeの作業代行は清明ソフト開発にお任せください。" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="清明ソフト開発 | Fullfree" />
        <meta property="og:description" content="Fullfreeの作業代行は清明ソフト開発にお任せください。" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <main className='flex-grow container max-w-lg mx-auto px-4 flex flex-col min-h-screen'>
        <h1 className='text-4xl font-bold py-10 text-center'>
          Fullfreeの作業代行は清明ソフト開発にお任せください
        </h1>

        <h2 className='text-xl py-3 text-center font-bold'>顧客管理コストの削減をご検討ですか？</h2>
        <div className='py-2'>
          Fullfreeとは株式会社フリースタイルが開発している、無料で利用可能な顧客管理ソフトです。カスタマイズ性や操作性に優れ、顧客管理コストの削減に寄与します。
        </div>
        <div className='py-2'>
          清明ソフト開発には国家資格である「データベーススペシャリスト」を所有している技術者が在籍しています。専門知識を駆使し、既存システムからの移行や、データベースシステムの新規開発を請け負います。
        </div>

        <h2 className='text-xl pt-8 pb-3 text-center font-bold'>価格例</h2>
        <ul className='list-disc py-2 px-5'>
          <li>シンプルなデータ構成の場合: 5000円～</li>
          <li>関数の利用が必要なデータ構成の場合: 20000円～</li>
        </ul>
        <div className='py-2'>
          そもそもFullfreeの利用が適切かどうかを含めたシステム構築に関するご相談等も承りますので、なんでもお気軽にお問い合わせください。
        </div>

        <a href="https://forms.gle/TEoSozXFawU8DhbE8">
          <button className='my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full'>
            見積もりを依頼する
          </button>
        </a>

        <h2 className='text-xl pt-8 pb-3 text-center font-bold'>実績例</h2>
        <ul className='list-disc py-2 px-5'>
          <li>個人運営サービス向けの顧客管理データベース設計: 対価3万円程度</li>
          <li>法人運営サービス向けの顧客管理データベース検討: 対価2万円程度</li>
        </ul>

        <h2 className='text-xl pt-8 pb-3 text-center font-bold'>清明ソフト開発について</h2>
        <Link href="/"><a className='text-blue-500'>事業者概要ページはこちら</a></Link>
      </main>

      <Footer />

    </div>
  )
}

export default Fullfree
