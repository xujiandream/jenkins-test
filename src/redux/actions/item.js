/* 
	该文件专门为Item组件生成action对象
*/
import {
	ADDITEMTOCHECKEDARRAY,
	DELETEITEMFROMCHECKEDARRAY,
	ADDAllITEMTOCHECKEDARRAY,
	DELETEALLITEMFROMCHECKEDARRAY,
	UPDATECHECKEDARRAY
} from '../constant'

export const checkItem = data => ({
	type: ADDITEMTOCHECKEDARRAY,
	data
})
export const cancelCheckItem = data => ({
	type: DELETEITEMFROMCHECKEDARRAY,
	data
})
export const checkAllItem = data => ({
	type: ADDAllITEMTOCHECKEDARRAY,
	data
})
export const cancelAllCheckItem = data => ({
	type: DELETEALLITEMFROMCHECKEDARRAY,
	data
})
export const updateCheckItem = data => ({
	type: UPDATECHECKEDARRAY,
	data
})