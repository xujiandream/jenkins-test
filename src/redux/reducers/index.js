/* 
	该文件用于汇总所有的reducer为一个总的reducer
*/
//引入combineReducers，用于汇总多个reducer
import {combineReducers} from 'redux'
// 引入为Hobby组件服务的reducer
import items from './hobby'
// 引入为Item组件服务的reducer
import checkedItemsArry from './item'
//汇总所有的reducer变为一个总的reducer
export default combineReducers({
  items,
  checkedItemsArry
})
