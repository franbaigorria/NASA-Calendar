import Head from 'next/head'
import { NextPage } from 'next'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>Challenge - Home</title>
      </Head>
      <section>hola?</section>
    </Layout>
  )
}

export default Home;
