import Layout from '../../components/layout'
import { getAllPostIds, getPostData, PostData } from '../../lib/posts'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import PostDetail from '../../components/postDetail'

export default function Post({ postData }: { postData: PostData }) {
  return (
    <Layout>
      <Head>
        <title>{"青木晃也 MFT2022 | " + postData.fileData.matter.title}</title>
        <meta name="description" content="青木晃也 MFT2022用ページ" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="青木晃也 MFT2022 | Home" />
        <meta property="og:description" content="青木晃也 MFT2022用ページ" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className='flex justify-center'>
        <article>
          <PostDetail postData={postData} />
        </article>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string)
  return {
    props: {
      postData
    }
  }
}