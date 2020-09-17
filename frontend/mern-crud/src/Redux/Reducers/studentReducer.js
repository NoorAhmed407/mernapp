
const iState = {
    
    name: '',
    class: '',
    fees: 0,
    students: [],
    isLoading: false,
    student: []
}


const studentReducer = (state=iState,action) =>{
    if(action.type === 'FETCH_STUDENTS'){
        return{
            ...state,
            students: action.payload
        }
    }

    if(action.type === 'UPDATE_NAME'){
        return{
            ...state,
            name: action.payload
        }
    }

    if(action.type === 'UPDATE_CLASS'){
        return{
            ...state,
            class: action.payload
        }
    }

    if(action.type === 'UPDATE_FEES'){
        return{
            ...state,
            fees: action.payload
        }
    }

    if(action.type === 'FETCH_STUDENT'){
        return{
            ...state,
            student: action.payload
        }
    }

    return state;

}

export default studentReducer;