import React from 'react'
import { MenuTabs } from '../constants/constant'
import { Link } from 'react-router-dom'
import {CiImageOn} from 'react-icons/all'
const Base = () => {
  console.log(MenuTabs)
  // console.lo
  const { features ,title } = MenuTabs;
  return (

    <>
      <div className="cont flex flex-col lg:grid grid-cols-5 gap-2  ">



        <div className="layout-cont col-span-4 bg-slate-100 ">

          <div className="dasg-box h-[300px]">
            <h1>Dashboard</h1>
<div className="d">lorem5000</div>
           
          </div>

          <h1>{title}</h1>
          <div className="flex flex-row flex-wrap space-x-3 justify-center space-y-3">
         <div></div>
            {features.map((item, i) => (
              <div key={i}>
                    <Link to={item.path}>
                <div key={i} className="w-[200px] h-[200px] flex  flex-col bg-violet-400 rounded-2xl justify-center items-center relative hover:shadow-2xl ">
              <div className="img text-6xl"><CiImageOn /></div>
                    <h1  className='absolute bottom-5 text-xl bg-white px-3 py-1 rounded-full w-[90%] text-center shadow-lg'>{item.title}</h1>
                  
                </div>
                </Link>
              </div>
            ))}

          </div>


        </div>
        <div className="chat-box col-span-1 bg-pink-300 overflow-y-scroll h-[200px]">
          <h1>Im chat box</h1>
        
        </div>
      </div>
    </>
  )
}

export default Base
