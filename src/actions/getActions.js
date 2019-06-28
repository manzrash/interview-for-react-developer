import { GET_POST } from "./types"

export const getNews = () => dispatch => {
    console.log("fetching")
    fetch('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=qG808Xn6G5zAb6Wm0e6hS52JQjS6L2Er')
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_POST,
            fetchdata: data
        }))
}
