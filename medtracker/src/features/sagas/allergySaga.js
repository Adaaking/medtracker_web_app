import {call,put,takeEvery } from 'redux-saga/effects'
import { clientInstance } from '../api'


const getAllegry = async (id) => {
   const response = await clientInstance.get(`/api/allergy/${id}`)
   return response.data
   
}

const Addallergy = async (allergy) => {
    console.log("metenal", allergy)
   const response = await clientInstance.post("/api/allergy",allergy)
   return response.data
}

const deleteAllerg = async (id) => {
    const response = await clientInstance.delete(`/api/allergy/${id}`)
    return id
}

function* Addallergies ({payload}) {
    console.log("dgasgfsd",payload)
    try{
        const allergy = yield call(Addallergy,payload)
        console.log(allergy)
        yield put({ type: "ADD_ALLERGIES_SUCCESS",allergy:allergy})
    }catch (error){
        yield put({ type:"ADD_ALLERGIES_FAILED",message:error.message})
    }
}

function* fetchAllergies( {payload} ) {
    try {
        const memories = yield call(getAllegry,payload.id)
        yield put({ type: "GET_ALLERGIES_SUCCESS",memories:memories})
    } catch (error) {
        yield put({ type: 'GET_ALLERGIES_FAILED',message:error.message})
    }
}

function* deleteAllergy({payload}) {
    try {
        const memoryId = yield(call(deleteAllerg,payload))
        yield put({type:"DELETE_ALLERGIES_SUCCESS",id:memoryId})
    } catch (error) {
        yield put({ type:"DELETE_ALLERGIES_FAILED"})
    }
}

function* allergySaga() {
   yield takeEvery("ADD_ALLERGIES",Addallergies)
   yield takeEvery("GET_ALLERGIES",fetchAllergies) 
   yield takeEvery("DELETE_ALLERGIES",deleteAllergy)
}

export default allergySaga;