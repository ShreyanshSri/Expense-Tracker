export default (state, action) =>{
    switch(action.type){
        case 'ADD_TRANSACTION':
         return {
            ...state,
            transcations: [action.payload, ...state.transcations]
         }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transcations: state.transcations.filter(transaction => transaction.id !== action.payload)
            }
        default: 
        return state;
    }
}