import {useDispatch } from "react-redux";
import { setAcitveSection } from "../counter/ActiveSectionSlice";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useActiveSection=(section,threshold=0.5)=>{
    const dispatch=useDispatch()
    
    const {ref,inView}=useInView({
        threshold:threshold
    })
    useEffect(()=>{
        if(inView){
            dispatch(setAcitveSection(section))
        }
    },[inView,section,dispatch,ref])
    return {ref}
}
export default useActiveSection