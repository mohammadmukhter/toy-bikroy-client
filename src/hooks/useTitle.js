import { useEffect } from "react";

const useTitle = (title)=> {
    useEffect( ()=>{
        document.title = `ToyBikroy - ${title}`;
    },[title])
}

export default useTitle;