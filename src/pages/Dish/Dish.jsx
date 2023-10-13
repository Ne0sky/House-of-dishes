import React from 'react'
import RecommendedData from '../../Data/RecommendedData'
import Card2 from '../../components/Card2'
import Footer from '../../components/Footer'
const Dish = () => {
  return (
    <div className='bg-zinc-900 w-screen h-full  text-white  flex flex-col '>
        <button className='bg-indigo-600 w-16 rounded-md  px-2 mx-16 mt-8'>back</button>
        <div className='flex flex-col lg:flex-row gap-24 my-8 px-16 items-center'>
            <img className='w-[80%] lg:w-[30%] rounded-md' src="https://food-images.files.bbci.co.uk/food/recipes/butter_paneer_curry_98394_16x9.jpg" alt="image of dish" />
            <div className='w-[80%] lg:w-[50%] flex flex-col gap-8'>
                <h2 className='text-3xl font-semibold '>Panner Butter Masala <span className='block text-sm my-1 bg-zinc-700 px-2 py-1 rounded-xl text-center w-24 text-white'>vegeterian</span></h2>
                

                <div className='bg-zinc-800 rounded-xl flex flex-row w-96 justify-center items-center  p-4'>
                    <div className='flex items-center px-2'>
                    <p className='text-3xl'>🕗 </p>
                    <div>
                        <p className='text-sm font-semibold '>Time</p>
                        <p className='text-xl'>60 min</p>
                    </div>

                    <div className='flex items-center px-2'>
                    <p className='text-3xl'>📓 </p> 
                    <div >
                        <p className='text-sm font-semibold '>Time</p>
                        <p className='text-xl'>28</p>
                    </div>
                    </div>

                    <div className='flex items-center px-2'>
                    <p className='text-3xl'>🔥 </p> 
                    <div >
                        <p className='text-sm font-semibold '>Calories</p>
                        <p className='text-xl'>350 kcal</p>
                    </div>
                    </div>
                    </div>
                </div>

                <div>
                    <p className='text-2xl  font-semibold'>About the dish</p>
                    <p className=''>Paneer butter masala is a rich and creamy North Indian dish, featuring succulent chunks of paneer (Indian cottage cheese) cooked in a luscious tomato-based gravy, enriched with butter and aromatic spices. Its indulgent flavors and velvety texture make it a beloved vegetarian delicacy.</p>
                </div>
            </div>
        </div>

        {/* MAIN INGREDIENTS */}
        <div className='px-16'>
        <div className=''>
        <p className='text-2xl font-semibold'>Main Ingredients</p>
        <div className='flex gap-4 my-4'>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Paneer</div>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Tomatoes 🍅</div>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Red Chilli Powder 🌶️</div>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Oil</div>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Salt 🧂</div>
        </div>
        </div>

        {/* CUSTOMIZE INGREDIENTS */}
        <div className=''>
        <p className='text-2xl font-semibold'>Customize Ingredients</p>
        <div className='flex gap-4 my-4'>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Paneer <p className='inline'>×</p></div>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Tomatoes 🍅 <p className='inline'>×</p></div>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Red Chilli Powder 🌶️ <p className='inline'>×</p></div>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Oil <p className='inline'>×</p></div>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Salt 🧂 <p className='inline'>×</p></div>
        </div>
        </div>

        {/* KITCHEN EQUIPMENT */}
        <div className=''>
        <p className='text-2xl font-semibold'>Customize Ingredients</p>
        <div className='flex gap-4 my-4'>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Oven </div>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Pressure Cooker </div>
        <div className='border-zinc-300 border rounded-2xl bg-zinc-800 px-2 py-1  text-center'>Pan</div>
        
        </div>
        </div>

        {/* NUMBER OF PEOPLE */}
        <div>
        <p className='text-2xl font-semibold'>Number of People</p>
        
        <div className='border-zinc-300 my-2 flex border rounded-2xl bg-zinc-800 px-2 py-1 w-24 justify-center text-center'>
            
            <div className='flex gap-4 text-xl items-center '>
            <button >-</button>
            <p>1</p>
            <button>+</button>
            </div>

        </div>
        </div>
        </div>

        {/* START COOKING */}
        <button className='bg-indigo-600 p-4 rounded-lg text-center mx-auto'>Start Cooking</button>
        <div className='flex flex-col items-center'>
        <h2 className='text-center text-3xl font-medium pt-8'>Recommended Dishes</h2>
        <div className="card-container grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-4   lg:gap-8 items-center justify-center">
      {RecommendedData.map((item, index) => (
        <Card2 key={index} title={item.title} time={item.time} rating={item.rating} imageUrl={item.imageUrl} />
      ))}
      </div>
      </div>
      <div className='w-screen'>
      <Footer/>
    </div>
    </div>
  )
}

export default Dish