import * as type from '../types';

const initialState = {
    document:[],
    loading:false,
    success:false,
}

export default function documentReducer(state = initialState, action){

    switch(action.type){

        case type.GET_DOCUMENT:
            return {
                ...state,
                loading: true
            }

        case type.GET_DOCUMENT_SUCCESS:
            console.log("redeuer",action.documents)
            return {
                ...state,
                document: action.documents,
                loading:false,
                success:true
            }

        case type.ADD_DOCUMENT_SUCCESS:
            return [...state.document, action.document]
            
    
        case type.DELETE_DOCUMENT_SUCCESS:
   
            return {
                ...state,
                document: state.document.filter(memory => memory._id!==action.id)
            }
            
        default:
            return state
    }
}
