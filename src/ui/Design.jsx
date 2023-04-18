import React, { useEffect, useState } from 'react'
import { apiPetition } from '../helpers/apiPetition'
import { getPosition } from '../helpers/getPosition'
import FirstPart from './FirstPart'
import SecondPart from './SecondPart'
import './styles/Design.css';
const Design = () => {

  const[data, setData] = useState();
  const [coords,setCoords] = useState();
  

  const API_KEY = '381978573d8a3f4b42ecd58b2ba90de7';
 
  useEffect(()=>{
    getPosition(setCoords);
  },[]);
  
  useEffect(()=>{
    const recive = async()=>{

      if(coords){
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${API_KEY}`;
        const petition = await apiPetition(URL);
        setData(petition.data)
      }
    }
    recive();
  },[coords])
  

  return (
    <div className='design__container'>
      <FirstPart 
        data ={data} 
        setData={setData}
        API_KEY={API_KEY}
      />
      <SecondPart data ={data} />
    </div>
  )
}

export default Design
