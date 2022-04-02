import React from 'react'
import { useSelector } from 'react-redux';
import {Bar} from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import faker from 'faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    
  );
  export const options = {
    responsive: true,
    
scales:{
 
    y:{
        beginAtzero:true
    }
},

    plugins: {
        
      legend: {
        position: 'top' 
      },
      title: {
        display: true,
        
      },
    },
  };

  const labels = ['İnfected', 'Deaths','Active'];

 
  


function Chart() {
    const item=useSelector(state=>state.covid.countries)

    const active=item.confirmed?.value-item.deaths?.value
    const data = {
        labels,
        datasets: [
          {
            label:"İnfected",
            data: [item.confirmed?.value],
           
            borderWidth:2,
           
            backgroundColor: 'rgba(25, 13, 198, 0.5)',
            borderColor:'rgba(25, 13, 198, )'
            
          },
         
          {
            label:"Deaths",
            data: [item.deaths?.value],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderWidth:2,
            borderColor:'rgba(255, 99, 132, )',
          },
          {
            label:"Active",
            data: [active],
            backgroundColor: 'rgba(255, 251, 43, 0.89)',
            borderWidth:2,
            borderColor:'rgba(255, 251, 43, )',
          },
        ],
      };
  return (
   
     <div className='container'>
         <Bar options={options} data={data}/></div>  
       
  )
}

export default Chart