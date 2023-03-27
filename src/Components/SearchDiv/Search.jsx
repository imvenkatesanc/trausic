/*import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-[#dbdbd9] rounded-[10px] p-[3rem]'>
      <form action="">

        <div className='firstDiv flex justify-between items-center rounded-[20px] gap-[15px] bg-white p-5 shadow-lg shadow-[#a5a6a6] flex-cols sm:flex-row sm:justify-between'>

          <div className='flex gap-2 items-center'>
          <AiOutlineSearch className='text-[25px] icon'/>
          <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here....' />
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor'/>
          </div>

          <div className='flex gap-2 items-center'>
          <BsHouseDoor className='text-[25px] icon'/>
          <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by company....' />
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor'/>
          </div>

          <div className='flex gap-5 items-center'>
          <CiLocationOn className='text-[25px] icon'/>
          <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by location....' />
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor'/>
          </div>

          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>
        </div>
      </form>

      <div className='secDiv flex items-center gap-10 justify-center flex-cols sm:flex-row sm:justify-between'>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="relevance" className='text-[#333333] font-semibold'>Sort by:</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="type" className='text-[#333333] font-semibold'>Type:</label>
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="level" className='text-[#333333] font-semibold'>Level:</label>
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>

        </div>

        <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
      </div>
    </div>
  )
}

export default Search
*/

import React from 'react'
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 rounded-[10px] bg-[#b8c7cd] p-[3rem]'>
      <form action="">
        <div className='firstDiv flex flex-col gap-5 sm:flex-row sm:justify-between items-center rounded-[25px] bg-white p-5 shadow-lg shadow-[#a5a6a6]'>
          <div className='flex gap-2 items-center'>
            <AiOutlineSearch className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here....' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor' />
          </div>

          <div className='flex gap-2 items-center'>
            <BsHouseDoor className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by company....' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor' />
          </div>

          <div className='flex gap-5 items-center'>
            <CiLocationOn className='text-[25px] icon' />
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by location....' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor' />
          </div>

          <button className='bg-blueColor h-full p-5 px-10 rounded-[50px] text-white cursor-pointer hover:bg-blue-300'>Search</button>
        </div>
      </form>

      <div className='secDiv flex flex-col gap-5 sm:flex-row sm:justify-between items-center'>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="relevance" className='text-[#333333] font-semibold'>Sort by:</label>
          <select name="" id="relevance" className='bg-white rounded-[30px] px-4 py-1'>
            <option value="" className='text-greyIsh'>-- select</option>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="distance" className='text-[#333333] font-semibold'>Distance:</label>
            <select name="" id="distance" className='bg-white rounded-[30px] px-4 py-1'>
            <option value="" className='text-greyIsh'>-- select</option>
            <option value="">Within 5 km</option>
            <option value="">Within 10 km</option>
            <option value="">Within 20 km</option>
            <option value="">Within 50 km</option>
        </select>
      </div>
      <div className='singleSearch flex items-center gap-2'>
      <label htmlFor="experience" className='text-[#333333] font-semibold'>Experience:</label>
      <select name="" id="experience" className='bg-white rounded-[30px] px-4 py-1'>
        <option value="" className='text-greyIsh'>-- select</option>
        <option value="">0-2 years</option>
        <option value="">2-5 years</option>
        <option value="">5-10 years</option>
        <option value="">10+ years</option>
      </select>
    </div>
  </div>
</div>
)
}

export default Search;