

const Post = ({ post }) => {
    return (
        <div className="post">
            <h3>{post.title}</h3>
            <div className="postDetails">
                <p>from {post.author} • {post.date} • {post.time}</p>
                <p>{post.description}</p>
                <div className="postFooter">
                    <span>8h</span>
                    <span>3</span>
                    <button>Answer</button>
                </div>
            </div>
        </div>
    )
}

function PostList() {
    const posts = [
        {
            title: "Overproduction during the day, looking for storage tips",
            author: "maxmu",
            date: "15 Oct 2023",
            time: "09:42",
            description: "Due to a sunny hillside location, some of our members in beautiful Carinthia produce more electricity than we can use. Now we are looking for good tips for storage systems."
        },
        
    ];

    return (
        <div className="postList">
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
}

export default PostList;