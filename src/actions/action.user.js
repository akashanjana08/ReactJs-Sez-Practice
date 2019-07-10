// export default function(){
//     return({
//         type:'USER_ACTION',
//         payload:'Akash Sharma'
//     })
// }
import axios from 'axios';
export default function(){
    return dispatch=>{
        dispatch(fetchNews(dispatch))
    }
}


function initializefetching(){
    return (dispatch) => {
        dispatch({
            type:'LOADING',
            payload:'Loading...'
        });
      };
    }

function fetchNews(dispatch){
    dispatch(initializefetching());
    return ()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
            console.log(res)
            dispatch({
                type:'USER_ACTION',
                payload:res.data.title
            })
        })
    }
}