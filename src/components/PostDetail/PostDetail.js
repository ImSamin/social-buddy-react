import React, { useState, useEffect } from 'react';
import './PostDetail.css'
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    let {postId} = useParams();

    const [post , setPost] = useState([]);

    const {title, body} = post;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);

    const [comments, setComments] = useState([]);

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <Container maxWidth="sm" className="post-details">
            
            <div className="post-body">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            
            <div className="cmnt">
             <h1>Comments Section</h1>
            </div>

        

            {
                comments.map(comment =><Comments comment={comment}></Comments>)
            }
        </Container>
    );
};

export default PostDetail;