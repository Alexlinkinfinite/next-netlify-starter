import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>my programing jurney</title>
        <link rel="icon" href="/Sora-Meliae-Matrilineare-Mimes-image-x-ico.ico" />
        <Link href="pages/about" passHref>
        <a>about</a>
      </Link>
      </Head>

      <main>
        <Header title="Welcome to my blog" />
        <p className="description">
          im new to programing so dont be harsh
        </p>
      </main>

    </div>
  )
}
