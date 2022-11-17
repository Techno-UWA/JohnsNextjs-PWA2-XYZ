import Head from 'next/head'
import Layout, { siteTitle }  from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'

export default function Home({}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.maingrid}>
        <div className={utilStyles.gridContainer}>
          <div className={utilStyles.item1}>
            <h2 className={utilStyles.headingLg}><Link href="/">Login</Link></h2>
            <hr className={utilStyles.divider}></hr>
          </div>
        </div>
      </div>
    </Layout>
  )
}
