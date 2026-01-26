import React from 'react'
import { carddata } from '../Data/Data';
import Card from './card';

const cards = () => {
  return (
    <div className='flex gap-10 p-20'>{carddata.map((Item,index)=>{
       return(
       <div className='w-full'>
        <Card
        title={Item.title}
        color={Item.color}
        barvalue={Item.barvalue}
        value={Item.value}
        png={Item.png}
        series={Item.series}
        />
         </div>
       ) 
    })}</div>
  )
}

export default cards