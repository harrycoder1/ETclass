import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdAssignmentAdd, RxImage, BsFillPersonPlusFill, IoPerson, BiEdit, RiDeleteBin6Line, GrFormView, MdDeleteForever } from 'react-icons/all'
import { Link } from 'react-router-dom'
import AddTeacher from './TeacherTeams/UpdateTeacher'
let a = [1, 2, 3, 4, 5, 6, 76]
const Home = () => {

  const [showModel, setShowModel] = useState(false)
  return (
    <>
      {/* for showing the Model */}
      {showModel && (





        <AddTeacher className="absolute top-0 " setShowModel={setShowModel} />


      )}

      {/* for creating the person page */}
      <div className="">
        <div className={`${showModel && "absolute top-[65px] left-0 right-0 opacity-90 w-[100%] h-[100%] z-[10] backdrop-blur-2xl"}`}></div>
        <div className={` pro-cont   mt-4 flex-row flex-wrap gap-2 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  z-0 `}>
          {a.map((q, i) => (
            <motion.div
              key={i}
              initial={{ x: "-50", opacity: 0 }}
              animate={{
                x: 0, opacity: 1, transition: {
                  delay: 0.5 * i,
                  duration: 0.5,


                }
              }}

              className=' h-[150px] bg-slate-100 flex flex-row   items-center justify-around rounded-md shadow-md '

            >
              {/* card inside data */}
              <div className="img text-8xl shrink " ><IoPerson /></div>
              <div className="detial">
                <div className="name" onCopy={() => { alert("you can not copy") }}
                  on>Name: Harish</div>
                <div className="email">
                  Email: harishjhedau@gmail.com</div>
                <div className="join">join at : 10-09-2020</div>
                <div className="text-end actions flex text-3xl space-x-4 mt-6">
                  <GrFormView className='cursor-pointer text-blue-400' />  <BiEdit className='cursor-pointer text-green-400 hover:text-green-700' /> <MdDeleteForever className='cursor-pointer text-red-400 hover:text-red-700' />
                </div>
              </div>

            </motion.div>
          ))}
          <motion.button className='absolute left-0  top-16 ' drag>
            {/* Button for Add Teacher*/}
            {/* <Link  to='/addteacher'> <BsFillPersonPlusFill className=' w-[60px] h-[60px] text-white drop-shadow-lg  bg-blue-400 rounded-full p-4    '  /></Link></motion.button> */}

            <BsFillPersonPlusFill className=' w-[60px] h-[60px] text-white drop-shadow-lg  bg-blue-400 rounded-full p-4  z-20  ' onClick={() => setShowModel(true)} /></motion.button>
        </div>

      </div>
    </>
  )
}

export default Home
