// hookRedux下的module下的name.js代码
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { projectNoticeLatest } from '@/axios/demo'
import api from '@/axios/api'

export const GetProjectNoticeLatest: any =
  // 这里的第一个字符串参数， 是在调试器里显示的当前在执行的任务的名字
  createAsyncThunk(api.projectNoticeLatest, async (param) => {
    const res = await projectNoticeLatest(param)
    return res
  })

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '天',
    noticeLatest: [],
  },
  reducers: {
    changeName(state, { payload }) {
      state.name = payload
    },
  },
  // 异步的操作
  extraReducers: {
    // [GetProjectNoticeLatest.pending](state, action) {
    //   console.log('pedding')
    // },
    [GetProjectNoticeLatest.fulfilled](state, { payload }) {
      console.log(payload)
      state.noticeLatest = payload
    },
    // [GetProjectNoticeLatest.rejected](state, action) {
    //   console.log('reject')
    // }
  },
})

// 最终默认导出的就是当前片段的store
export default userSlice.reducer
// 定义导出的都是reducers里的方法
export const { changeName } = userSlice.actions
