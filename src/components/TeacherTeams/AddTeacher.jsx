import React, { useEffect, useState } from 'react'
import { IoAdd, IoMdCloseCircleOutline, CgCloseR } from 'react-icons/all'
let rawAchievements = []; //for save achievement temparay
const AddTeacher = ({ setShowModel }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    achievement: []
  })

  //   const formData = {
  //     name:"",
  // age:"",
  // email:"",
  // achievement:[""]
  //   }

  const handlleClike = (e) => {
    e.preventDefault();
    alert("cliked Submite " + formData.name)
    console.log(formData)
  }
  const handleChange = (e) => {
    console.log("change....")
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handdleChangeAchivement = () => {
    let achievementa = document.getElementById("achievement")
    if (achievementa.value !== "") {
      rawAchievements.push(achievementa.value)

      // formData.achievement.push(achievement.value)
      setFormData({ ...formData, achievement: rawAchievements })
      console.log(rawAchievements)
      achievementa.value = ""
    }


  }

  const removeItemArray = (index) => {
    rawAchievements.splice(index, 1);
    setFormData({ ...formData, achievement: rawAchievements })
  }
  return (
    <>
      <div className="absolute  min-w-[340px] right-[5%] sm:right-[10%]
    md:right-[20%]  lg:right-[23%] w-[50%] z-20 shadow-xl ">
        <div className="form-cont relative w-auto">
          <button className="btn  absolute top-3  right-3 z-[4] text-xl text-red-400 drop-shadow-lg hover:bg-red-200 " onClick={() => setShowModel(false)}><CgCloseR /></button>
          <form onSubmit={handlleClike} className=' mt- flex flex-col items-center border-2 bg-gray-200 min-w-[320px] max-w-[100%] justify-center rounded-lg ' >
            <h1 className='font-mono font-semibold text-3xl mb-3 drop-shadow-lg text-cyan-600'>Add Teachar</h1>

            <input type="text" className=' py-3 px-3 text-lg bg-gray-300 rounded-lg shadow-lg m-2 outline-none  focus-within:drop-shadow-2xl w-[85%]' placeholder='Enter Teacher name ' name="name" value={formData.name} required onChange={handleChange} />

            <input type="text" className=' py-3 px-3 text-lg bg-gray-300 rounded-lg shadow-lg m-2 outline-none  focus-within:drop-shadow-2xl  w-[85%]' placeholder='Enter age' name="age" value={formData.age} onChange={handleChange} required />

            <input type="email" className=' py-3 px-3 text-lg bg-gray-300 rounded-lg shadow-lg m-2 outline-none  focus-within:drop-shadow-2xl  w-[85%]' placeholder='Emaill' name="email" value={formData.email} onChange={handleChange} required />
            {/* for creating the acievments */}
            <div className="flex flex-row items-center">
              <textarea type="text" id='achievement' className=' py-3 px-3 text-lg bg-gray-300 rounded-lg shadow-lg  m-2 outline-none  focus-within:drop-shadow-2xl  w-[80%]' placeholder='Add achivements' />
              <button type='button' className='bg-blue-500  hover:bg-blue-300 hover:drop-shadow-xl text-white p-2 text-2xl rounded-full ' onClick={handdleChangeAchivement}><IoAdd /></button>

            </div>
            <label htmlFor="profile" className='text-lg font-bold '>upload teacher Photo *</label>
            <input type="file" name="profile" id="profile" className='w-[200px]' required />
            {/* for display the Added achievemwnts */}
            <h3>achievements are :</h3>
            <div className="flex flex-wrap bg-blue-50 ">
              {

                formData.achievement.length === 0 ? (<h1 className='font-bold'>add achievement</h1>) :
                  formData.achievement?.map((achivement, i) => (
                    <div key={i} className='bg-slate-200 flex items-center justify-between p-1 px-3 my-2 rounded-full  ' >
                      <span>  {achivement}  </span>
                      <button type='button' onClick={() => removeItemArray(i)} className='text-2xl text-red-400 p-1 rounded-full   m-1'>
                        <IoMdCloseCircleOutline />
                      </button>
                    </div>

                  ))

              }
              {/* <li></li> */}
            </div>

            <button className='py-2 px-4 m-2 bg-cyan-300 text-lg font-mono rounded-lg hover:bg-green-400 text-white'
              type='submit'
            >Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddTeacher
