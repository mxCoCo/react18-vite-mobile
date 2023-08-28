// import { useLocation, Navigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function AuthToken({ children }) {
  const token = localStorage.getItem('token')
  // const location = useLocation()
  // console.log(location)
  if (token) {
    return children
  } else {
    return <Navigate to="/login" replace></Navigate>
  }
}
export default AuthToken
