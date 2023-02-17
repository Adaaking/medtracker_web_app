import {call,put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { clientInstance } from '../api'


const getDocument = async (id) => {
   const response = await clientInstance.get(`/api/documents/${id}`)
   return response.data
}

const addDocument = async (document) => {
    console.log("add document")
   const response = await clientInstance.post("/api/documents",document)
   return response.data
}

const deleteDocument = async (id) => {
    const response = await clientInstance.delete(`/api/documents/${id}`)
    return id
}

function* addDocuments(docuement) {
    console.log(docuement.payload)
    try{
        const document = yield call(addDocument,docuement.payload)
        yield put({ type: "ADD_DOCUMENT_SUCCESS",document:document})
    }catch (error){
        yield put({ type:"ADD_DOCUMENT_FAILED",message:error.message})
    }
}

function* fetchDocuments({payload}) {
    console.log("id",payload.id)
    try {
        const documents = yield call(getDocument,payload.id)
        console.log(documents)
        yield put({ type: "GET_DOCUMENT_SUCCESS",documents:documents})
    } catch (error) {
        yield put({ type: 'GET_DOCUMENT_FAILED',message:error.message})
    }
}

function* deleteDocuments({payload}) {
    try {
        const documentId = yield(call(deleteDocument,payload))
        console.log(documentId)
        yield put({type:"DELETE_DOCUMENT_SUCCESS",id:documentId})
    } catch (error) {
        yield put({ type:"DELETE_DOCUMENT_FAILED"})
    }
}

function* documentSaga() {
   yield takeEvery("ADD_DOCUMENT",addDocuments)
   yield takeEvery("GET_DOCUMENT",fetchDocuments) 
   yield takeEvery("DELETE_DOCUMENT",deleteDocuments)
}

export default documentSaga;