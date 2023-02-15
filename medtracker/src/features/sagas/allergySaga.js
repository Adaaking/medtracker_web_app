import {call,put,takeEvery } from 'redux-saga/effects'
import { clientInstance } from '../api'


const getAllegry = async () => {
   const response = await clientInstance.get("/api/allergy")
   console.log("body",response)
   
}

const Addallergy = async (allergy) => {
    console.log("metenal")

   const response = await clientInstance.post(allergy)
   return response.data
}

const deleteAllerg = async (id) => {
    const response = await clientInstance.delete(`/delete/${id}`)
    return id
}

function* Addallergies () {
    try{
        const allergy = yield call(Addallergy)
        yield put({ type: "ADD_ALLERGIES_SUCCESS",allergy:allergy})
    }catch (error){
        yield put({ type:"ADD_ALLERGIES_FAILED",message:error.message})
    }
}

function* fetchAllergies() {
    try {
        const memories = yield call(getAllegry)
        console.log(memories)
        yield put({ type: "GET_ALLERGIES_SUCCESS",memories:memories})
    } catch (error) {
        yield put({ type: 'GET_ALLERGIES_FAILED',message:error.message})
    }
}

function* deleteAllergy({payload}) {
    try {
        console.log('payload', payload)
        const memoryId = yield(call(deleteAllerg,payload))
        console.log(memoryId)
        yield put({type:"DELETE_MEMORY_SUCCESS",id:memoryId})
    } catch (error) {
        yield put({ type:"DELETE_MEMORY_FAILED"})
    }
}

function* allergySaga() {
   yield takeEvery("ADD_ALLERGIES",Addallergies)
   yield takeEvery("GET_ALLERGIES",fetchAllergies) 
   yield takeEvery("DELETE_ALLERGY",deleteAllergy)
}

export default allergySaga;