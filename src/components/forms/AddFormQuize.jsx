import React, { useState } from 'react'
import {FormItem} from '../index'
import { formData } from '../../constants/constant';
import {IoAddSharp} from 'react-icons/all'
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
 
// let myquest =[{
//   queMsg:"the value",

//   answers:[
//     { value: "",
//     correct: false,}
//   ] ,

// }] 
const AddFormQuize = ({setShowAddFormModel}) => {
const [showFormItem ,setShowhowFormItem] =useState(false)
  let [quest ,setQuest] =useState([{
    queMsg:"the value",

    answers:[
      { value: "",
      correct: false,}
    ] ,

  }] );

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
  return (
    <>
    
<form  className='flex flex-col' >
{formItem.map((item,i) =>(
    <FormItem key={i} FormItem = {item} />

))}

{showFormItem &&(
  <FormItem  FormItem = {{queType:"mcq",
  // for question input
typeIntput:"text",
name:"queMsg",
value:"bb" ,
titile:"question...."}} />
)}

<button type='button' className='bg-green-600 text-white flex justify-center items-center rounded-full shadow-2xl hover:bg-green-400 hover:drop-shadow-2xl 
 text-2xl w-8 h-8' onClick={()=>setShowhowFormItem(true)}><IoAddSharp /> </button>


</form>

      {/* for close the button */}
      <button onClick={()=>setShowAddFormModel(false)}>closeme</button>
    </>
  )
}

export default AddFormQuize
