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
        <h2 className="title">
          <Link href="/posts/Alexlinkinfinite/posts">
           <a>Alexlinkinfinite</a>
          </Link>
        </h2>
        <h2 className="title">
          <Link href="/posts/laith/posts">
            <a>person</a>
          </Link>
        </h2>
        <h2 className="title">
          <Link href="/">
           <a>back Home</a>
          </Link>
        </h2>
      </main>

    </div>
  )
}
