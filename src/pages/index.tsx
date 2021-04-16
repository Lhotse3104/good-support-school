import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from "react"
import { preProcessFile } from 'typescript'
import styles from '../styles/Home.module.css'
import { firebaseDb } from '../../firebase/index.js'

const Home = () => {
  const PREFECTURES = "/supportschool?preCode="
  const [prefsInfo, setPrefs] = useState({})
  const prefList = [
    {
      id:'kinki',
      name:'近畿',
      prefsId:['24','25','26','27','28','29','30']
    }
  ]

  useEffect(() => {
    firebaseDb.ref('prefecturedata').on("value", (data)=> {
      const prefecture = data.val()
      if(prefecture) setPrefs(prefecture)
    })
	},[])

  return (
    <div className={styles.container}>
      <p className={styles.area_title}>近畿の支援学校</p>
      <div className={styles.japan_map}>
        {
          prefList.map((prefs)=>{
            return(
              <div key={prefs.id} className={styles[prefs.id] + " " +styles.clearfix}>
                <p className={styles.area_title}>{prefs.name}</p>
                <div className={styles.area}>
                  {
                    prefs.prefsId.map((prefId)=>{
                      if(prefsInfo[prefId])
                      return(
                        <Link key={prefId} href={PREFECTURES+prefId}>
                          <a>
                            <div className={styles[prefsInfo[prefId]['id']]}>
                              <p>{prefsInfo[prefId]['name']}</p>
                            </div>
                          </a>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home