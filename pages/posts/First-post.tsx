import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout from "../../components/Layout";

type firstPostProps = {
  test: string;
};
function Firstpost({ test }: firstPostProps) {
  return (
    <Layout>
      <div>
        <Head>
          <title>first-post</title>
          <script src="https://connect.facebook.net/en_US/sdk.js" />
        </Head>
        <h1>test Fist post ${test}</h1>
        <Link href="/">backto main</Link>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </div>
    </Layout>
  );
}

export default Firstpost;
