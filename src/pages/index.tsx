import Head from "next/head";
import { Highlights, Heading, TitleBox, SliderList } from "@components/imports";

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
      <main className="container mx-auto px-24">
        <Highlights />
          <SliderList title="Camisetas"/>
        
      </main>
    </>
  );
}
