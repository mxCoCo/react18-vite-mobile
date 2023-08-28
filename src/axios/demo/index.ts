import { get } from '../request'
import api from '../api'

// 查询通知信息
export const projectNoticeLatest = (params) => {
  return get(api.projectNoticeLatest, params)
}
