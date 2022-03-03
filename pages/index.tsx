import Head from "next/head";
import Link from "next/link";
import { allBlogs } from "../.contentlayer/generated";

export async function getStaticProps() {
  const posts = allBlogs;
  return { props: { posts } };
}

function TestCom({ post }: any) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: post }}>{post.title}</div>
      <style jsx>
        {`
          code {
            background-color: red;
          }
          p {
            background-color: red;
          }
          .test {
            background-color: red;
          }
        `}
      </style>
    </>
  );
}

export default function Home({ posts }: any) {
  console.log(posts[0].body.html);
  return (
    <>
      <div className="container">
        <Head>
          <title>my First blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-xl font-bold underline">Hi my tests blog</h1>
        <h2>hello</h2>
        <TestCom post={posts[0].body.html}></TestCom>
        <br />
        <Link href="/autors/me">Me!!</Link>
      </div>
    </>
  );
}
