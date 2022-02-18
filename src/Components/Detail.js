import axios from 'axios'
import React, { useEffect , useState}   from 'react'


function Detail({brand,data}) {
    axios.get(`https://api-mobilespecs.azharimm.site/v2/brands/${brand}`)
.then((res)=>{
    console.log(res)
})
  return (
    <div>
        <h1>{data.brand_name}</h1>
        </div>
  )
}


export default Detail