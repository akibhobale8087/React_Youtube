import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {addMessage} from "../utils/chatSlice";
import ChatMessage from './ChatMessage';
import {generate,makeid} from "../utils/helper";


const LiveChat = () => {

const [liveMessage,setLiveMessage] = useState("")
  const chatMessages = useSelector((store)=> store.chat.messages)

  const dispatch = useDispatch();
  useEffect(()=>{
    const i = setInterval(()=>{
      dispatch(addMessage({
        name:generate(),
        message:makeid(20)
      }))
    },1000)

    return ()=>clearInterval(i);
  },[])
  return (
    <>
    <div className='w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
      <div>
      {chatMessages.map((c,index) =>  
        <ChatMessage key={index} name={c.name} message={c.message}/>
      )}   

      </div>     
    </div>
    <form onSubmit={(e)=>{e.preventDefault(); dispatch(addMessage({name:"Akib",message:liveMessage}))}} className='w-full p-2 ml-2 border border-black'>
      <input className=' px-2 w-72' type="text"  value={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)}/>
      <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat