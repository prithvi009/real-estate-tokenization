import React from 'react'
import CreateNft from '../createProperty';
import Navbar from '../navbar'

const LandingPage = () => {
  return (
    <>
        {/* <Navbar isTopOfPage={isTopOfPage} onConnect={onConnect} /> */}
    
        <div className='w-full mt-[150px] text-primary-200 mb-[65px]'>

            <div className=' mx-auto items-center w-5/6'>

                <div className='flex justify-center'>
                    
                    <h1 className='text-[80px] font-extrabold '>Tokenize Your Property: Prove Ownership with NFTs</h1>   
                </div>


            <div className='py-20 grid grid-cols-2 items-center justify-center '>
                <div className="">
                    <h2 className='text-[30px] px-2 font-semibold'>Blockchain for Real Estate: Create, Buy, and Sell Property NFTs</h2>
                </div>
                <div>
                    <p className=' text-gray-700 tracking-[1px]'>The aim of this is to ensure that the person who holds the NFT for a particular land is the owner of that land, thus providing a secure and transparent way of verifying ownership. This approach has the potential to revolutionize the way real estate transactions are conducted by providing greater trust and efficiency through the use of blockchain technology. </p>
                </div>
            </div>

            <div>
                <div>
                    <h1 className=' text-[80px] font-extrabold py-10'>Culture At RealContract</h1> 
                </div>
                <div className='py-5'>
                    <h2 className='text-[25px] font-semibold'>Mission</h2>
                    <p className=' text-gray-700 tracking-[1px]'>"Our mission is to transform the real estate industry by creating a secure and transparent way to validate and tokenize property ownership through the use of non-fungible tokens (NFTs) and blockchain technology. </p>
                </div>
                <div className='py-5'>
                    <h2 className='text-[25px] font-semibold'>Vision</h2>
                    <p className=' text-gray-700 tracking-[1px]'>We believe in the power of blockchain to revolutionize the way real estate transactions are conducted, and our mission is to be at the forefront of this change, providing innovative solutions that benefit all stakeholders in the industry." </p>
                </div>
                <div className='py-5'>
                    <h2 className='text-[25px] font-semibold'>Key Beliefs</h2>
                    <p className=' text-gray-700 tracking-[1px]'>We believe in the importance of transparency and strive to provide a platform that is trustworthy and accurate in its validation and verification of property ownership.</p>
                </div>
                <div>
                    <h2 className='text-[25px] font-semibold'>Values</h2>
                    <p className=' text-gray-700 tracking-[1px] p-2 mt-2'>Innovation: We believe that blockchain technology has the potential to revolutionize the real estate industry by providing greater efficiency, security, and trust. We are committed to being at the forefront of this change and providing innovative solutions that benefit all stakeholders.</p>
                    <p className=' text-gray-700 tracking-[1px] p-2'>Collaboration: We believe that collaboration is key to creating a successful real estate tokenization platform. We strive to work closely with our users, partners, and industry experts to continually improve and enhance our platform.</p>
                    <p className=' text-gray-700 tracking-[1px] p-2'>Sustainability: We believe in building a sustainable future for real estate investment by promoting responsible practices and incorporating environmental, social, and governance (ESG) factors into our platform.</p>
                </div>

            </div>
            </div>
        </div>

    </>
  )
}

export default LandingPage;