import { TbPlayerPause } from 'react-icons/tb'
import {call,put,takeEvery } from 'redux-saga/effects'
import { clientInstance } from '../api'


const getMed = async ({id}) => {
   const response = await clientInstance.get(`/api/medicine/${id}`)
   return response.data
   
}

const Addmed = async (med) => {
   const response = await clientInstance.post("/api/medicine",med)
   return response.data
}

const deletemed1= async (id) => {
    console.log('od',id)
    const response = await clientInstance.delete(`/api/medicine/${id}`)
    return id
}

function* Addmeds ({payload}) {
    console.log("dgasgfsd",payload)
    try{
        const allergy = yield call(Addmed,payload)
        console.log("medicine",allergy)
        yield put({ type: "ADD_MEDICINIES_SUCCESS",allergy:allergy})
    }catch (error){
        yield put({ type:"ADD_MEDICINIES_FAILED",message:error.message})
    }
}

function* fetchmeds( {payload} ) {
    console.log(payload)
    try {
        const memories = yield call(getMed,payload)
        yield put({ type:"GET_MEDICINIES_SUCCESS",memories:memories})
    } catch (error) {
        yield put({ type:'GET_MEDICINIES_FAILED',message:error.message})
    }
}

function* deleteAllergy({payload}) {
    try {
        const memoryId = yield(call(deletemed1,payload))
        yield put({type:"DELETE_MEDICINIES_SUCCESS",id:memoryId})
    } catch (error) {
        yield put({ type:"DELETE_MEDICINIES_FAILED"})
    }
}

function* medSaga() {
   yield takeEvery("ADD_MEDICINIES",Addmeds)
   yield takeEvery("GET_MEDICINIES",fetchmeds) 
   yield takeEvery("DELETE_MEDICINIES",deleteAllergy) 
}

export default medSaga;