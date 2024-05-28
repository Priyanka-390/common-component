import React from 'react'

const Formsec = () => {
  return (
    <div className='py-20'>
          <div className="container max-w-[1140px] mx-auto px-3">
              <h2 className="text-black font-poppins text-6xl font-bold pb-10 text-center">Form-Validation</h2>
              <div className='p-8 border-2 max-w-[600px] mx-auto rounded-2xl border-black'>
                  {/* <form>
                      <label className='font-medium pb-4 font-poppins text-black text-xl'>Name</label>
                      <input type="text" className='max-w-[200px] h-8 border-black' />
                  </form> */}
                    <form action="submit" >
                      <div className='flex items-center gap-2'>
                           <div>
                               <label className='font-medium pb-4 font-poppins text-black text-xl'>first-Name</label>
                                <input type="text" className='p-4 !text-black font-poppins w-full sm:text-base text-sm font-normal border border-black rounded-[4px] outline-none placeholder:text-white border-opacity-70'  />
                          </div>
                            <div>
                                <label className='font-medium pb-4 font-poppins text-black text-xl'>last-Name</label>
                                <input type="text" className='p-4 !text-black font-poppins w-full sm:text-base text-sm font-normal border border-black rounded-[4px] outline-none placeholder:text-white border-opacity-70'/>
                            </div>
                      </div>
                       <div className='pt-6'>
                           <label className='font-medium font-poppins text-black text-xl'>Email</label>
                                                   <input type="text" className='p-4 text-black sm:text-base text-sm font-normal border border-black rounded-[4px] outline-none placeholder:text-white border-opacity-70 w-full mt-2' />
                      </div>
                       <div className='pt-6'>
                           <label className='font-medium font-poppins text-black text-xl'>Mobile-no.</label>
                                                   <div className='bg-transparent border border-black rounded-[4px] border-opacity-70 w-full mt-2 flex'>
                                <div className='flex items-center gap-1 p-4 bg-[#13262C] rounded-l-[4px]'>
                                    <select name="" id="" defaultValue={+91} className='bg-transparent border-none rounded-[4px]  h-full outline-none text-white font-poppins sm:text-base text-sm appearance-none cursor-pointer w-[28px]'>
                                        <option value="">+91</option>
                                        <option value="">+92</option>
                                        <option value="">+93</option>
                                        <option value="">+94</option>
                                    </select>
                                    <span>
                                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6.96484L0.535898 0.964844H7.4641L4 6.96484Z" fill="white" />
                                        </svg>
                                    </span>
                                </div>
                                <input type='text' placeholder='Phone Number' className='w-full p-4 text-black outline-none placeholder:text-white' />
                                    </div>
                       </div>
                                <button className='w-full py-3 mt-6 border  rounded-[4px] font-poppins text-black font-medium text-xl border-black'>Sign Up</button>
                                           </form>
              </div>
      </div>
    </div>
  )
}

export default Formsec
