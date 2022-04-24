function Post({post}) {
    return (
        <figure className="p3 m-2">
            <img src={post.thumbnailUrl} alt=""/>
            <figcaption>post.title</figcaption>
        </figure>
    )
}


export default Post;