import React from 'react'
import {useParams} from 'react-router-dom';

const Search = () => {
  const {name}=useParams();
  
  return (
    <div>{name}</div>
  )
}

export default Search