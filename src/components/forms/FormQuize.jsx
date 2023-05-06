import React,{useState} from 'react'
import {RxImage ,IoMdMore ,MdAssignmentAdd,VscPreview ,RiFileEditLine ,AiFillDelete,BiShareAlt} from 'react-icons/all'
import { formData } from '../../constants/constant'
import { motion } from 'framer-motion'
import {AddFormQuize} from '../index'
// const format ={
//   title:"",
// img:"this.jpg"
//   description:"",formMakerEmail:"",
//   questions:[{
//     queMsg:"",

//     answers:[
//       { value: "human",
//       correct: false,}
//     ] ,
    

//   }]
// }
const FormQuize = () => {
  const [showAddFormModel ,setShowAddFormModel] = useState(false) ;
  const a =[12,3,34,44,5,56432,324,324,21,32,32,21,]
  return (
    <>
    {showAddFormModel && (

      <AddFormQuize setShowAddFormModel={setShowAddFormModel} />
    )}



        <h1>this is form section</h1>
      <div className="container grid grid-cols-2 gap-2">
{/* form box started here */}
{a.map((item , i)=>(

<div key={i} className="form-box bg-slate-300  rounded-2xl ">
  <div className="flex flex-col items-center justify-center">
  <div className="img text-9xl  "><RxImage /></div>
  <div className="title">{formData.title}</div>
  </div>
  <div className="text-3xl flex justify-end"><span className='btn-cont space-x-1 text-2xl mb-2 mr-2 flex cursor-pointer'>
    <VscPreview className='inline text-cyan-600 '/> <RiFileEditLine className='inline text-green-600' />
     <AiFillDelete className='inline text-red-600' />
    <BiShareAlt className='text-blue-600' /></span> </div>
</div>

))}




      </div>

      <motion.button className='absolute left-0  top-16 ' drag>
            {/* Button for Add form*/}
          

            <MdAssignmentAdd className=' w-[60px] h-[60px] text-white drop-shadow-lg  bg-blue-400 rounded-full p-4  z-20  ' onClick={()=>(setShowAddFormModel(true))} /></motion.button>
      {/* <button type="button" className="Create"><MdAssignmentAdd/></button> */}
    </>
  )
}

export default FormQuize
