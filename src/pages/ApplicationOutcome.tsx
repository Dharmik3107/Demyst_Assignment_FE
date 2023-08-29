import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom"

import { useAppSelector } from '../store/hooks'

const ApplicationOutcome:React.FC = () => {

  //Fetching states from store
  const decision = useAppSelector(state => state.decision)
  const balanceSheet = useAppSelector(state => state.balanceSheet.list)

  const navigate = useNavigate()

  //If balance sheet has not fetched then User will be redirected to home URL to start new application
  useEffect(() => {
    if(balanceSheet.length === 0) navigate("/")
  })

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <h1 className='text-3xl border-2 border-solid border-primarySkiedBlue p-4'>{decision === true ? "Your loan application has been approved" : "Your loan application has been rejected"}</h1>
    </div>
  )
}

export default ApplicationOutcome
