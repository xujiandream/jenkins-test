/* 
	该文件专门为Count组件生成action对象
*/
import { ADDITEM, DELETEITEM } from '../constant'

export const addItem = data => ({ type: ADDITEM, data })
export const deleteItem = data => ({ type: DELETEITEM, data })