import { all } from "redux-saga/effects";
import allergySaga from "./allergySaga";
import documentSaga from "./documentSaga";
import userSaga from "./userSagas";
import medSaga from "./medSaga"; 

export default function* rootSaga() {
    
    yield all([
        allergySaga(),
        userSaga(),
        documentSaga(),
        medSaga()
    ])
}