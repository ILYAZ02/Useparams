import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function AboutParams() {
  const [post, setPost] = useState()

  const { id } = useParams()
  useEffect(() => {
    const postId = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const json = await response.json()
      setPost(json);
    }
    postId()
  }, [])
  console.log(post)
  return (
    <div>
      <h3>{post?.title}</h3>
      <p style={{color: 'red'}}>{post?.id}</p>
    </div>
  )
}
