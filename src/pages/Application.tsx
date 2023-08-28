import React from 'react'
import FormButton from '../components/common/FormButton'

const Application:React.FC = () => {
  return (
    <form className='w-full h-full flex justify-center items-center'>
      <FormButton type='submit' displayText='Initiate Application'/>
    </form>
  )
}

export default Application
