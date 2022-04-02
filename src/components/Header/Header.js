import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchData } from '../../redux/covidSlice'
import CountUp from 'react-countup';
import { useDispatch } from 'react-redux'


function Header() {




const dispatch=useDispatch();
const item=useSelector((state)=>state.covid.global)

const country= useSelector((state)=>state.covid.countries)

const active=[country.confirmed?.value]-[country.deaths?.value]



    useEffect(() => {
        dispatch(fetchData())
          
    }, [])
 
  

  return (

    <div className="container-fluid">

      <div className=' container'>

         <div className="row justify-content-center mt-5">
         <div className="  col-lg img_1  box_style">
             <h4>İnfected</h4>
              <h5><CountUp
              end={
           country.confirmed?.value
        
        }
              duration={2}
              
              /></h5>
             <p> 
                 Last Update at : 
                 <span 
                 className='date'
                 > 
                 {Date(country.lastUpdate).toLocaleString("eu-US").split("GMT+0300 (GMT+03:00)")}
                 </span> 
                  </p> 
         </div>
         <div className="  col-lg img_2  box_style ">
            
         <h4>Recovered</h4>
         </div>
         <div className="  col-lg img_3  box_style ">
             <h4>Deaths</h4>
             <h5><CountUp
              end={country.deaths?.value}
              duration={2}
              /></h5>
             <p> Last Update at : <span className='date'> {Date(item.lastUpdate).toLocaleString("eu-US").split("GMT+0300 (GMT+03:00)")}</span>  </p> 
        </div>
         <div className="  col-lg img_4  box_style">
             <h4>Active</h4>

             <h5>
                 <CountUp
                 end={
                
                     active
                  }
                 duration={2}
                 />
             </h5>

             <p> Last Update at : <span className='date'> {Date(item.lastUpdate).toLocaleString("eu-US").split("GMT+0300 (GMT+03:00)")}</span>  </p> 
         </div>
     </div>

   </div>

   </div>
     
  )
}

export default Header