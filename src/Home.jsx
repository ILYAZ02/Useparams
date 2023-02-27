import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Home(props) {
  return (
    <div>
       {props.state?.map((item) => (
        <div key={item.id}>
          <li>{item.title}</li>
          <NavLink style={{textDecoration: 'none', color: 'red'}} to={`/${item.id}`}><button>post by id</button></NavLink>
        </div>
      ))}
    </div>
  )
}
