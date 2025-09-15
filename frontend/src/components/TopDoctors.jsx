import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  // return (
  //     <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
  //         <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
  //         {/* <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p> */}
  //         <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
  //             {doctors.slice(0, 10).map((item, index) => (
  //                 <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
  //                     <img className='bg-[#EAEFFF]' src={item.image} alt="" />
  //                     <div className='p-4'>
  //                         <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
  //                             <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
  //                         </div>
  //                         <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
  //                         <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>

  //                     </div>
  //                 </div>
  //             ))}
  //         </div>
  //         <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white px-8 py-4 rounded-2xl font-light hidden md:block">more</button>
  //     </div>

  // )
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item) => (
          <div
            key={item._id}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300"
          >
            {/* image box: fixed responsive height, image fills/crops via object-cover */}
            {/* <div className="w-full h-44 md:h-48 lg:h-56 bg-[#EAEFFF]">
              <img
                src={item.image}
                alt={item.name || "doctor image"}
                loading="lazy"
                className="w-full h-full object-cover object-center block"
              />
            </div> */}
            {/* crop with focus at top (use object-center / object-top / arbitrary) */}
            <div className="w-full h-44 md:h-48 lg:h-56 bg-[#EAEFFF]">
              <img
                src={item.image}
                alt={item.name || "doctor image"}
                loading="lazy"
                className="w-full h-full object-cover object-top block"
              />
            </div>

            <div className="p-4">
              <div
                className={`flex items-center gap-2 text-sm ${
                  item.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  }`}
                />
                <p>{item.available ? "Available" : "Not Available"}</p>
              </div>

              <p className="text-[#262626] text-lg font-medium">{item.name}</p>
              <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
              {/* replace `someField` with the actual property you wanted to show */}
              <p className="text-[#5C5C5C] text-sm">{item.someField}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white px-8 py-4 rounded-2xl font-light hidden md:block"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
