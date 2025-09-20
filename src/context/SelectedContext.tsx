import { createContext, useState } from "react";

const SelectedContext=createContext(null)

const SelectedProvider=({children})=>{
      const [showElement, setShowElement] = useState({
        courseSelected:null,
        elementToShow:"description", });

    const data={showElement,setShowElement}
    return(
        <SelectedContext.Provider value={data}>
            {children}
        </SelectedContext.Provider>
    )
}
export {SelectedProvider}
export default SelectedContext