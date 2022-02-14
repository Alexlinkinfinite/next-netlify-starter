import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <h1>About page</h1>
      <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>
      <h4>
        <Link href="/posts/first-post">
          <a>my first post</a>
        </Link>
      </h4>
    </>
  )
}
