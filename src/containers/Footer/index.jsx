//引入actionCreator，专门用于创建action对象
import { checkAllItem, cancelAllCheckItem, updateCheckItem } from '../../redux/actions/item'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
/* ******定义UI组件(Footer组件)****** */
import React, { useCallback, useRef } from 'react'
import './index.css'
import { Button, Checkbox } from 'antd'

const Footer = (props) => {
  console.log('Footer--执行了');
  const {
    todos,
    checkedItemsArry,
    items,
    checkAllItem,
    cancelAllCheckItem,
    updateCheckItem,
    deleteHobby
  } = props
  
  console.log("Footer--items:", items.length, "checkedItemsArry", checkedItemsArry.length);
  const footerRef = useRef()
  footerRef.current = { isChecked: false, btnDisabled: true }
  let { isChecked, btnDisabled } = footerRef.current
  // 删除所有选中项
  const deleteAllCheckedItems = useCallback(
    () => {
      const deitems = items.filter(parentItem => !(checkedItemsArry.includes(parentItem)))
      deleteHobby(deitems)
      cancelAllCheckItem([])
    },
    [items,checkedItemsArry,deleteHobby,cancelAllCheckItem]
  )
  // 全选框状态发生变化时进行数据增删操作
  const checkChange = useCallback(
    (e) => {
      if (e.target.checked) {
        checkAllItem(items)
      } else {
        cancelAllCheckItem([])
      }
    },
    [checkAllItem, cancelAllCheckItem, items]
  )
  // 控制全选按钮状态
  if (items.length>0 && checkedItemsArry.length === items.length) {
    isChecked = true
  } else {
    isChecked = false
  }
  // 更新选中数据
  if (checkedItemsArry.length > items.length) {
    const deitem = checkedItemsArry.filter(parentItem => items.some(childItem => parentItem.id === childItem.id))
    updateCheckItem(deitem)
  }
  checkedItemsArry.length > 0 ? btnDisabled = false : btnDisabled = true
  return (
    <div className='footer'>
      总共有{todos.length}个爱好,勾选了{checkedItemsArry.length}个爱好
      <span className='delAllBox'>
        <Checkbox
          onChange={checkChange}
          checked={isChecked}
        >
          点击{isChecked ? '取消全选' : '勾选全部'}
        </Checkbox>
        <Button type="primary" danger onClick={deleteAllCheckedItems} disabled={btnDisabled}>全部删除</Button>
      </span>
    </div>
  )
}
//使用connect()()创建并暴露一个Count的容器组件
export default connect(state => ({ checkedItemsArry: state.checkedItemsArry, items: state.items }), {
  checkAllItem,
  cancelAllCheckItem,
  updateCheckItem
})(Footer)
