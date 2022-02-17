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
          <Link href="/posts/Alexlinkinfinite/post1">
           <a>post1 14.02.2022</a>
          </Link>
        </h2>
        <h2 className="title">
          <Link href="/posts/Alexlinkinfinite/post2">
            <a>post2 15.02.2022</a>
          </Link>
        </h2>
        <h2 className="title">
          <Link href="/posts/Alexlinkinfinite/post3-python game">
            <a>post3 17.02.2022</a>
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