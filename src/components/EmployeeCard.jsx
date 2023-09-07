import React from 'react'

const EmployeeCard = ({name, role, task, feedback, timeline}) => {
  return (
    <div className='bg-zinc-800 border border-zinc-500 rounded-lg w-full p-8 my-8 text-white relative'>
        <div className='flex flex-col lg:flex-row text-white gap-16 items-start py-8 '>

            <div className='flex flex-col items-center justify-center w-full'>
            <div className="bg-gradient-to-b rounded-full from-indigo-500 to-zinc-800 p-2">
            
            <img className='rounded-full h-[250px] w-[250px] object-cover  ' src="https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="profile pic" />
            
            </div>
            
            <p className='text-2xl font-medium'>{name}</p>
            <p className=''>{role}</p>
            </div>

            <div className=' p-4 md:p-8 rounded-lg bg-zinc-900'>
                <p className='text-3xl py-4 font-semibold  text-indigo-500'>Responsibilities</p>
                <p className=''>{task}</p>
            </div>

        </div>

        <div className='flex flex-col  text-white  w-3/4'>
            <p className='text-3xl py-4 font-semibold '>Feedback from us</p>
            <p className=''>{feedback}</p>
            
        </div>

        <p className='absolute right-8 bottom-8 bg-zinc-900 px-4 py-2 rounded-lg text-indigo-500'>{timeline}</p>
    </div>
  )
}

export default EmployeeCard