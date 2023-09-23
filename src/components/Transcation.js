import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transcation = ({transcation}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transcation.amount > 0 ? '+' : '-'; 
    const classValue = transcation.amount > 0 ? "plus" : "minus"
  return (
      <li className= {classValue}>
          {transcation.text} <span>{sign}${Math.abs(transcation.amount)}</span><button onClick={() =>deleteTransaction(transcation.id)} className="delete-btn">x</button>
        </li>
  )
}

export default Transcation
