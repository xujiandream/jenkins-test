import React, { useCallback } from 'react'
import './index.css'
import { Button } from 'antd';
export default function Detail(props) {
  console.log('datail组件被执行了');
  console.log(props);
  const { state } = props.location
  const goForward = useCallback(
    () => {
      props.history.goForward()
    },
    [props],
  )
  const goBack = useCallback(
    () => {
      props.history.goBack()
    },
    [props],
  )
  return (
    <div className='detail'>
      {state}
      <span>
        <Button onClick={goForward}>前进</Button>
        <Button onClick={goBack}>后退</Button>
      </span>
    </div>
  )
}
