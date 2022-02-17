import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <h1>About page</h1>
      <h2>i am starting my jurney to learn to program and to make games</h2>
      <h2>i have some ideas but this is my first time to write a actual blog or to program something</h2>
      <h2></h2>
      <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>
      <h4>
        <Link href="/posts/posts">
          <a>all posts</a>
        </Link>
      </h4>
    </>
  )
}
