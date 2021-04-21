import Head from 'next/head'
import styles from '../styles/Home.module.scss'

// this is the front page

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sciencefidelity App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://sciencefidelity.co.uk">Sciencefidelity</a> loves company!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

      </main>

      <footer className={styles.footer}>
        Masterminded magically by&nbsp;
        <a
          href="https://mattcook.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matt!
        </a>
      </footer>
    </div>
  )
}
