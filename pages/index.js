import Head from 'next/head'
import styles from '../styles/Home.module.css'

// this is the front page

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Get ready for <a href="https://sciencefidelity.co.uk">Sciencefidelity!</a>
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
