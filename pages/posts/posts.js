import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'


export default function Posts() {
  return (
    <div className="container">
      <Head>
        <title>posts</title>
        <link rel="icon" href="/Sora-Meliae-Matrilineare-Mimes-image-x-ico.ico" />
      </Head>

      <main>
        <p className="title">
          <Link href="/posts/first-post">
           <a>first post</a>
          </Link>
        </p>
        <p className="title">
          <Link href="/">
           <a>back Home</a>
          </Link>
        </p>
      </main>

    </div>
  )
}
