import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'
export default function index(props) {
  return (
    <NavLink activeClassName='activeNavlink' className='navlink' {...props} style={{marginRight: '23px'}}></NavLink>
  )
}
