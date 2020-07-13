export default (state = [], action) => {
    console.log(action.type);
    switch (action.type) {
        case 'FETCH_COMPANIES':
            return [...state, ...action.payload]
        case 'CLEAR_COMPANIES':
            return [];
        default :
            return state;
    }
}