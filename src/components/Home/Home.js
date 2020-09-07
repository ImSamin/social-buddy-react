import React, { useEffect } from 'react';
import { useState } from 'react';
import Newsfeed from '../Newsfeed/Newsfeed';

const Home = () => {
    const [posts , setPosts] = useState([])

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Posts: {posts.length}</h1>
            {
                posts.map(post => <Newsfeed post={post}></Newsfeed>)
            }
        </div>
    );
};

export default Home;