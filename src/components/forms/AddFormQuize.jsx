import React, { useEffect, useState } from 'react'
import {FormItem} from '../index'
import { formData } from '../../constants/constant';
import {IoAddSharp ,CgCloseR} from 'react-icons/all'

const AddFormQuize = ({setShowAddFormModel ,quizeFormData ,setQuizeFormData}) => {


const [showFormItem ,setShowhowFormItem] =useState(false)
  let [quest ,setQuest] =useState([{
    queMsg:"the value",

    answers:[
      { value: "",
      correct: false,}
    ] ,

  }] );

  // this is for store the question object
  const [choose, setChoose] = useState([{
    queMsg: "dfsfds",

    answers: [
      {
        value: "",
        correct: false,
      }
    ],

  }])


    const [dataForm , setDataForm] = useState({
        title :"",
        img:"", //for form img background
        description:"",
        formMakerEmail:"",
        questions:[{
            queMsg:"dfsfds",
        
            answers:[
              { value: "",
              correct: false,}
            ] ,
        
          }]
    }) ;

    useEffect(()=>{
      console.log("Im change here ")
      // save choose objt in quest state :
      setDataForm({...dataForm , questions:choose})
      console.log(dataForm)
        },[choose])
const handdleChangQueMsg =(e)=>{

}



    // for mcu question:
    const mcq ={
        queType:"mcq",
        // for question input
    typeIntput:"text",
    name:"queMsg",
    value:formData.queMsg ,
    titile:"question...."
    }
 
    // const dataform ={
    //     title :"",
    //     img:"",
    //     description:"",
    //     formMakerEmail:"",
    //     questions:[]
    // }
    const quenstion = {
            queMsg:"",
        
            answers:[
              { value: "",
              correct: false,}
            ] ,
        
          }
          const handdleChange =(e)=> {
            setDataForm({...dataForm ,[e.target.name]:e.target.value })
            console.log("hello" )
            console.log(dataForm)
          }

// format of form item 
const formItem =[{
    type:"text", //short answer or mcu
    name:"title",
    value:dataForm.title,
    placeHolders:"Enter the title",
    handdleChange:handdleChange,
    queType:"short" //short or mcu
},
{
    type:"text", //short answer or mcu
    name:"description",
    value:dataForm.description,
    placeHolders:"Enter the desciption",
    handdleChange:handdleChange,
    queType:"short" //short or mcu
},
{
  type:"email", //short answer or mcu
  name:"formMakerEmail",
  value:dataForm.formMakerEmail,
  placeHolders:"Enter owner Email",
  handdleChange:handdleChange,
  queType:"short" //short or mcu
},


]

// {
//   queType:"mcq",
//   // for question input
// type:"text",
// name:"queMsg",
// value:quest[0].queMsg ,
// placeHolders:"question....",
// handdleChange:handdleChangQueMsg
// }
// let form ={
//     type:"text",
//     name:"title",
//     value:
// }

const handdleSubmitForm=(e)=>{
  e.preventDefault();
  setQuizeFormData([...quizeFormData , dataForm])
  setShowAddFormModel(false)

console.dir(JSON.stringify( dataForm))
}
  return (
    <>
    <div className="absolute z-10 right-0 left-0 flex justify-center items-center py-4  ">
{/* for making the blur background */}
      <div className="relative bg-slate-100 px-4 m-12 py-4 rounded-md shadow-2xl  ">
<h1 className='text-center text-4xl text-[#85a8ff] font-extrabold drop-shadow-3xl '>Create Quize</h1>

<form onSubmit={handdleSubmitForm} className='flex flex-col w-[100%] min-w-[340px]  md:mt-0 lg:ml-0 xl:ml-0  border-3 border-red-500 border-solid  items-start' >

{formItem.map((item,i) =>(
    <FormItem key={i} FormItem = {item} />

))}


  <FormItem  FormItem = {{queType:"mcq"}} choose={choose} setChoose={setChoose} />


{/* <button type='button' className='bg-green-600 text-white flex justify-center items-center rounded-full shadow-2xl hover:bg-green-400 hover:drop-shadow-2xl 
 text-2xl w-8 h-8' onClick={()=>setShowhowFormItem(true)}><IoAddSharp /> </button> */}

<button type='submit' className='bg-blue-400 px-3 py-2 rounded-md text-lg my-2  hover:drop-shadow-2xl font-mono font-semibold text-blue-100 hover:bg-green-50 hover:text-blue-900 shadow-2xl
' >Create</button>
</form>

      {/* for close the button */}
      <button className='absolute top-2 right-2  text-2xl text-red-300 hover:text-red-500 hover:bg-red-200 peer/close' onClick={()=>setShowAddFormModel(false)}><CgCloseR/>
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

export default AddFormQuize
