import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'




export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>IST 363</title>
        <meta name='description'
        content='This is a summery for the page for IST' />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </Layout>
  )
}