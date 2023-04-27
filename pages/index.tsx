import Head from 'next/head'
// import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
// import Date from '../components/Date'
import { NextPage } from 'next'
import Layout from '../components/layout'

interface Props {
  allPostsData: []
}

const Home: NextPage = ({ allPostsData }: Props) => {
  return (
    <Layout home>
      <Head>
        <title>Movies</title>
      </Head>
      <section>hola?</section>
    </Layout>
  )
}

export default Home;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
