import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function SeccondPost() {
  return (
    <>
      <h1>FFenster</h1>
      <h2>i made this post to show people that i own this website</h2>
      <h2></h2>
      <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>
    </>
  )
}