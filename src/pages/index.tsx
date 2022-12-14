import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Non-Official Man United Site</title>
        <meta name="description" content="The Non-Official Manchester United website with news, fixtures, videos, tickets, live match coverage, match highlights, player profiles, transfers, ..." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Navbar />
      </main>
    </div>
  )
}

export default Home
