import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from '../context/GlobalContext';

const SinglePost = () => {

    const { id } = useParams();
    // const [post, setPost] = useState(
    //     {
    //         id: "",
    //         title: "",
    //         content: "",
    //         img: "",
    //         tags: []
    //     }
    // );
    // const url = import.meta.env.VITE_ENDPOINT_URL;

    const { post, fetchSingolPost } = useGlobalContext();

    useEffect(() => {
        // axios
        //     .get(url + "/" + id)
        //     .then((res) => setPost(res.data))
        //     .catch((err) => console.error(err));
        fetchSingolPost(id);
    }, [id])

    return (
        <h1>{post.title}</h1>
    )

};

export default SinglePost;