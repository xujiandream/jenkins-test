/* 
	1.该文件是用于创建一个为Item组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {
  ADDITEMTOCHECKEDARRAY,
  DELETEITEMFROMCHECKEDARRAY,
  ADDAllITEMTOCHECKEDARRAY,
  DELETEALLITEMFROMCHECKEDARRAY,
  UPDATECHECKEDARRAY
} from '../constant'
// 初始化状态
const initState = []
export default function checkedItemsReducer(preState = initState, action) {
  const {
    type,
    data
  } = action
  
  switch (type) {
    case ADDITEMTOCHECKEDARRAY:
      const isExist = preState.some(item => {
        return item.id === data.id
      });
      return isExist?[...preState]:[data, ...preState]
    case DELETEITEMFROMCHECKEDARRAY:
      const dataIndex = preState.findIndex((item) => {
        return item.id === data.id
      })
      preState.splice(dataIndex, 1)
      return [...preState]
    case ADDAllITEMTOCHECKEDARRAY:
      return [...data]
    case DELETEALLITEMFROMCHECKEDARRAY:
      return [...data]
    case UPDATECHECKEDARRAY:
      return [...data]
    default:
      return preState;
  }
}