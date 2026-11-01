import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'

const Titlecards = ({title,category}) => {
  const [apiData, setapiData] = useState([]);
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNWI5ZWEwMDAwOGY4NTBjOTZkYWRkOGMxMzFiODZmOCIsIm5iZiI6MTc5MzQ2MzAyMi42NzEsInN1YiI6IjZhZTYxMmVlOWJmZjBiZjEzZjNlYzNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._u6It69KInfQ4W3mquuIC4gV1b2ABh-V3OPsAKSer8g'
  }
};
 
  useEffect(()=>{
   fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results))
  .catch(err => console.error(err));
  },[])


  return (
    <div className='titlecard'> 
       <h2>{title? title: "Popular on Netflix"}</h2>
       <div className="cardList" >
        {apiData.map((card,index)=>{
              return <Link to={`/player/${card.id}`} className="card" key ={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
              </Link>
              
        } ) }
       </div>
    </div>
  )
}

export default Titlecards
