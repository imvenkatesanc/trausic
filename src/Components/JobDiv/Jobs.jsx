import React from "react"
import {BiTimeFive} from 'react-icons/bi'

import logo13 from '../../assets/logo13.png'
import logo12 from '../../assets/logo12.png'
import logo11 from '../../assets/logo11.png'
import logo10 from '../../assets/logo10.png'
import logo9 from '../../assets/logo9.png'
import logo8 from '../../assets/logo8.png'
import logo7 from '../../assets/logo7.png'
import logo6 from '../../assets/logo6.png'

const Data = [
    {
      "id": 1,
      "image": logo13,
      "title": "Network Engineer",
      "time": "now",
      "location": "San Francisco",
      "desc": "A description of event 1",
      "company": "Company Axx"
    },
    {
      "id": 2,
      "image": logo12,
      "title": "DevOps",
      "time": "1 day ago",
      "location": "Los Angeles",
      "desc": "A description of event 2",
      "company": "Company Bee"
    },
    {
      "id": 3,
      "image": logo11,
      "title": "Web Developer",
      "time": "2Hrs",
      "location": "New York",
      "desc": "A description of event 3",
      "company": "Company Cm"
    },
    {
      "id": 4,
      "image": logo10,
      "title": "React developer",
      "time": "9hrs",
      "location": "Chicago",
      "desc": "A description of event 4",
      "company": "Company Dl"
    },
    {
      "id": 5,
      "image": logo9,
      "title": "Js developer",
      "time": "just now",
      "location": "Houston",
      "desc": "A description of event 5",
      "company": "Company pE"
    },
    {
      "id": 6,
      "image": logo8,
      "title": "Project manager",
      "time": "19hrs",
      "location": "Miami",
      "desc": "A description of event 6",
      "company": "Company Fo"
    },
    {
      "id": 7,
      "image": logo7,
      "title": "WordPress Dev",
      "time": "30 Sec",
      "location": "Seattle",
      "desc": "A description of event 7",
      "company": "Company co",
    },
    {
      "id": 8,
      "image": logo6,
      "title": "Video creator",
      "time": "30 Sec",
      "location": "Seattle",
      "desc": "A description of event 7",
      "company": "Company do",
    },
    {
      "id": 1,
      "image": logo13,
      "title": "Network Engineer",
      "time": "now",
      "location": "San Francisco",
      "desc": "A description of event 1",
      "company": "Company Axx"
    },
    {
      "id": 2,
      "image": logo12,
      "title": "DevOps",
      "time": "1 day ago",
      "location": "Los Angeles",
      "desc": "A description of event 2",
      "company": "Company Bee"
    },
    {
      "id": 3,
      "image": logo11,
      "title": "Web Developer",
      "time": "2Hrs",
      "location": "New York",
      "desc": "A description of event 3",
      "company": "Company Cm"
    },
    {
      "id": 4,
      "image": logo10,
      "title": "React developer",
      "time": "9hrs",
      "location": "Chicago",
      "desc": "A description of event 4",
      "company": "Company Dl"
    },
    {
      "id": 5,
      "image": logo9,
      "title": "Js developer",
      "time": "just now",
      "location": "Houston",
      "desc": "A description of event 5",
      "company": "Company pE"
    },
    {
      "id": 6,
      "image": logo8,
      "title": "Project manager",
      "time": "19hrs",
      "location": "Miami",
      "desc": "A description of event 6",
      "company": "Company Fo"
    },
    {
      "id": 7,
      "image": logo7,
      "title": "WordPress Dev",
      "time": "30 Sec",
      "location": "Seattle",
      "desc": "A description of event 7",
      "company": "Company co",
    },
    {
      "id": 8,
      "image": logo6,
      "title": "Video creator",
      "time": "30 Sec",
      "location": "Seattle",
      "desc": "A description of event 7",
      "company": "Company do",
    }
  
]


const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
     {
      Data.map(({id,image,title,time,location,desc,company})=>{
        return (
          <div key={id} className="group group/item singleJob w-full sm:w-[250px] p-[20px] bg-[#b8c7cd] rounded-[10px] hover:bg-blueColor shadow-lg shadow-[#dbdfdf] hover:shadow-lg">
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
              <span className='flex items-center text-[#a5a6a6] gap-1'>
                <BiTimeFive/>{time}
              </span>
          </span>
          <h6 className='text-[#a5a6a6]'>{location}</h6>
          <p className='text-[13px] text-[#959595] opacity-[10] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>
          <div className='company flex items-center gap-2'>
            <img src={image} alt="Company Logo" className='w-[10%]' />
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
          </div>
          <button className='border-[2px] border-[#a5a6a6] border-opacity-40 rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
            Apply Now
          </button>
        </div>
        
        )
      })
     }
      </div>
    </div>
  )
}

export default Jobs
