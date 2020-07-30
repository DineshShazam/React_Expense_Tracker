export default (state,action) => {
    switch(action.type) {
        case "DELETE":
        return {
            ...state, //get the current sate and change the state as in next line 
            money : state.money.filter(val => val.id !== action.id)
        }
        case "ADD":
            return {
              ...state,
              money: [action.payload, ...state.money]
            }
        default:
           return state;
    }
}