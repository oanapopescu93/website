import { call, put, takeLatest } from "redux-saga/effects";
import { bringPayload, showPayload } from "../reducers/home";

function request(){
    return api().then(function(res){
        return res
    })
}

function api(){
    return new Promise(function(resolve, reject){
        fetch('/api/home')
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(err => console.error('fetchBringThemAll2--> ' + err));
    })
}

function* fetchBringPayload(){
    try{        
        const output = yield call(request)
        yield put(showPayload(output))
    } catch(error){
        console.log('fetchBringThemAll1--> ', error)
    }   
}

export function* homeRegister() {
    yield takeLatest(bringPayload.type, fetchBringPayload)
}