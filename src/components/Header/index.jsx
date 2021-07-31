import React, { useRef, useCallback } from 'react'
import './index.css'
import { Input, Button } from 'antd';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

//对接收的props进行：类型、必要性的限制
Header.propTypes = {
  addHobby: PropTypes.func.isRequired
}

export default function Header(props) {
  console.log('Header--执行了');
  const { addHobby } = props;
  const curItem = useRef(null)
  const inputRef = useRef()

  const onAdd = useCallback(() => {
    if(!curItem.current) return
    addHobby(curItem.current)
    // 清空输入框
    inputRef.current.handleReset()
    // 清除缓存值
    curItem.current = null
  }, [addHobby])

  const onKeyup = useCallback((event) => {
    const { keyCode, target } = event
    if (target.value.trim() === '') return
    curItem.current = { id: nanoid(), hobby: target.value, done: false }
    if (keyCode === 13) onAdd()
  }, [onAdd])

  return (
    <div className='header'>
      <h2>MyHobbies</h2>
      <div className='headerBox'>
        <Input className='headerInput'
          placeholder="请输入你的爱好名称，按回车键确认"
          onKeyUp={onKeyup}
          ref={inputRef}
        />
        <Button onClick={onAdd} >添加</Button>
      </div>
    </div>
  )
}
