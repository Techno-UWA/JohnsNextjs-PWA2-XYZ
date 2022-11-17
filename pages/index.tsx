import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.maingrid}>

        <div className={utilStyles.gridContainer}>
          <div className={utilStyles.item1}>
            <h2 className={utilStyles.headingLg}>Summary Dashboard</h2>
            <hr className={utilStyles.divider}></hr>
          </div>
          
          <div className={utilStyles.item2}>
            <h3 className={utilStyles.headingMd}>Number of Vists</h3>
            <h1 className={utilStyles.headingStats}>12</h1>
          </div>
          <div className={utilStyles.item3}>
            <h3 className={utilStyles.headingMd}>Distance Walked</h3>
            <h1 className={utilStyles.headingStats}>6.5km</h1>
          </div>

        </div>


        <div className={utilStyles.gridContainer2}>
          <div className={utilStyles.item1}>
            <h2 className={utilStyles.headingLg}>Visit Details</h2>
            <hr className={utilStyles.divider}></hr>
          </div>
          <div className={utilStyles.item4}>
            <form method="post" action=''>
              <fieldset>
                <label htmlFor="referrer">
                  <h3 className={utilStyles.headingMd}>Commute Method</h3>
                  <select id="referrer" name="referrer">
                    <option value="">Select...</option>
                    <option value="1">Walking</option>
                    <option value="2">Bicycling</option>
                    <option value="3">Driving</option>
                    <option value="4">Other</option>
                  </select>
                </label>
                <label htmlFor="bio">
                  <h3 className={utilStyles.headingMd}>Commute Distance (in km)</h3>
                  <textarea id="dist" name="dist" placeholder="Enter"></textarea>
                </label>
              </fieldset>
              <input type="submit" value="Submit" />
            </form>
            <h2>
              <Link href="/posts/home">Sign Out</Link>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
