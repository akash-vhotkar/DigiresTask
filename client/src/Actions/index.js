import axios from 'axios';
import { toast } from 'react-toastify'
import * as api from '../Api/index'
toast.configure()


export const register =(formdata, history)=> async (dispatch)=>{
    try{

        const {data} = await  api.register(formdata);
        console.log("action dispathc is done ");
        if(data.err===0){
            toast(data.message);
            dispatch({ type: "AUTH", data: data.data });
            history.push("/dashboard")
        }
        else{
            toast(data.message)

        }

    }
    catch(err){
        if(err) console.log(err);
    }
    

}

export const loginagain = (localdata, history, token) => async (dispatch) => {
    try {
        const res = await api.loginagain(token)
        console.log(res);
        if (res.data.err === 0) {
            dispatch({ type: "LOGINAGRAIN", data: localdata });
        }
        else {
            dispatch({ type: "LOGOUT" })
            toast("Please login");
            history.push("/");

        }


    }
    catch (err) {
        if (err) console.log(err);
    }
}

export const  login =(formdata , history)=> async (dispatch)=>{
    try{
        const {data} = await api.login(formdata);
        if(data.err===0){
            toast(data.message);
            dispatch({ type: "AUTH", data: data.data });
            history.push("/dashboard")
        }
        else{
        toast(data.message);
        }

    }
    catch(err){
        if(err) console.log(err);
    }
}


export const createrecord = (formdata )=> async (dispatch)=>{
    try{
        const {data} = await api.createrecord(formdata);
        
        if(data.err === 0){
            const res = await  api.getrecords();
            dispatch({type:"GetRecords", data: res.data.data});
            toast("Record Created")
            
            
        }
        
    }
    catch(err){
        if(err) console.log(err);
    }
}

export const getrecords =()=> async (dispatch)=>{

    try{
        const {data } = await  api.getrecords();
        dispatch({type:"GetRecords", data: data.data});
        
    }
    catch(err){
        if(err) console.log(err);
    }
}

export const  searchrecord =(name)=> async (dispatch)=>{
    try{
        dispatch({type:"Search", data: name});
    }
    catch(err){
        if(err) console.log(err);
    }
}


export const analysis =(actiondata)=> async (dispatch)=>{
    try{
        const res = await axios.get("https://geolocation-db.com/json/")
        const ip = res.data.IPv4;
        const newactiondata = {...actiondata,  ip:  ip};
        console.log(newactiondata);
       
        const {data} = await api.createanalysis(newactiondata);
        



    }
    catch(err){
        if(err) console.log(err);
    }
}