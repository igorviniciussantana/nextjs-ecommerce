import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Igor Clothes | Loja Online</title>
        <meta name="description" content="Loja virtual com as melhores roupas do Brasil!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto'>
       <h1 className='text-3xl font-bold text-green-700'>Igor Clothes</h1>
      </main>
    </>
  )
}
