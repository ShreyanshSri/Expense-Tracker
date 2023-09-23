import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transcation from './Transcation';

const TranscationList = () => {
  const {transcations} = useContext(GlobalContext);
  // console.log(context);
  return (
    <>
       <h3>History</h3>
      <ul  className="list">
        {transcations.map(transcation => (<Transcation key = {transcation.id} transcation = {transcation}/>))}
       
      </ul>
    </>
  )
}

export default TranscationList
