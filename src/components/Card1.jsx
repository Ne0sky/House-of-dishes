/* eslint-disable react/prop-types */


const Card1 = ({title, imageUrl}) => {
  return (
    <div className="card1 rounded-lg text-center cursor-pointer z-0">
        <img className='rounded-full h-[150px] w-[150px] md:w-40 md:h-40 object-cover border-2 shadow-xl shadow-black' src={imageUrl} alt={title} />
        <h3 className='py-4 text-lg text-center font-semibold '>{title}</h3>
    </div>
  )
}

export default Card1