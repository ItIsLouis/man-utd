import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Non-Official Man United Site</title>
        <meta name="description" content="The Non-Official Manchester United website with news, fixtures, videos, tickets, live match coverage, match highlights, player profiles, transfers, ..." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>

 <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#players">players</a>
  <a href="#Tickets">Tickets</a>
  <a href="#Shop">Shop</a>
  <a href="#Contact">Contact</a>
  <a href="#About">About</a>
</div>

      </main>
    </div>
  )
}

export default Home
