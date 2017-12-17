import React, { Component } from 'react'

import { CSSTransitionGroup } from 'react-transition-group'

import Form from './Form.js'
import PostList from './PostList'


class Blog extends Component {
  render() {
    const { postList, addPost } = this.props
    return (
      <CSSTransitionGroup
        transitionName="app-mounting"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <Form postList={postList} addPost={addPost}/>
        <PostList postList={postList}/>
      </CSSTransitionGroup>
    );
  }
}

export default Blog