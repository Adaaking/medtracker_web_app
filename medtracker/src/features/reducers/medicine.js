import { allergies } from '../actions/actions';
import * as type from '../types';

const initialState = {
    medicine:[],
    loading:false,
    success:false,
    updateId:null,
}

export default function medReducer(state = initialState, action){

    switch(action.type){

        case type.GET_MEDICINIES:
            return {
                ...state,
                loading: true
            }

        case type.GET_MEDICINIES_SUCCESS:
            return {
              ...state,
              medicine: action.memories,
              loading:false,
              success:true
            }
            
            case type.ADD_MEDICINIES_FAILED:
                return {
                  ...state,
                  loading:false,
                  success:false
                }
     
            case type.ADD_MEDICINIES_SUCCESS:
                return [...state.medicine, action.medicine]
                    
            case type.DELETE_MEDICINIES_SUCCESS:
                console.log(action.id)
                return {
                    ...state,
                    medicine: state.medicine.filter(allergy => allergy._id!==action.id)
                }
        default:
            return state
    }
}
