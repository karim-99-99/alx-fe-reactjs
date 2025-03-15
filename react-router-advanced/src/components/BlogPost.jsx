import React from "react";
import { useParams } from "react-router-dom";


const postDetails = {
    1: "This is a guide to React Router Basics.",
  2: "Dynamic Routing allows us to create flexible applications.",
  3: "Advanced React Query helps in caching and state management."
}

function BlogPost() {
    const {postId} = useParams();
return (
    <div>
        <h2>Blog Post #{postId}</h2>
        <p>{postDetails[postId]}</p>
    </div>
)

}

export default BlogPost;