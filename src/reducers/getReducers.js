import { GET_POST} from "../actions/types"

const initialState ={
    items:[]
}

export default function(state= initialState,action){

    switch (action.type) {
        case GET_POST:
            console.log(action.fetchdata.results)
            return{
                ...state,
                items:action.fetchdata.results,
            }
        default:
            return state
    }
}
