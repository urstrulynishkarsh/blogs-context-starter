import { createContext, useEffect, useState } from "react"
import { baseUrl } from "../baseUrl";




export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [category, setCategory] = useState('');
    const [isDark, setIsDark] = useState(false);
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);


    // data filling pending

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`
        try{
            const result = await fetch(url)
            const data = await result.json();
            console.log(data)
            setPosts(data.posts)
            setPage(data.page)
            setTotalPages(data.totalPages)




            
        }
        catch(error)
        {
            console("Something went wrong fetching")
            setPosts([])
            setPage(1)
            setTotalPages(null)
        }
        setLoading(false)
    }

    function handlePageChanger(page){
        setPage(page)
        fetchBlogPosts(page)

    }
    useEffect(()=>{
        fetchBlogPosts()
    },[])

// object value of a data
    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        category,
        setCategory,
        setIsDark,
        isDark,
        handlePageChanger
    };




    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
    
}

