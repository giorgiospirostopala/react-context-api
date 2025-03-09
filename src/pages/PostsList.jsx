import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const PostsList = () => {
    // const [posts, setPosts] = useState([]);

    // const url = import.meta.env.VITE_ENDPOINT_URL;

    const { posts, fetchSingolPost } = useGlobalContext();
    if (posts === null) {
        fetchSingolPost();
    }

    useEffect(() => {
        // axios
        //     .get(url)
        //     .then((res) => setPosts(res.data))
        //     .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <h1>Lista dei post</h1>
            <div className='container'>
                <div className='row'>
                    {posts.map((elem) => {
                        const { id, title, tags } = elem;

                        return (
                            <div className='col-4' key={id}>
                                <div className='card'>
                                    <div className='card-body'>

                                        <h5 className='card-title'>{title}</h5>
                                        <p className='card-text'>{tags}</p>

                                        <Link to={"/lista-dei-post/" + id}>
                                            <button>Apri</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default PostsList;