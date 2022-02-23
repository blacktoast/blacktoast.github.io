import Head from "next/head";
import Link from "next/link";
import { allPosts } from "../.contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts;
  return { props: { posts } };
}

export default function Home({ posts }: any) {
  console.log(posts);
  return (
    <>
      <div className="container">
        <Head>
          <title>my First blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-3xl font-bold underline">Hi my tests blog</h1>
        <h2>hello</h2>
        <br />
        <Link href="/autors/me">Me!!</Link>
      </div>
    </>
  );
}
