import { configureStore } from '@reduxjs/toolkit'
// counterReducer状态管理store ， 下一步会写到
import counterReducer from './counter'
// userReducer状态管理的store
import userReducer from './user'
const store = configureStore({
  reducer: {
    counterReducer,
    userReducer,
  },
})

// 最终导出的store， 也就是index中的store，
// 是包含了counterReducer 和 userReducer在内的store
export default store
