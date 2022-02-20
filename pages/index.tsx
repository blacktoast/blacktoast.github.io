import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hi my tests blog</h1>
      <h2>hello</h2>
      <Link href="/test">test</Link>
      <br />
      <Link href="/autors/me">Me!!</Link>
    </div>
  );
}
