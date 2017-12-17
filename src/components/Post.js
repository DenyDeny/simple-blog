import React from 'react'
import {
    Link
  } from 'react-router-dom'

const Post = ({title, desc, id}) => (
    <div className="post">
        <h3 className="post__title"><Link to={`/info/${id}`}>{title}</Link></h3>
        <p className="post__desc">{desc.length > 300 ? `${desc.slice(0, 300)}...` : desc}</p>
    </div>
);

export default Post