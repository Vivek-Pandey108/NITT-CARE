// import React from 'react'
// import { assets } from '../assets/assets'

// const About = () => {
//   return (
//     <div>

//       <div className='text-center text-2xl pt-10 text-[#707070]'>
//         <p>ABOUT <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">US</span></p>
//       </div>

      

//       <div className='text-xl my-4'>
//         <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
//       </div>

//       <div className='flex flex-col md:flex-row mb-20'>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>EFFICIENCY:</b>
//           <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>CONVENIENCE: </b>
//           <p>Access to a network of trusted healthcare professionals in your area.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>PERSONALIZATION:</b>
//           <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
//         </div>
//       </div>

//     </div>
//   )
// }

import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">US</span></p>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>
            Bookings made simple — our intelligent scheduler finds the fastest available slots,
            reduces wait times, and automates reminders and rescheduling. Fewer manual steps
            mean clinics run smoother and both doctors and patients save valuable time.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>
            Access your doctor, prescriptions, and appointment history from anywhere on web or mobile.
            Secure logins, fast search, and a clear interface let patients find the right specialist
            and book instantly — no phone calls or paperwork required.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>
            Patient profiles store preferences, medical history, and past visits so care is consistent
            and tailored. From personalized appointment suggestions to follow-up reminders,
            NITT Care helps clinicians deliver treatment that fits each patient’s needs.
          </p>
        </div>
      </div>
       <footer className="mt-8 text-center text-sm text-gray-500">
        <p>
          Built with patient-first design — secure, reliable, and designed to
          streamline doctor-patient interactions.
        </p>
      </footer>
    </div>
  )
}

export default About


// export default About
