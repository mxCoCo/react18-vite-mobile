import React from 'react'
import './index.less'
import { NavBar, Toast } from 'antd-mobile'
import { LockOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const back = () => {
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    })
    navigate(-1)
  }

  return (
    <div className="header-container">
      <NavBar
        onBack={back}
        right={<LockOutline fontSize={24} onClick={logout} />}
      >
        标题
      </NavBar>
    </div>
  )
}

export default Header
