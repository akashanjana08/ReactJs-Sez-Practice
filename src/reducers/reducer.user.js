const INIT_STATE={userName:'',loading:''}

export default function(state=INIT_STATE,action){

    switch(action.type){
        case 'LOADING':
            return({
                ...state,
                loading : 'Loading...',
                userName : ''
            })
        case 'USER_ACTION':
            return({
                ...state,
                userName : action.payload,
            })
            default:
                return state;
    }
}