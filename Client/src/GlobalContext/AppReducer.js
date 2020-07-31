export default (state,action) => {
    switch(action.type) {
        case "DELETE":
        return {
            ...state, //get the current sate and change the state as in next line 
            money : state.money.filter(val => val._id !== action.id)
        }
        case "ADD":
            return {
              ...state,
              money: [...state.money,action.payload]
            }
        case "GET":
            return {
                ...state,
                money: action.payload
            }
        case "ERROR":
            return {
                ...state,
                error:action.payload
            }
        default:
           return state;
    }
}