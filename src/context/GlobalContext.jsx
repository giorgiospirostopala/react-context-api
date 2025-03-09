import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [posts, setPosts] = useState(null);

    const url = import.meta.env.VITE_ENDPOINT_URL;

    const fetchPosts = () => {
        axios
            .get(url)
            .then((res) => setPosts(res.data))
            .catch((err) => console.error(err));
    };

    const initialObjectPost = {
        id: '',
        title: '',
        content: '',
        image: '',
        tags: [],
    };

    const [post, setPost] = useState(initialObjectPost);

    const fetchSingolPost = (index) => {
        axios
            .get(url + '/' + index)
            .then((res) => setPost(res.data))
            .catch((err) => console.error(err));
    };

    const value = {
        posts,
        post,
        fetchPosts,
        fetchSingolPost,
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };