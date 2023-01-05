import Head from "next/head";
import { Highlights } from "@components/imports";

export default function Home() {
  return (
    <>
      <Head>
        <title>Igor Clothes | Loja Online</title>
        <meta
          name="description"
          content="Loja virtual com as melhores roupas do Brasil!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Highlights />
    </>
  );
}
