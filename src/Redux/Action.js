import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionType"

const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}

const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}

const getuserList=(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}