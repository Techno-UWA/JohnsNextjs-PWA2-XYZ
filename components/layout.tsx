import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const logo = 'Pets Of Older Persons Logo'
const intro = 'Welcome, User!'
export const siteTitle = 'Pets Of Older Persons (Test Site)'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <><div className={styles.mainGrid}>
      {home ? (
          <>
            <Image
              priority
              src="/images/POOPS-Logo-Placeholder.jpg"
              //className={utilStyles}
              height={100}
              width={120}
              alt={logo} />
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/POOPS-Logo-Placeholder.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={logo} />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {logo}
              </Link>
            </h2>
          </>
        )}
        <hr className={styles.divider}></hr>
    </div>
    
    <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            
            content="Learn how to build a personal website using Next.js" />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        </Head>

          <header className={styles.header}>
          {home ? (
            <>
              <h1 className={utilStyles.heading2Xl}>{intro}</h1>
            </>
          ) : (
            <>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {logo}
                </Link>
              </h2>
            </>
          )}
        </header>

        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div></>
  )
}
