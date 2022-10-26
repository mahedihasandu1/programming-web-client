import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);

  return (
    <>

      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
      {error && (<div>
          <h2 className='text-red-500 text-5xl text-center font-bold mt-5'>{error.status || error.message} </h2>
          <p  className='text-red-500 text-5xl text-center font-bold mt-5'>{error.statusText}</p>
        </div>)}
      </div>
    </>
  )
}

export default ErrorPage
