import axios from 'axios';

export function getImages() {
    return async function(dispatch) {
        var json = await axios.get("http://localhost:5000/");  //Esto conecta el front con el back
        return dispatch({
            type: 'GET_IMAGES',
            payload: json.data
        })
    }
}