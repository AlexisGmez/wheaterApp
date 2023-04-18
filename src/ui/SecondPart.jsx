import React from 'react'
import './styles/SecondPart.css';
const SecondPart = ({ data }) => {

  data && console.log(data)
  return (
    <div className='second__part'>
      <h2>{data?.weather[0].description}</h2>
      <p>Speed wind: {data?.wind.speed} m/s</p>
      <p>Cloud: {data?.clouds.all}%</p>
      <p>Pressure: {data?.main.pressure} </p>
    </div>
  )
}

export default SecondPart
