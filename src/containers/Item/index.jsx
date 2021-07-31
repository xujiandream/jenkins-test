//引入actionCreator，专门用于创建action对象
import { checkItem, cancelCheckItem } from '../../redux/actions/item'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
/* ******定义UI组件(Item组件)****** */
import React, { useCallback, useContext, useRef } from 'react'
import './index.css'
import { Button, Checkbox } from 'antd'
import { ItemContext } from '../../context'
import PropTypes from 'prop-types'

const Item = (props) => {
  console.log('Item--执行了');
  //对接收的props进行：类型、必要性的限制
  Item.propTypes = {
    todoObj: PropTypes.object.isRequired
  }
  const {
    todoObj,
    checkItem,
    cancelCheckItem,
    items,
    checkedItemsArry,
  } = props
  // 获取从祖组件获得的数据和方法
  const { deleteHobby } = useContext(ItemContext)
  // 创建容器存储数据
  const ItemRef = useRef(null)
  ItemRef.current = {
    saveNewItems: [...items],
    isChecked: true,  // 单个checkBox的选择状态
  }
  // 判断checkBox的选择状态
  let { isChecked, saveNewItems } = ItemRef.current
  isChecked = checkedItemsArry.some(item => item.id === todoObj.id) ? true : false
  // 删除对应被点击项
  const deleteItem = useCallback(
    () => {
      const newItems = saveNewItems.filter(item => item.id !== todoObj.id)
      deleteHobby(newItems)
    },
    [deleteHobby, todoObj.id, saveNewItems]
  )
  // 选中点击项
  const checkChange = useCallback(
    (event) => {
      const { checked } = event.target
      checked ? checkItem(todoObj) : cancelCheckItem(todoObj)
    },
    [checkItem, cancelCheckItem, todoObj]
  )
  // 更新选中数据
  // if (checkedItemsArry.length !== items.length) {
  //   const deitem = checkedItemsArry.filter(parentItem =>items.some(childItem => parentItem.id === childItem.id))
  //   console.log('deitem', deitem);
    
  // }
  return (
    <li className='item' >
      <span className='checkBox'>
        <Checkbox
          checked={isChecked}
          onChange={checkChange}
        />
        <span style={{ marginLeft: '40px' }}>爱好：{todoObj.hobby}</span>
      </span>
      <span className='buttonBox'>
        <Button type="primary">详情</Button>
        <Button danger onClick={deleteItem} style={{ marginLeft: '5px' }}>删除</Button>
      </span>
    </li>
  )
}

export default connect(state => ({ checkedItemsArry: state.checkedItemsArry, items: state.items }),
  {
    checkItem,
    cancelCheckItem
  }
)(Item)