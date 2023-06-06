import React from 'react'
import blogs from './Blogs.json'
import './Blog.css'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div>
        <div style={{margin:'3rem', width: 400, maxWidth:'90vw'}}>
            <h1 className='gotham-black'>The CQD Blog</h1>
            <p className='gotham-bold'>We keep on top of the latest things happening in the care industry so you don't have to.</p>
        </div>
       
        <h3 style={{textAlign:'center'}} className='gotham-black'>Most recent articles</h3>
        <div id='blog-list'>
            {blogs.map((blog)=>{
                return (
                    <div className='blog-card'>
                        <img className='blog-card-img' src={blog.img} alt={blog.alt}/>
                        <div className='blog-card-info'>
                            <h2 className='gotham-black'>{blog.title}</h2>
                            <p className='gotham-bold'>{blog.description}</p>
                            <Link to={`${blog.id}`}>Read more</Link>
                        </div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}
