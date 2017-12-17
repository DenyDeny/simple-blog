import React, { Component } from 'react'

import '../styles/PostInfo.css'

import {
    Link
  } from 'react-router-dom'

class PostInfo extends Component {
    state = {
        desc: '',
        title: ''
    }

    componentWillMount() {
        const id = Number(this.getId())
        const { postList } = this.props
        for (let post of postList) {
            if (post.id === id) {
                this.setState({
                    desc: post.desc,
                    title: post.title
                })
            }
        }
    }

    // Получаем id открытой статьи
    getId() {
        return window.location.pathname.slice(6)
    }

    render() {
        const { desc, title } = this.state
        return (
        <div className="post-info">
            <Link to="/"><button className="post-info__btn">Назад</button></Link>
            <div className="post__content">
                <h3 className="post__title">{title}</h3>
                <p className="post__desc">{desc}</p>
            </div>
        </div>
        );
    }
}

export default PostInfo