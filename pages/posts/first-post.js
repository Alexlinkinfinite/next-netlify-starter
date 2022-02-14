import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>this is my very first blog post</h2>
      <h2>i am limited since i can only write the posts throu html type of language(next js)</h2>
      <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>
    </>
  )
}