import backgroundImage from "../../assets/IMG_20251128_114055.JPG";

const RightCard = (props) => {
  const n = 0
  return (
        <div className="relative bg-gray-100 rounded-2xl h-[78vh]  min-w-[260px] bg-cover bg-center " style={{
            backgroundImage:`url(${props.img})`,}}>
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
          <div className="relative">
        <div className="absolute top-4 left-4 h-8 w-8 rounded-full bg-white text-black flex items-center justify-center font-bold">{props.id + 1}</div>

  <div className="text-white  h-[320px] pt-70 font-semibold px-5 justify-center items-center rounded-2xl"><h1 className="text-3xl pb-4">{props.name}</h1>
    <p className="text-xs overflow-x-auto">{props.intro}</p>  
  </div>

  <div className="flex justify-center items-center pt-28 px-4">
  <div className="py-2 w-38 px-5 flex items-center justify-center hover:text-1.5xl hover:scale-110 hover:shadow-lg transition bg-blue-500 hover:bg-blue-400 text-white rounded-4xl relative z-10">
    <span className="text-1xl pb-1 font-semibold">{props.experience}</span>
  </div> 
  <div className="relative flex -mx-2 w-5 h-4 items-center rounded-full bg-blue-500 z-10"></div>
  <div className="text-white text-3xl h-14 pb-2 w-14 cursor-pointer bg-blue-500 hover:bg-blue-400 hover:text-4xl hover:scale-120 hover:shadow-lg transition rounded-full flex items-center justify-center z-20">
    →
  </div>
</div>
</div>
</div>

  )
}

export default RightCard
