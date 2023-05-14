import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {YOUTUBE_SEARCH_API} from "../utils/constant";
import { chacheResults } from '../utils/searchSlice';


const useSearchHook = (searchQuery) => {
   
    const [searchData,setSearchData] = useState([]);
    const searchCache  = useSelector((store) => store.search);
    const dispatch = useDispatch();
    // console.log(searchQuery);
  
    useEffect(()=>{
     const timer =  setTimeout(()=>{
      if(searchCache[searchQuery]) {
        setSearchData(searchCache[searchQuery]);
      } else {
        getSearchSugeestions();
       }
    },200);
      
     return ()=>{
      clearTimeout(timer);
     }
    },[searchQuery]);
  
    const getSearchSugeestions = async () =>{
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSearchData(json[1]);
      dispatch(chacheResults({
        [searchQuery]:json[1]
    }))
      //  console.log(searchData);
    }

    return searchData;
}

export default useSearchHook;