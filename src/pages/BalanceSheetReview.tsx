import React, {useEffect} from 'react'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import BalanceSheet from '../components/application/BalanceSheet'
import FormButton from '../components/common/FormButton'

import type { DataObjectType } from '../helper/simulateBackendCall'
import simulateBackendCall, { submitApplicationURI } from '../helper/simulateBackendCall'

import { useAppSelector } from '../store/hooks'
import { BalanceSheetItemType } from '../store/slices/balanceSheetSlice'

export interface ApplicationType{
  businessDetails: DataObjectType,
  balanceSheet: BalanceSheetItemType[] 
}


const submitApplication =async (data:ApplicationType) => {
  try{
    const response = await simulateBackendCall(submitApplicationURI, "POST", data)
    return response
  }catch(error){
    console.error(error)
    throw error
  }
}

const BalanceSheetReview:React.FC = () => {

  const details = useAppSelector(state => state.businessDetails)
  const sheet = useAppSelector(state => state.balanceSheet.list)

  const navigate = useNavigate()

  useEffect(()=>{
    if(sheet.length < 1) navigate("/")
  })
  

  //Using React Query's useMutation hook for initiating the application
  const submitApplicationMutation = useMutation(submitApplication, {
    onSuccess: (response) => {
      if(response) {
        toast.success("Application submitted successful")
        console.log(response)
        navigate("/application-form")
      }
      else toast.error("Application submission was not successful.")
    },
    onError: (error) => {
      console.error(error)
    }
  })


  const handleSubmitApplicationClick = () => {
    if(details && sheet.length > 0 ) submitApplicationMutation.mutate({businessDetails: details, balanceSheet: sheet})
  }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl '>Your balance sheet is ready to be reviewed</h1><br/>
      <BalanceSheet/>
      <div className='w-full h-10'></div>
      <FormButton displayText='Submit Application' onClick={handleSubmitApplicationClick}/>
    </div>
  )
}

export default BalanceSheetReview
