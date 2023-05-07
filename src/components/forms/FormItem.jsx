import React, { useState, useEffect } from 'react'
import { HiViewGridAdd, IoAddSharp, CgCheckR, MdDeleteForever, MdPlaylistRemove } from 'react-icons/all'
let choise = [];
let option = [];
// const OpBox =({choose})=>{
//  return( choose?.forEach((v,i)=>(v.answers?.forEach((vv,j)=>(
// console.log(vv)
//     )))) )}


const FormItem = ({ FormItem, choose, setChoose }) => {
  const [message, setMessage] = useState([])
  // const [choose, setChoose] = useState([{
  //   queMsg: "dfsfds",

  //   answers: [
  //     {
  //       value: "",
  //       correct: false,
  //     }
  //   ],

  // }])
  const { queType, name, type, value, placeHolders, handdleChange } = FormItem
  // const iresponce = Array.from(choose) //for choose the responce
  // sturcture
  // [{
  //   queMsg:"dfsfds",

  //   answers:[
  //     { value: "",
  //     correct: false,}
  //   ] ,

  // }
  // for adding the qustions item
  const addQitem = (name) => {
    let qMsg = document.getElementById(name)
    console.log(qMsg.value)
    setChoose([...choose, { queMsg: qMsg.value }]);
    // choise.push({ queMsg: qMsg.value })
    // for (let j = 0; j < choose.length; j++) {
    //   const element = choose[j];

    // }

    console.log(choise)
  }

  // for changing the question message
  const quechange = (index) => {

    let newArr = Array.from(choose)
    let qMsg = document.getElementById("que" + index)
    for (let j = 0; j < newArr.length; j++) {
      if (j === index) {
        newArr[j].queMsg = qMsg.value;
        console.log("message has been change sucessFully!")
        break;
      }

    }
    setChoose(newArr)

    // setChoose([...choose]);
    // for (let j = 0; j < choose.length; j++) {


    // }
  }

  const addQChoise = (index) => {
    // this function basically use for add the choises box for perticular index
    // index ---> question index 

    // let qMsg = document.getElementById(name)

    // choise.push({ ans: "default"+i, correct: false });
    // console.log("dhh");
    // setChoose([...choose, { queMsg: "hjasdh", answers: { ans: "default", correct: false } }])
    let newArr = Array.from(choose);
    for (let i = 0; i < newArr.length; i++) {
      if (i === index) {
        newArr[i].answers.push({ value: "", correct: false });
        break;
      }

    }

    setChoose(newArr)
    // setMessage({choise});
    // alert("me")
    console.log(choose[index].answers.length)
    // console.log(choose);
  }
  // let i=0 ;

  // for test purpose
  // const map1 = new Map([
  //   ['name', 'bobby hadz'],
  //   ['numbers', [1, 2]],
  //   ['address', {country: 'Chile'}],
  // ]);

  // Map(3) {
  //   'name' => 'bobby hadz',
  //   'numbers' => [ 1, 2 ],
  //   'address' => { country: 'Chile' }
  // // }
  // console.log(map1);

  // map1.set('address', {...map1.get('address'), city: 'Santiago'});

  // 👇️️ {country: 'Chile', city: 'Santiago'}
  // console.log(map1.get('address'));

  const onOpUpdate = (i, index, btn) => {
    let input = document.getElementById(`op${index}${i}`)
    let coret = document.getElementById(`correct${index}${i}`)
    let bool = (coret.value === "true") || false
    let newArr = Array.from(choose);
    //  console.log(.length)
    //  algorithm for update the array elements :
    for (let j = 0; j < newArr.length; j++) {
      if (j === index) {
        //  console.log( newArr[j].ans) ;
        console.log(newArr)
        newArr[j].answers[i].value = input.value
        // for check button then execute
        btn && (

          newArr[j].answers[i].correct = !bool
        )
        break;
      }

    }
    setChoose(newArr)
    console.log(choose)
    console.log(typeof (coret.value))

  }

  const addQuestion = () => {

    let newArr = Array.from(choose);

    setChoose([...choose, {
      queMsg: "question...",

      answers: [
        {
          value: "default",
          correct: false,
        }
      ],

    }])
    console.log("add question!")
  }
  //  let bc = Array.from(choose.answers)

  // [choose.answers].forEach((v)=>{console.log(v)})

  // console.log(choose.answers)
  const deleteOption = (i, index) => {
    // const newNote =notes.filter((note)=>{return note._id !==id})
    let newArr = Array.from(choose);

    newArr[index].answers = newArr[index].answers.filter((que) => { return que !== newArr[index].answers[i] })
    setChoose(newArr)
    console.log("delete")
  }
  const deleteQuestion = (index) => {
    let newArr = Array.from(choose);

    newArr = newArr.filter((que) => { return que !== newArr[index] })
    setChoose(newArr)

    console.log("question delete")
  }
  return (
    <>
      {queType === "short" && (
        <textarea type={type} name={name} placeholder={placeHolders} className='w-[100%] min-w-[280px] px-3 py-2 flex-grow outline-none rounded-md bg-slate-300  bg-opacity-40 focus-within:text-slate-600 shadow-lg focus-within:drop-shadow-2xl my-2 mx-0' onChange={handdleChange} value={value} />

      )}



      {(queType == "mcq") && (
        <div className="">
          <div className="">
            {/* // for show the all forms */}
            {choose?.map((item, index) => (
              <div className="relative" key={`question${index} `}>

                {/* Button for delete the question :*/}
                <button type='button' className=' absolute top-2  z-10 right-11 text-lg text-red-400 bg-white p-1 bg-opacity-40 rounded-md hover:bg-red-400 hover:text-white peer/deleteque' onClick={() => deleteQuestion(index)}><MdPlaylistRemove /></button>
                <div className="absolute hidden z-10 top-[-15px] right-0 bg-white bg-opacity-40 p-1 text-xs text-gray-500 font-mono font-light rounded-md peer-hover/deleteque:block ">delete the question {index+1}</div>

                <div className="  peer-hover/deleteque:bg-red-100  peer-hover/deleteque:bg-opacity-30 my-2 px-3 roun peer-hover/deleteque:shadow-sm peer-hover/deleteque:shadow-red-100 peer-hover/deleteque:rounded-lg" >
                  <div className=" flex items-center justify-between relative ">
                    <div className="flex flex-grow relative">
                      <textarea type={type} id={"que" + index} name={"que" + index} placeholder={placeHolders} className='pt-4 pb-2 w-[70%] min-w-[280px]   outline-none flex-grow rounded-md bg-slate-300 opacity-40 focus-within:text-slate-600 shadow-lg focus-within:drop-shadow-2xl m-2 mx-0 peer/inputbox' onChange={() => quechange(index)} value={item.queMsg} />
                      {/* for delete button for question delete */}
                      {/* <button type='button' className=' absolute top-2 right-0 text-lg text-red-500 bg-white p-1 bg-opacity-40 rounded-md hover:bg-red-400 hover:text-white peer/deletQue' onClick={deleteQuestion(index)}><MdPlaylistRemove /></button> */}
                      <div className=" hidden absolute left-[-10px] top-[-10px] md:left-[-35px] md:top-1/3 bg-blue-100 p-1 rounded-full text-sm shadow-md peer-focus-within/inputbox:block peer-focus/inputbox:bg-green-200 ">Q.{index + 1}</div>
                    </div>
                    {/* for question number dispale */}



                    <button className='bg-slate-200 peer/choise hover:shadow-md h-8 w-8 text-blue-300 p-2 rounded-md  hover:drop-shadow-2xl ' type='button' onClick={() => addQChoise(index)} ><HiViewGridAdd /></button>
                    {/* add option label : */}
                    <div className="absolute w-[80px] bottom-[-30px] right-2 top-[50px] h-fit hidden peer-hover/choise:block bg-gray-50 shadow-md  font-thin py-1 px-1 rounded-lg rounded-tr-none  md:rounded-lg md:rounded-tr-none z-20 text-xs bg-opacity-30 ">Add options</div>
                  </div>
                  {/* this for options  */}
                  <div className="  grid grid-cols-1 md:grid-cols-2   space-x-2 space-y-2">
                    <div className='hidden'></div>
                    {/* #########=========for Option Section ======######## */}
                    {(choose[index].answers).map((item, i) => (

                      <div className="relative flex flex-row items-center " key={`${i}+"op"+${index}`}>
                        {/* for opions box will show here ! */}
                        <input key={`${i}+"op"+${index}`} type={"text"} id={`op${index}${i}`} name={`op${index}${i}`} className={` w-[50%]  min-w-[250px] px-3 py-2 outline-none rounded-md focus-within:text-slate-600 shadow-lg focus-within:drop-shadow-2xl my-2 rounded-r-none 
                ${item.correct === true ? ("bg-green-200") : ("bg-red-100 ")}
                `} onChange={() => onOpUpdate(i, index)} value={item.value} />

                        <button id={`correct${index}${i}`} className={` ${item.correct === true ? ("bg-green-200 text-green-500") : ("bg-red-100 text-red-500")}    my-2 py-3 pr-2 rounded-r-md peer/optionshow`} value={item.correct} type="button" onClick={() => onOpUpdate(i, index, true)}> <CgCheckR /></button>
                        <div className="absolute bottom-0 right-0 md:bottom-[-20px] md:right-[-15px] px-2 hidden py-2 cursor-pointer   text-red-300  
                      hover:text-red-500
                      hover:block peer-hover/optionshow:block text-2xl" onClick={() => deleteOption(i, index)}><MdDeleteForever /></div>
                      </div>

                    ))}
                  </div>






                </div>


              </div>
            )
            )}

          </div>
          <button className='bg-gray-400 hover:bg-white shadow-md hover:drop-shadow-2xl text-white hover:text-green-800 text-lg p-2 rounded-md peer/addQuestion' type='button' onClick={() => addQuestion()}  >ADD Question <IoAddSharp className='inline' /></button>
          <div className='relative hidden peer-hover/addQuestion:block '>
            <div className="bg-gray-100 text-sm bg-opacity-60 px-2 rounded-lg py-1 shadow-xl absolute top-1">clik to add more question in form</div></div>
        </div>
      )

      }



      {/* {queType === "mq" &&


        (

          <div className="">
            <div className="flex items-center">
              <input type={type} id={name} name={name} placeholder={placeHolders} className='w-[70%] min-w-[380px] px-3 py-2 outline-none rounded-md bg-slate-300 focus-within:text-slate-600 shadow-lg focus-within:drop-shadow-2xl m-2' onChange={() => quechange(1, name)} value={message} />


              <button className='bg-orange-400 h-8 w-8 text-white p-2 rounded-full' type='button' onClick={() => addQChoise()} ><HiViewGridAdd /></button>

            </div>
            {choose?.map((item, i) => (

              <input key={i} type={"text"} id={"op" + i} name={"op" + i} className='w-[34%] min-w-[200px] px-3 py-2 outline-none rounded-md bg-red-200 focus-within:text-slate-600 shadow-lg focus-within:drop-shadow-2xl m-2' onChange={() => onOpUpdate(i)} value={item.ans} />

            ))}


          </div> */}
      {/* )} */}

      {/* {choose.push((item, i) => (
        <div className="" key={i + item.ans}> hello</div>


      ))} */}
    </>
  )
}

export default FormItem
