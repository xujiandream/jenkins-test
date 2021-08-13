/* 
	1.该文件是用于创建一个为App组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {
  ADDITEM,
  DELETEITEM,
  UPDATEITEM
} from '../constant'

//初始化状态
const initState = [{
    id: '001',
    hobby: '跑步',
    done: true
  },
  {
    id: '002',
    hobby: '游泳',
    done: false
  },
  {
    id: '003',
    hobby: '击剑',
    done: true
  },
  {
    id: '004',
    hobby: '画画',
    done: true
  }
]
export default function itemsReducer(preState = initState, action) {
  //从action对象中获取：type、data
  const { type, data } = action
  //根据type决定如何加工数据
  switch (type) {
    case ADDITEM: //如果是添加
      return [data, ...preState]
    case DELETEITEM: //若果是删除
      return [...data]
    case UPDATEITEM: //若果是更新
      return [...data]
    default:
      return preState
  }
}