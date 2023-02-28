import React from 'react'
import ActionButton from '../shared/ActionButton'



const Form = () => {
  return (
    <div >
        <form >
            <div className="grid grid-cols-4 gap-8 mt-8 text-slate-400">
                <input type="text" placeholder='Wallet Address' name='wallet_address' className="col-span-2 h-14 rounded-md text-lg bg-[#F6F6F6]"/>
                <input type="text" placeholder='Owner Name' name='owner' className="col-span-2 rounded-md h-14 text-lg bg-[#F6F6F6]"/>
                <input type="text" placeholder='Land Registration Number' name='registration_number' className='col-span-4 rounded-md h-14 text-lg bg-[#F6F6F6]'/>
                <input type="number" placeholder='Land size (in SqFt)' name='land_size' className='col-span-2 rounded-md h-14 text-lg bg-[#F6F6F6]'/>
                <input type="date" placeholder='Date of Purchase' name='land_size' className='col-span-2 rounded-md h-14 text-lg bg-[#F6F6F6]'/>
                <input type="file" src="" alt="" className='col-span-2  mx-auto rounded-md h-14  text-lg text-center p-2 bg-[#F6F6F6] '/>
                <ActionButton/>
            </div>

        </form>
    </div>
  )
}

export default Form