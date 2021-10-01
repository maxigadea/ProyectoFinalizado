

const initialState = {
    img : []
}

function rootReducer (state= initialState, action) {
    switch(action.type) {
        case 'GET_IMAGES':
            return{
                ...state,
                img: action.payload
          }
         default: return state;
    }
}

export default rootReducer;