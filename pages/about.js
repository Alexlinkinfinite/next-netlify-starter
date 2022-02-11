import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function about() {
  return (
    <div className="container">
      <Head>
        <title>about page</title>
        <link rel="icon" href="/Sora-Meliae-Matrilineare-Mimes-image-x-ico.ico" />
        <Link href="pages/home" passHref>
        <a>home</a>
      </Link>
      </Head>

      <main>
        <Header title="about page" />
        <p className="description">
          try to about
        </p>
      </main>

    </div>
  )
}
