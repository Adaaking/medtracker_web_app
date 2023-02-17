import {call,put,takeEvery } from 'redux-saga/effects'
import { clientInstance } from '../api'



const login = async (user) => {
    const response = await clientInstance.post('/api/auth/login',user)
    console.log(response.data)
    return response.data
}



function* userLogin({payload}) {
    console.log("fsadfas",payload)
    
    try {
        const user =  yield call(login,payload)
        yield put({type: "LOGIN_SUCCESS",user:user})
    } catch (error) {
        yield put({ type: "LOGIN_FAILED",message:error.message})
    }
}

function* userSaga() {
   yield takeEvery("USER_LOGIN",userLogin)
}

export default userSaga;