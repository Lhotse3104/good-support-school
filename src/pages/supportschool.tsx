import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import prefectures from '../styles/Prefectures.module.css'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { firebaseDb } from '../../firebase/index.js'

const SupportSchool = () => {
  const [prefsInfo, setPrefs] = useState({})
	const router = useRouter();
	// パスパラメータから値を取得
	const { preCode } = router.query;
	const prefCode:string = preCode as string
	const titles = {"24":"三重県","25":"滋賀県","26":"京都府","27":"大阪府","28":"兵庫県",}
	const supportSchoolList = {
		"24":[],
		"25":[],
		"26":[
			{
				"name":"御所東小学校",
				"url":"http://cms.edu.city.kyoto.jp/weblog/index.php?id=102759",
				"type":"小学校",
				"comment":"",
				"eval":"⭐️",
				"auth":"",
			},
			{
				"name":"京都インターナショナルユニバーシティアカデミ",
				"url":"http://kiua.kyotoiu.ac.jp/",
				"type":"インターナショナル",
				"comment":"",
				"eval":"⭐️",
				"auth":"",
			},
		],
		"27":[],
		"28":[
			{
				"name":"芦屋特別支援学校",
				"url":"http://www.hyogo-c.ed.jp/~ashiya-sn/",
				"type":"支援学校",
				"comment":"",
				"eval":"⭐️",
				"auth":"",
			},
			{
				"name":"青陽東養護学校",
				"url":"http://www2.kobe-c.ed.jp/syh-se/",
				"type":"支援学校",
				"comment":"",
				"eval":"⭐️",
				"auth":"",
			},
			{
				"name":"阪神特別支援学校",
				"url":"https://dmzcms.hyogo-c.ed.jp/hanshin-sn/NC3/",
				"type":"支援学校",
				"comment":"",
				"eval":"⭐️",
				"auth":"",
			},
			{
				"name":"西宮市立浜脇小学校",
				"url":"http://kusunoki.nishi.or.jp/school/hamawae/",
				"type":"小学校",
				"comment":"",
				"eval":"⭐️",
				"auth":"",
			},
			{
				"name":"こうべ小学校",
				"url":"http://www2.kobe-c.ed.jp/kob-es/",
				"type":"小学校",
				"comment":"",
				"eval":"⭐️",
				"auth":"",
			},
			// {
			// 	"name":"",
			// 	"url":"",
			// 	"type":"",
			// 	"comment":"",
			// 	"eval":"⭐️",
			// 	"auth":"",
			// },
		],
		"29":[],
		"30":[]
	}

  useEffect(() => {
    firebaseDb.ref('prefecturedata').on("value", (data)=> {
      const prefecture = data.val()
      if(prefecture) setPrefs(prefecture)
    })
	},[])

  return (
    <div className={prefectures.container}>
			<p>
				{
					prefsInfo[prefCode]?prefsInfo[prefCode].name+'の':''
				}
				小学校＆特別支援学校
			</p>
			<Table className={prefectures.table} striped bordered>
				<thead>
					<tr className={prefectures.header}>
						<th>学校名</th>
						<th>種類</th>
						<th>評価</th>
						<th>特徴</th>
					</tr>
				</thead>
				<tbody>
          {
            supportSchoolList[prefCode].map((school, index:number)=>
            {
              return(
                <tr key={index} className={prefectures.header}>
                  <th><a href={school.url}>{school.name}</a></th>
                  <th>{school.type}</th>
									<th>{school.eval}</th>
									<th>{school.comment}</th>
                </tr>
              )
            })
          }
				</tbody>
			</Table>
    </div>
  )
}

SupportSchool.getInitialProps = ({query}) => {
  return {
		query
  }
}

export default SupportSchool