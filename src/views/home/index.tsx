import React, { useEffect, useCallback } from 'react'
import './index.less'
import Signature from '@/components/signature'
// import { projectNoticeLatest } from '@/axios/demo'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { increment } from '@/store/counter'
import { GetProjectNoticeLatest } from '@/store/user'

const Home = () => {
  const { name, value, noticeLatest } = useSelector((state: any) => {
    return {
      name: state.userReducer.name,
      noticeLatest: state.userReducer.noticeLatest,
      value: state.counterReducer.value,
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  const changeValue = () => {
    dispatch(increment())
  }
  const getData1 = useCallback(() => {
    dispatch(GetProjectNoticeLatest({ projectNoticeNo: 10 }))
  }, [dispatch])
  // const getData1 = async () => {
  //   // const res = await projectNoticeLatest({
  //   //   projectNoticeNo: 10,
  //   // })
  //   dispatch(GetProjectNoticeLatest({ projectNoticeNo: 10 }))
  // }
  useEffect(() => {
    getData1()
  }, [getData1])

  console.log('123')
  return (
    <div className="home-container">
      {noticeLatest.map((one: any) => (
        <div key={one.projectNoticeId}>{one.noticeName}</div>
      ))}
      <div onClick={changeValue}>
        {name}-{value}
      </div>
      <Signature />
    </div>
  )
}

export default Home
