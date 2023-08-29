import type { DataObjectType } from "./simulateBackendCall";

export function validateBusinessName(businessName:string){
    return businessName.trim() !== ""
}

export function validateYearEstablished(year:number){
    const currentYear = new Date().getFullYear();
    return year >= 1800 && year <= currentYear;
}

export function validateLoanAmount(amount:number){
    return amount > 0;
}

export function validateAccountingProvider(provider:string){
    return provider.length > 0
}

export default function validateFormData(applicationData:DataObjectType){
    const {businessName, yearEstablished, loanAmount, accountingProvider} = applicationData
    const isValidate = validateBusinessName(businessName) && validateYearEstablished(yearEstablished) && validateLoanAmount(loanAmount) && validateAccountingProvider(accountingProvider)
    return isValidate
}