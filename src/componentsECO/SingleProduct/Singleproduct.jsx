import React from 'react'
import { useParams } from 'react-router-dom'

export const Singleproduct = () => {

    const params = useParams()
    console.log(params);
    
  return (
    <div>Singleproduct</div>
  )
}
