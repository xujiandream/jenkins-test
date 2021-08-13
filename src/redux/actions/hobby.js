/* 
	该文件专门为Count组件生成action对象
*/
import { ADDITEM, DELETEITEM, UPDATEITEM } from '../constant'

export const addItem = data => ({ type: ADDITEM, data })
export const deleteItem = data => ({ type: DELETEITEM, data })
export const updateItem = data => ({ type: UPDATEITEM, data })