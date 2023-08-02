import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> 
          <h1 className={styles.title}>
            Welcome to REACT!
          </h1>
          <h2 className= {styles.titleDescription}>
              Research. Evaluation. Analytics. Computation. Testing.
          </h2>

          <img src="/React_Logo.webp" alt="cyber-secure" className={styles.reactLogo} />

          <p className={styles.description}>
            Get started by choosing one of the below options. 
          </p>
        <div className={styles.grid}>
          <a href="" className={styles.cardTop}>
            <h3>Take a Test &rarr;</h3>
            <p>Take an evaluation designated by your event handler!</p>
          </a>

          <a href="" className={styles.cardTop}>
            <h3>View &rarr;</h3>
            <p>View all tests that are currently added and to the REACT Platform!</p>
          </a>

          <a
            href=""
            className={styles.cardBottom}
          >
            <h3>Analyze &rarr;</h3>
            <p>Grab well documented reports of the tests taken.</p>
          </a>

          <a
            href=""
            className={styles.cardBottom}
          >
            <h3>Manage &rarr;</h3>
            <p>
              Manage your event's designated examinations!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footerCredit}>
        <a href="https://cyber-secure.blog/" target="_blank" rel="noopener noreferrer">
           Powered by <img src="/CyberSecureLogoBanner.png" alt="Cyber-Secure" className={styles.logo} />
        </a>
        <b className={styles.missionStatement}>A Cyber-Secure Engineering Mission</b>
      </footer>

      {/* Add the triangle background */}
      <div className={styles.triangleBackground}></div>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }


      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
