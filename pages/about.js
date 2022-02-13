import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'


export default function about() {
  return (
    <div className="container">
      <Head>
        <title>about page</title>
        <link rel="icon" href="/Sora-Meliae-Matrilineare-Mimes-image-x-ico.ico" />
      </Head>

      <main>
        <Link href='/'><a>Home</a></Link>
        <Header title="about this blog" />
        <p className="description">
          I'm learning programing and I've tried to make games so now I made a blog to document what I learn and what games I make
        </p>
      </main>

    </div>
  )
}
