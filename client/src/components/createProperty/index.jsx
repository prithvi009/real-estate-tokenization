import React from 'react'
import useMediaQuery from "../shared/useMediaQuery";
import Form from './Form';

const CreateProperty = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <div className='w-full h-[100vh] mt-[170px] bg-[#F6F6F6]'>
        {/* <div className="w-[100%] text-center p-4 bg-white">
            <p className="font-bold text-[32px]">Real Contract</p>
        </div> */}
        <div className='w-4/6 p-8 m-4 gap-10 border-r-2 mx-auto rounded-lg  bg-white'>

            <div className="font-[500]">Create your own NFT </div>
            <Form/>
        </div>
    </div>
  )
}

export default CreateProperty