import React, { useState } from 'react'
import { RxImage, IoMdMore, MdAssignmentAdd, VscPreview, RiFileEditLine, AiFillDelete, BiShareAlt } from 'react-icons/all'
import { formData } from '../../constants/constant'
import { motion ,AnimatePresence } from 'framer-motion'
import { AddFormQuize ,EditQuize } from '../index'

// impor tour raw form data :
import { QuizeFormData } from '../../constants/rawform'




const FormQuize = () => {
  const [showAddFormModel, setShowAddFormModel] = useState(false);
  const [showAddEditModel , setShowAddEditModel] = useState(false)
  const a = [12, 3, 34, 44, 5, 56432, 324, 324, 21, 32, 32, 21,]
const [selectForm , setSelectForm] = useState(null)

const [quizeFormData , setQuizeFormData] = useState(QuizeFormData)
  // for creating the function for edit form 
  const handdleEditForm=(i)=>{
  setShowAddEditModel(true)
console.log(QuizeFormData[i])
setSelectForm(QuizeFormData[i])


  }

  // for delete the form ;
const handdleDeleteForm = (i)=>{
  let newArr = Array.from( quizeFormData) ;
newArr = newArr.filter((form)=>{return form != newArr[i]})
setQuizeFormData(newArr)
console.log("delete me")

}
  return (
    <>
   <div className="relative  z-0">
   <AnimatePresence >
      {showAddFormModel && (
   <div className="">
   <motion.div className={`${showAddFormModel && "absolute top-0 left-0 right-0 opacity-90 w-[100%] h-[100%] z-[10] backdrop-blur-2xl"}`} 
   
     //  blur animation start here :
  initial ={{opacity:0 }}
  animate={{opacity:1 ,zIndex:1 ,transition:{duration:0.8 , delay:0.3}}}
  exit={{opacity:0  ,transition:{duration:2 , delay:0}}}
   ></motion.div>
   <motion.div
    // className="z-10" 
  //  animation code of add model
  // initial={{y:"100vh"}}
  // animate={{y:10  , transition:{delay:0.3 , duration:3 , type:"spring", stiffness:120}}}
   
   >

        <AddFormQuize className="" quizeFormData={quizeFormData} setQuizeFormData={setQuizeFormData} setShowAddFormModel={setShowAddFormModel} />
        </motion.div>
        </div>
      )}

{showAddEditModel && selectForm &&(
  <div className="">
   <motion.div className={`${showAddEditModel && "absolute top-0 left-0 right-0 opacity-90 w-[100%] h-[100%] z-[10] backdrop-blur-2xl"}`}
   
  //  blur animation start here :
  initial ={{opacity:0 }}
  animate={{opacity:1  ,transition:{duration:1 , delay:0.3}}}
  exit={{opacity:0  ,transition:{duration:0.6 , delay:0}}}
   
   
   ></motion.div>
        <EditQuize className="" selectForm={selectForm} setSelectForm={setSelectForm} setShowAddEditModel={setShowAddEditModel} />
        </div>

)}


</AnimatePresence>
<div className="">


      <h1>this is form section</h1>
      <div className="flex justify-center">
      <div className="container w-min-300px grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-flow-cols-4 gap-2 ">
        {/* form box started here */}
        {quizeFormData.map((form, i) => (

          <motion.div key={i} className=" form-box bg-slate-100  rounded-2xl "
          // animation code start her
          initial={{y:-20 ,opacity:0}}
          animate={{y:0 , opacity:1, transition:{duration:1 , delay:0.5*i}}}
          
          
          >
            <div className="flex flex-col items-center justify-center">
              <div className="img text-9xl text-blue-200 "><RxImage /></div>
              <div className="title">{form.title}</div>
            </div>
            <div className="text-3xl flex justify-end"><span className='btn-cont space-x-1 text-2xl mb-2 mr-2 flex cursor-pointer'>
              <VscPreview className='inline text-cyan-600 ' /> <RiFileEditLine className='inline text-green-600' onClick={()=>handdleEditForm(i)} />
              <AiFillDelete className='inline text-red-400' 
              onClick={()=> handdleDeleteForm(i)} />
              <BiShareAlt className='text-blue-600' /></span> </div>
          </motion.div>


        ))}




      </div>
</div>
      <motion.button className='absolute left-0  top-16 ' drag>
        {/* Button for Add form*/}


        <MdAssignmentAdd className=' w-[60px] h-[60px] text-white drop-shadow-lg  bg-blue-400 rounded-full p-2    
  ' onClick={() => (setShowAddFormModel(true))} /></motion.button>
      {/* <button type="button" className="Create"><MdAssignmentAdd/></button> */}

      </div>
      </div>
    </>
  )
}

export default FormQuize
