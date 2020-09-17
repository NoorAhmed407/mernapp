import axios from 'axios';

const fetchSingleStudent = (id) =>{
    return (dispatch)=>{

        axios.get(`http://localhost:4000/api/students/${id}`)
            .then(response=> dispatch({
                type: 'FETCH_STUDENT',
                payload: response.data
            })
            )
            .catch(error =>console.log(error));
    }
}

export default fetchSingleStudent;