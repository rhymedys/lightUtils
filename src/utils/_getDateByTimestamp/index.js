/*
 * @Author: Rhymedys/Rhymedys@gmail.com 
 * @Date: 2017-12-16 15:42:20 
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-03-20 14:41:26
 */
import _injectDateFormatToDateAndCallback from '../_injectDateFormatToDateAndCallback/index.js'
import {defaultDateFormatType} from '../../constants/index.js'

 /**
 * @description 将时间戳转换成标准日期
 * @param {any} numTimestamp 时间戳
 * @param {string} [formatType='yyyy-MM-dd hh:mm:ss'] 返回类型
 * @returns 
 */
export default function  _getDateByTimestamp (numTimestamp, formatType) {
  return _injectDateFormatToDateAndCallback(()=>new Date(numTimestamp).format(formatType || defaultDateFormatType))
}