import axios from "axios";

interface DataObjectType{
    [key:string]: string | number | boolean
}

const BACKEND:string = "http://localhost:8080/app";

export const initiateApplicationURI = `${BACKEND}/initiate-application`
export const fetchBalanceSheetURI = `${BACKEND}/fetch-balance-sheet`
export const submitApplicationURI = `${BACKEND}/submit-application`

export default async function simulateBackendCall(url:string, method:"POST" | "GET", data:DataObjectType){
    try{
        let response;
        switch (method){
            case "POST":
                response = await axios.post(url, data);
                break;
            default:
                response = await axios.get(url)
        }
        return response.data
    }catch(error){
        console.error(error)
    }
}

