import React, { useEffect, useState } from 'react'
import { apiPetition } from '../helpers/apiPetition';
import './styles/FirstPart.css';
const FirstPart = ({ data, setData, API_KEY }) => {

  const [country, setCountry] = useState('');
  const [lastCountry, setLastCountry] = useState('');
  const [isCelcius, setIsCelcius] = useState(false);  

  const handleChange = (e)=>{
    setCountry(e.target.value)
    
  }

  useEffect(()=>{
    const apiPet = async()=>{
      if (lastCountry) {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${lastCountry}&appid=${API_KEY}`;
        const petition = await apiPetition(URL);
        setData(petition.data);
      }
    }
    apiPet();
  },[lastCountry]);

  const handleSubmit =(e)=>{
    e.preventDefault();
    setLastCountry(country);
    setCountry('');
   
  }

  return (

    <div className='first__part'>
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='type a city'
            value={country}
            onChange={handleChange}
        />
      </form>

      <figure className="imag__container">
        <img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="nubes" />
      </figure>

      <h1>{data?.name}</h1>

      <div className="temperature__container">
        <h1>{Math.trunc(!isCelcius ? ((data?.main.temp - 273.15) * 9/5 +32) : (data?.main.temp - 273.15))} {isCelcius?'°C':'°F'}</h1>
        <button onClick={()=>setIsCelcius(!isCelcius)}>grades/celsius</button>
      </div> 
     


    </div>
    
  )
}

export default FirstPart
