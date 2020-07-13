import axios from 'axios';
import { formatGithubJson, formatWikipediaJson } from '../jsonToSearchResult';



export const fetchCompanies = query => dispatch => {

    // GithubAPI get request 
    // results limited to ten for visibility during dev
    // searches repository names and descriptions for the query value
    axios.get('https://api.github.com/search/repositories', {
        params: {
            q: query,
            per_page: 10
        }
    }).then(res => {
        dispatch({
            type: 'FETCH_COMPANIES',
            payload: formatGithubJson(res.data.items)
        })
    })

    //Wikipedia get request
    // Return pages related to the query passed to srsearch prop
    axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
            format: 'json',
            action: 'query',
            list: 'search',
            srsearch: query,
            origin: '*'
        },
        withCredentials: false
    }).then(res => {
            dispatch({
                type: 'FETCH_COMPANIES',
                payload: formatWikipediaJson(res.data.query.search)
            })
        })
}


export const clearCompanies = () => dispatch => {
    dispatch({
        type: 'CLEAR_COMPANIES'
    })
}