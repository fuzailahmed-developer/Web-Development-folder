import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from '../config/axios'

// create context 

export const MyContext = createContext()


// provide context

export const MyContextProvider = ({ children }) => {

    const [newsData, setNewsData] = useState([])
    const apiKey = import.meta.env.VITE_API_URL
    const [category, setCategory] = useState('ai')
    const [search, setSearch] = useState('')
    const [loader,setLoader] = useState(false)

    const fetchNews = async () => {
        setLoader(true)
        try {
            const { data } = await api.get(`/everything?q=${category}&apiKey=${apiKey}`)
            { data && setNewsData(data.articles) }
        } catch (error) {
            console.log(error)
        } finally{
            setLoader(false)
        }
    }



    const filterData = useMemo(() => {
        return newsData.filter(news =>
            news?.author?.toLowerCase().includes(search.toLowerCase())
        )
    }, [newsData, search])


    useEffect(() => {
        fetchNews()
    }, [category])


    return (
        <MyContext.Provider value={{ filterData, setCategory, search, setSearch , loader}}>
            {children}
        </MyContext.Provider>
    )

}

// use context 

export const useMyContext = () => useContext(MyContext)