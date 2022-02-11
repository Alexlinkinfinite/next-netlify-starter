import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import link from 'next/link'

export default function about() {
  return (
    <div className="container">
      <Head>
        <title>about page</title>
        <link rel="icon" href="/Sora-Meliae-Matrilineare-Mimes-image-x-ico.ico" />
        <Link href="/home" passHref>
        <a target="_blank">
          <div className={`${dark ? styles.iconTwitterWhite : styles.iconTwitter} mr-3`} />
        </a>
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
