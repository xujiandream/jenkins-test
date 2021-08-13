//引入actionCreator，专门用于创建action对象
import { updateItem } from '../../redux/actions/hobby'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
/* ******定义UI组件(List组件)****** */
import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from '../../containers/Item'
import Sortable from 'sortablejs'
//对接收的props进行：类型、必要性的限制
/* List.propTypes = {
  todos: PropTypes.array.isRequired
} */
const List = (props) => {
  console.log('List--执行了');
  const { todos, items, updateItem } = props

  const onUpdate = useCallback(
    (evt) => {
      console.log('onUpdate我执行了')
      console.log('evt', evt.oldIndex, evt.newIndex)
      console.log('props', props)
      console.log('items', items)
      console.log('todos', todos)
      // updateItem()
    },
    [items]
  )

  useEffect(
    () => {
      console.log('list-useEffect我执行了')
      new Sortable(document.querySelector('#list'), {
        animation: 1000,
        ghostClass: 'blue-background-class',
        dragClass: 'sortable-drag',
        chosenClass: 'sortable-chosen',
        onUpdate,
        /* onUpdate: function (evt) {
          console.log('onUpdate我执行了')
          console.log('evt', evt.oldIndex, evt.newIndex)
          let item = items[evt.oldIndex]
          删除原本位置item
          items.splice(evt.oldIndex, 1)
          新位置添加item
          items.splice(evt.newIndex, 0, item)
          console.log('items', items)
          console.log('todos', todos)
          updateItem()
        }, */
        // 开始拖拽的时候
        onStart: function (evt) { },
        onAdd: function (evt) { },
        onRemove: function (evt) { },
        setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
          console.log('123我执行了')
          console.log(dataTransfer,dragEl);
          dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
      },
      })
    },
    [items,onUpdate]
  )

  return (
    <ul className='list' id='list'>
      {
        todos.map((todoObj) => {
          return <Item key={todoObj.id} todoObj={todoObj}></Item>
        })
      }
    </ul>
  )
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(state => ({ items: state.items }),
  {
    updateItem
  }
)(List)