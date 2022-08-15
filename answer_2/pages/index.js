import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/card'
import UserMenu from '../components/usermenu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exercise 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p id={styles.query_result}>Yellow dresses - <span style={{'color': 'rgb(149, 132, 132)'}}>I have found 150 products for you.</span></p>
      <UserMenu />

      <main id={styles.cards}>
        <Card img_src='/img/cloth_a.png' band='ZARA' desc='Textured dress with belt' price='69.90' />
        <Card img_src='/img/cloth_b.png' band='ZARA' desc='Textured dress with belt' price='69.90' />
        <Card img_src='/img/cloth_c.png' band='ZARA' desc='Textured dress with belt' price='69.90' />
      </main>

      <p>These products are 90% compatible to you.</p>

    </div>
  )
}