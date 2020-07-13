import axios from 'axios';
import { formatGithubJson, formatWikipediaJson } from '../jsonToSearchResult';



export const fetchCompanies = query => dispatch => {
    axios.get('https://api.github.com/search/repositories', {
        params: {
            q: query,
            per_page: 10
        }
    }).then(res => {
        console.log(res.data.items);
        dispatch({
            type: 'FETCH_COMPANIES',
            payload: formatGithubJson(res.data.items)
        })
    })

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
            console.log(res.data.query.search);
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