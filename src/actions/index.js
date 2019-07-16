import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";


// our action creator will be a function that returns a function
export const getChar = () => dispatch => {
    dispatch({type: FETCHING});

    // the url to fetch characters from is `https://swapi.co/api/people/`

    axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      console.log(res.data.results);
      dispatch({ type: SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err.response.data.error.message});
    });
};
// remember that now we have controll over our thunk-based action creator

