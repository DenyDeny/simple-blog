import React, { Component } from 'react'

import { CSSTransitionGroup } from 'react-transition-group'

import Post from './Post'

import '../styles/Post.css'

class PostList extends Component {
    render() {
        const posts = this.props.postList.map( (post) => 
        <Post 
            key={post.id} 
            title={post.title} 
            desc={post.desc}
            id={post.id}
        />)
        return (
            <div className="posts-container">
                <CSSTransitionGroup
                    transitionName="post__animate"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                {posts}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default PostList