import axios from 'axios';

const fetchStudents = () =>{
    return (dispatch)=>{

        axios.get('http://localhost:4000/api/students')
            .then(response=> dispatch({
                type: 'FETCH_STUDENTS',
                payload: response.data
            })
            )
            .catch(error =>console.log(error));
    }
}

export default fetchStudents;