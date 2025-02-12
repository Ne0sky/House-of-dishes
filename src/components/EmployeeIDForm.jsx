import React, { useState } from 'react'
import EmployeeCard from './EmployeeCard';

const EmployeeIDForm = () => {

    const [ID, setID] = useState('')
    const [error, setError] = useState(null)
    const [employee, setEmployee] = useState(null);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log("Employee ID", ID);
        
      
          const response = await fetch(`/team/employee/${ID}`, {
              method: 'POST',
              body: JSON.stringify({ ID }),
              headers: {
                  'Content-Type': 'application/json',
              },
          });
          const json = await response.json();
          if (!response.ok) {
              setError(json.error);
              setEmployee(null)
          } 
          if(response.ok) {
              setID('');
              setEmployee(json)
              setError("An error occured");
              console.log(employee)
          }
    }

  return (
    <div className='bg-zinc-900 w-screen py-16 px-8 flex flex-col items-center mx-auto  justify-center'>
        
        <h2 className='text-3xl text-white font-semibold py-8'>Search for Employee</h2>
        <form className='flex flex-col text-white font-primary  w-full lg:w-[50%]' onSubmit={handleSubmit}>
            <label className='font-medium text-xl'>Employee ID</label>
            <input
            className='block py-2 px-4 my-2 rounded-lg bg-zinc-800'
            type='text'
            onChange={(e)=>setID(e.target.value)}
            value={ID}
            />
            <button className='bg-indigo-700 w-[8rem] px-4 py-2 mx-auto rounded-xl hover:bg-indigo-900 block my-4' type='submit'>Search</button>
            {error && <div className='px-2 py-2 bg-[#432c2c] border border-rose-700'>{error}</div>}
        </form>
        <div className='md:w-3/4 w-full'>
        <EmployeeCard name={"Akash"} role={"Frontend Developer"} task={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} feedback={"Did a good job"} timeline={"Aug-Nov 2023"}/>
        </div>
    </div>
  )
}

export default EmployeeIDForm