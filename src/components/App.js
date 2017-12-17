import React, { Component } from 'react'

import { CSSTransitionGroup } from 'react-transition-group'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as postActions from '../actions/postAction'

import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Blog from './Blog'
import PostInfo from './PostInfo'

import '../styles/App.css'

class App extends Component {
  render() {
    const { addPost } = this.props.postActions
    const { postList} = this.props
    return (
      <CSSTransitionGroup
        transitionName="app-mounting"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <BrowserRouter>
          <div className="App">
              <Route 
                path='/info' 
                render={() => <PostInfo postList={postList}/>}/>
              <Route 
                exact path='/' 
                render={() => <Blog postList={postList} addPost={addPost}/>}/>
          </div>
        </BrowserRouter>
      </CSSTransitionGroup>
    );
  }
}

function mapStateToProps (state) {
  return {
    postList: state.postList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)