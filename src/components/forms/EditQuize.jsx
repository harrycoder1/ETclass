import React, { useEffect, useState } from 'react'
import FormItem from './FormItem'
import {IoAddSharp ,CgCloseR} from 'react-icons/all'

const EditQuize = ({selectForm ,setSelectForm ,setShowAddEditModel}) => {
let myForm = selectForm ;
// let myQuestions = selectForm.questions
const [myQuestions ,setMyQuestions] =useState(selectForm.questions)
    // console.log("i in edit form")
    // console.log(selectForm)

    const handdleChange =(e)=> {
setSelectForm({...selectForm ,[e.target.name]:e.target.value })
        // console.log()
      }
    
useEffect(()=>{
setSelectForm({...selectForm , questions:myQuestions})

// console.log("Use Effect running inside the edit")

},[myQuestions])
    const formItem =[{
        type:"text", //short answer or mcu
        name:"title",
        value:selectForm.title,
        placeHolders:"Enter the title",
        handdleChange:handdleChange,
        queType:"short" //short or mcu
    },
    {
        type:"text", //short answer or mcu
        name:"description",
        value:selectForm.description,
        placeHolders:"Enter the desciption",
        handdleChange:handdleChange,
        queType:"short" //short or mcu
    },
    {
      type:"email", //short answer or mcu
      name:"formMakerEmail",
      value:selectForm.formMakerEmail,
      placeHolders:"Enter owner Email",
      handdleChange:handdleChange,
      queType:"short" //short or mcu
    },
    
    
    ]

const handdleSubmitForm=(e)=>{
    e.preventDefault();
  // console.dir("ok submit edit")


  console.log(selectForm)
  }
    
  return (
    <>
      <div className="absolute z-10 right-0 left-0 flex justify-center items-center py-4  ">
{/* for making the blur background */}
      <div className="relative bg-slate-100 px-4 m-12 py-4 rounded-md shadow-2xl  ">
<h1 className='text-center text-4xl text-[#85a8ff] font-extrabold drop-shadow-3xl '>Update Quize</h1>

<form onSubmit={handdleSubmitForm} className='flex flex-col w-[100%] min-w-[340px]  md:mt-0 lg:ml-0 xl:ml-0  border-3 border-red-500 border-solid  items-start' >

{formItem.map((item,i) =>(
    <FormItem key={i} FormItem = {item} />

))}


  <FormItem  FormItem = {{queType:"mcq"}} choose={myQuestions} setChoose={setMyQuestions} />


{/* <button type='button' className='bg-green-600 text-white flex justify-center items-center rounded-full shadow-2xl hover:bg-green-400 hover:drop-shadow-2xl 
 text-2xl w-8 h-8' onClick={()=>setShowhowFormItem(true)}><IoAddSharp /> </button> */}

<button type='submit' className='bg-blue-400 px-3 py-2 rounded-md text-lg my-2  hover:drop-shadow-2xl font-mono font-semibold text-blue-100 hover:bg-green-50 hover:text-blue-900 shadow-2xl
' >Save Changes</button>
</form>

      {/* for close the button */}
      <button className='absolute top-2 right-2  text-2xl text-red-300 hover:text-red-500 hover:bg-red-200 peer/close' onClick={()=>setShowAddEditModel(false)}><CgCloseR/>
      </button>

      {/* for hover the button context */}
      <div className="absolute top-8 right-5  md:right-[-85px] hidden   peer-hover/close:flex">

      <span className='  bg-gray-50 shadow-md  font-thin py-2 px-4 rounded-full rounded-tr-none  md:rounded-full md:rounded-tl-none '>close Form</span>
      </div>
      
      </div>
      
      </div>
    </>
  )
}

export default EditQuize
