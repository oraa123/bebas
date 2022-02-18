import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Loading from '../Loading'
import Detail from './Detail'

function Rumah() {
    const [data,setData] =useState([])
    const [loading,setLoading] =useState(false)

useEffect(()=>{ 
    const fetchData =async()=>{  
      const response = await axios.get(`https://api-mobilespecs.azharimm.site/v2/brands`)
      const datas = await response.data 
      const res = await datas.data
      setData(res)
      setLoading(true)
    }
    fetchData()
    
},[])

  return (
  
    <div>
      {loading ? data.map((hp)=>{
        return(<Detail key={hp.brand_id} data={hp}  brand={hp.brand_slug}/>)   
      }):<Loading/>}
    </div>
  )
}


export default Rumah