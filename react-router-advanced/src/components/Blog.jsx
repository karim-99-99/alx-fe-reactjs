import React from "react";
import { Link } from 'react-router-dom';

const posts= [
    { id: 1, title: "React Router Basics" },
    { id: 2, title: "Understanding Dynamic Routing" },
    { id: 3, title: "Advanced React Query Features" }
];

function Blog () {

return(
    <div>
        <h1>Blog</h1>
        <ul>
            {posts.map((post) => (
<li key={post.id}>
    <Link to ={`/blog/${post.id}`}>{post.title}</Link>
</li>

           ) )}
        </ul>
    </div>
)
}
export default Blog;