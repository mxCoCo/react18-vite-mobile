import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd-mobile'

const Login = () => {
  const navigate: any = useNavigate()
  const doLogin = () => {
    localStorage.setItem('token', '123456')
    navigate('/')
  }
  return (
    <div>
      <Button color="primary" onClick={doLogin}>
        登录
      </Button>
    </div>
  )
}
export default Login
