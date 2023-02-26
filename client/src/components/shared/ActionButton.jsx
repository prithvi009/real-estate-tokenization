import React from 'react'


const ActionButton = ({onConnect}) => {
  return (
    <button
        className="rounded-md  py-2 px-10 bg-secondary-500 text-black hover:text-white"
        onClick={onConnect}
    >
      
        Login/Signup
    </button>
  )
}

export default ActionButton