import React, { children, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";




// Initial State 
const initialState = {
    transcations: []
}

// Create context

export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id 
        })
    }

    function addTranscation(transcation){
          dispatch({
            type: 'ADD_TRANSACTION',
            payload: transcation
          })
    }

    return (<GlobalContext.Provider value={{
        transcations: state.transcations,
        deleteTransaction,
        addTranscation
    }}>{children}</GlobalContext.Provider>);
}