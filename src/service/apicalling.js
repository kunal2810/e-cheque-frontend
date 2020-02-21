import axios from 'axios';
import Notiflix from "notiflix-react";

async function sentOTP(mobile){
    try{
        const response = await axios.post('http://localhost:5000/sendOTP',mobile)
        console.log("========>",response)
        if(response.status === 200 && response.statusText === "OK"){
            if(response.data.result === "error")
            Notiflix.Report.Failure( 'Failure', `OOPs Something went wrong`, 'OK' );
        }else{
            Notiflix.Report.Failure( 'Failure', `OOPs Something went wrong`, 'OK' );
        }

    }catch(e){
        Notiflix.Report.Warning(
            "Network Issue",
            "Please Check Your Connection",
            "OK"
          );
    }
    
}

async function verifyOTP(request){
    try{
        const response = await axios.post('http://localhost:5000/verifyOTP',request)
        console.log("========>",response)
        if(response.status === 200 && response.statusText === "OK"){
            if(response.data.result === 'error')
            Notiflix.Report.Failure( 'Failure', `OTP Verification Failed`, 'OK' );
        }else{
            Notiflix.Report.Failure( 'OOPs', `Something went wrong`, 'OK' );
        }

    }catch(e){
        Notiflix.Report.Warning(
            "Network Issue",
            "Please Check Your Connection",
            "OK"
          );
    }
    
}

 async function chequeInfo(chequeData){
    try{
        const response = await axios.post('http://localhost:5000/chequeDetails',chequeData);
        console.log("========>",response)
        if(response.status === 200 && response.statusText === "OK"){
            if(response.data.result === 'success')
            Notiflix.Report.Success( 'Success', 'Cheque Number has been sent to Your Mobile Number, Please Share your Cheque Number to Payer', 'OK' );
            else
            Notiflix.Report.Failure( 'Failure', 'Please Try Again', 'OK' );
        }else{
            Notiflix.Report.Failure( 'OOPs', 'Something went wrong', 'OK' );
        }

    }catch(e){
        Notiflix.Report.Warning(
            "Network Issue",
            "Please Check Your Connection",
            "OK"
          );
    }
}

async function chequeSearch(chequeNo){
    try{
        const response = await axios.post('http://localhost:5000/searchCheque',chequeNo);
        if(response.status === 200 && response.statusText === "OK"){
            if(response.data.result != null)
            return response.data.result;
            else
            Notiflix.Report.Failure( 'Failure', 'We are Unable to find any Cheque by this Number', 'OK' );
        }else{
            Notiflix.Report.Failure( 'OOPs', 'Something went wrong', 'OK' );
        }

    }catch(e){
        Notiflix.Report.Warning(
            "Network Issue",
            "Please Check Your Connection",
            "OK"
          );
    }
}

async function depositCheque(chequeNo){
    try{
        const response = await axios.post('http://localhost:5000/depositCheque',chequeNo);
        if(response.status === 200 && response.statusText === "OK"){
            if(response.data.result === 'success')
            Notiflix.Report.Success( 'Success', 'Cheque Number has been Deposited and sent to Your Bank for Verification', 'OK' );
            else
            Notiflix.Report.Failure( 'Failure', 'We are Unable to find any Cheque by this Number', 'OK' );
        }else{
            Notiflix.Report.Failure( 'OOPs', 'Something went wrong', 'OK' );
        }

    }catch(e){
        Notiflix.Report.Warning(
            "Network Issue",
            "Please Check Your Connection",
            "OK"
          );
    }
}

async function registerUser(userObj){
    try{
        const response = await axios.post('http://localhost:5000/register',userObj);
        if(response.status === 200 && response.statusText === "OK"){
            if(response.data.result === 'success')
            Notiflix.Report.Success( 'Success', response.data.response, 'OK' );
            else
            Notiflix.Report.Failure( 'Failure', response.data.response, 'OK' );
        }else{
            Notiflix.Report.Failure( 'Failure', 'OOPs Something went wrong', 'OK' );
        }

    }catch(e){
        Notiflix.Report.Warning(
            "Network Issue",
            "Please Check Your Connection",
            "OK"
          );
    }
}

async function loginUser(userObj){
    try{
        const response = await axios.post('http://localhost:5000/login',userObj);
        if(response.status === 200 && response.statusText === "OK"){
            if(response.data.result === 'success')
            return response.data.response;
            else
            Notiflix.Report.Failure( 'Failure', response.data.response, 'OK' );
        }else{
            Notiflix.Report.Failure( 'Failure', 'OOPs Something went wrong', 'OK' );
        }

    }catch(e){
        Notiflix.Report.Warning(
            "Network Issue",
            "Please Check Your Connection",
            "OK"
          );
    }
}

async function userDashboard(userObj){
    try{
        const response = await axios.post('http://localhost:5000/fetchAllDetails',userObj);
        if(response.status === 200 && response.statusText === "OK"){
            if(response.data.result === 'success')
            return response.data.response;
            else
            Notiflix.Report.Failure( 'Failure', response.data.response, 'OK' );
        }else{
            Notiflix.Report.Failure( 'Failure', 'OOPs Something went wrong', 'OK' );
        }

    }catch(e){
        Notiflix.Report.Warning(
            "Network Issue",
            "Please Check Your Connection",
            "OK"
          );
    }
}

export default {
    chequeInfo,
    sentOTP,
    verifyOTP,
    chequeSearch,
    depositCheque,
    registerUser,
    loginUser,
    userDashboard
}


