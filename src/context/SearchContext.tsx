import { createContext, useState } from "react";
import courses from "../data/courses.json"
const SearchContext=createContext(null)
const coursesList=courses
const SearchProvider=({children})=>{
      const [search, setSearch] = useState(coursesList);

    const data={search,setSearch}
    return(
        <SearchContext.Provider value={data}>
            {children}
        </SearchContext.Provider>
    )
}
export {SearchProvider}
export default SearchContext