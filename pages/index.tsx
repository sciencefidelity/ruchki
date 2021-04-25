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
        <div className="emoji">
          <div className="tube">🧪</div>
          <div className="circle"></div>
        </div>
        <h1 className={styles.title}>
          <a href="https://sciencefidelity.co.uk">Sciencefidelity</a> Laboratory.
        </h1>

        <p className={styles.description}>
        Experiments and investigations.
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://mattcook.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
         by&nbsp;Matt&nbsp;Cook
        </a>
      </footer>
    </div>
  )
}
