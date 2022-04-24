import {useEffect, useState} from "react";

import Post from "../components/Post";


function Posts() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((posts) => {
                setTimeout(() => {
                    setPosts(posts.slice(0, 30))
                    setLoading(false)
                }, 3000)
            });
    }, []);


    if(loading) return <div className="p-5">
        <span className="spinner-border" />
    </div>


    if(!posts) return <span>Sorry. No posts</span>


    return (
        <div className="container-lg d-flex flex-wrap">
            {
                posts.map(post => {
                    return <Post key={post.id} post={post} />
                })
            }
        </div>
    )
}


export default Posts;