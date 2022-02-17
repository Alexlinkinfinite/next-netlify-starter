import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>my programing jurney</title>
        <link rel="icon" href="/Sora-Meliae-Matrilineare-Mimes-image-x-ico.ico" />
      </Head>

      <main>
        <Header title="Welcome to my blog" />
        <p className="description">
          im new to programing so dont be harsh
        </p>
        <p className="title">
          <Link href="/posts/posts">
           <a>all posts</a>
          </Link>
        </p>
        <p className="title">
          <Link href="/about">
           <a>about page</a>
          </Link>
        </p>
      </main>

    </div>
  )
}
