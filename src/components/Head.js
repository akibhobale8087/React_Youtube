import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import { toggleMenu } from '../utils/appSlice';
// import { YOUTUBE_SEARCH_API } from '../utils/constant';
import useSeachHook from "../Hooks/useSearchHook";
const Head = () => {

   const [searchQuery,setSearchQuery] = useState("");
   const [showSuggestions,SetShowSuggestions] = useState(false);
 
  // console.log(searchQuery);

  // useEffect(()=>{
  //  const timer =  setTimeout(()=>getSearchSugeestions(),200);
    
  //  return ()=>{
  //   clearTimeout(timer);
  //  }
  // },[searchQuery]);

  // const getSearchSugeestions = async () =>{
  //   const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //   const json = await data.json();
  //   console.log(json);
  // }

  let suggestions = useSeachHook(searchQuery);

  let dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());

  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img onClick={()=> toggleMenuHandler()} alt="menu" className='h-8 cursor-pointer' src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"/>
        <img alt="youtube-logo" className='h-8' src="data:image/png;base64,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"></img>
        </div>
        <div className='col-span-10 mx-2 px-10'>
          <div className="flex h-11">
            <div className=" flex w-[30rem] border-2 border-solid p-2 rounded-l-full">
            <input className="w-[29rem] p-2 rounded-l-full outline-none border-none" type="text" 
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=> SetShowSuggestions(true)}
            onBlur={()=> SetShowSuggestions(false)}
            
            ></input>
              {searchQuery && (
                <h1
                  onClick={() => setSearchQuery("")}
                  className="mx-1 p-1 opacity-50 hover:bg-slate-200 rounded-full cursor-pointer"
                >
                  X
                </h1>
              )}
            </div>
            <button className='border border-gray-400 p-2 rounded-r-full'>🔍</button>
          </div>
         
         {showSuggestions && ( 
         <div className="fixed bg-white py-2 px-3 w-[25rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {suggestions.map(suggestion => 

                    
              <li key={suggestion} className="flex mx-2 my-2 p-1 shadow-sm rounded hover:bg-slate-100 cursor-pointer">🔍 {suggestion}</li>)
              }
            </ul>
          </div>
          )}
        </div>
        <div className='col-span-1'>
            <img alt="user-icon" className="h-8" src="data:image/png;base64,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"></img>
        </div>
    </div>
  )
}

export default Head;