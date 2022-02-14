import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <h1>About page</h1>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </>
  )
}
