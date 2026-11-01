import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'


const player = () => {
  const{id} = useParams();
  const navigate = useNavigate();

  const [apiData, setapiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  });
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNWI5ZWEwMDAwOGY4NTBjOTZkYWRkOGMxMzFiODZmOCIsIm5iZiI6MTc5MzQ2MzAyMi42NzEsInN1YiI6IjZhZTYxMmVlOWJmZjBiZjEzZjNlYzNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._u6It69KInfQ4W3mquuIC4gV1b2ABh-V3OPsAKSer8g'
  }
};
useEffect(()=>{
   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res =>setapiData(res.results[0]) )
  .catch(err => console.error(err));
},[])

  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
  )
}
export default player
