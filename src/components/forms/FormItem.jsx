import React, { useState ,useEffect } from 'react'
import { HiViewGridAdd } from 'react-icons/all'
let choise = [] ;
const FormItem = ({ FormItem }) => {
  const [message, setMessage] = useState([])
  const [choose, setChoose] = useState([])
  const { queType, name, type, value, placeHolders, handdleChange } = FormItem


  // for adding the qustions item
  const addQitem = (name) => {
    let qMsg = document.getElementById(name)
    console.log(qMsg.value)
    choise.push({ queMsg: qMsg.value })

    console.log(choise)
  }

  // for changing the question message
  const quechange = (e) => {
    setMessage(e.target.value);
  }

  const addQChoise = () => {
    // let qMsg = document.getElementById(name)

    // choise.push({ ans: "default"+i, correct: false });
    // console.log("dhh");
    setChoose([...choose ,{ ans: "default", correct: false }])
    // setMessage({choise});
    // alert("me")

    console.log(choose);
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

const onOpUpdate =(i)=>{
  let input = document.getElementById("op"+i)

// console.log(input.value);

// let andd = 
// setChoose([...choose ,{...choose[i] , ans :input.value}])

// let a =choose ;
// a.push()
let newArr = Array.from(choose) ;
//  console.log(.length)
//  algorithm for update the array elements :
for(let j=0 ;j<newArr.length ;j++ ){
if(j===i){
 console.log( newArr[j].ans) ;
newArr[j].ans =input.value
break ;
}

}
setChoose(newArr)

}
  return (
    <>
      {queType === "short" && (
        <input type={type} name={name} placeholder={placeHolders} className='w-[70%] min-w-[380px] px-3 py-2 outline-none rounded-md bg-slate-300 focus-within:text-slate-600 shadow-lg focus-within:drop-shadow-2xl m-2' onChange={handdleChange} value={value} />

      )}

      {queType === "mcq" && (
        <div className="">
          <div className="flex items-center">
            <input type={type} id={name} name={name} placeholder={placeHolders} className='w-[70%] min-w-[380px] px-3 py-2 outline-none rounded-md bg-slate-300 focus-within:text-slate-600 shadow-lg focus-within:drop-shadow-2xl m-2' onChange={quechange} value={message} />


            <button className='bg-orange-400 h-8 w-8 text-white p-2 rounded-full' type='button' onClick={()=>addQChoise()} ><HiViewGridAdd /></button>
          
          </div>
          {choose?.map((item, i) => (
   
        <input key={i} type={"text"} id={"op"+i} name={"op"+i}  className='w-[34%] min-w-[200px] px-3 py-2 outline-none rounded-md bg-red-200 focus-within:text-slate-600 shadow-lg focus-within:drop-shadow-2xl m-2' onChange={()=>onOpUpdate(i)} value={item.ans} />

      ))}


        </div>
      )}

      {/* {choose.push((item, i) => (
        <div className="" key={i + item.ans}> hello</div>


      ))} */}
    </>
  )
}

export default FormItem
