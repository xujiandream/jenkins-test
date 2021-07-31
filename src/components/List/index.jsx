import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from '../../containers/Item'
//对接收的props进行：类型、必要性的限制
List.propTypes = {
  todos: PropTypes.array.isRequired
}

export default function List(props) {
  console.log('List--执行了');
  const { todos } = props
  return (
    <ul className='list'>
      {
        todos.map((todoObj) => {
          return <Item key={todoObj.id} todoObj={todoObj}></Item>
        })
      }
    </ul>
  )
}