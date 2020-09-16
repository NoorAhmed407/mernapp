
const iState = {
    studentDetail: {
        name: '',
        class: '',
        fees: 0
    },
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
    return state;

}

export default studentReducer;