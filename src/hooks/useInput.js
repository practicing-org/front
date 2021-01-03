import {useState,useCallback} from "react"

function useInput(initValue=""){
    const [value,setValue] = useState(initValue);
    const onChange = useCallback((e)=>{
        setValue(e.target.value);
    },[])
    return [value,setValue,onChange];
}

export default useInput;