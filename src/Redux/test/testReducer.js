const INITIAL_STATE ={
    currentTest: null
}

const testReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_Test':
            return {
                ...state,
                currentTest: action.payload
            }

        default: 
            return state;
    }
    
}

export default testReducer;
