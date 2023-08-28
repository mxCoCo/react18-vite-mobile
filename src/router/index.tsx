import { lazy, ReactNode, Suspense } from 'react'
import AuthToken from '@/views/authToken'
import Layout from '@/layout'
import Login from '@/views/login'
// import Home from '@/views/home'
import About from '@/views/about'
import My from '@/views/my'
import Error404 from '@/views/error404'

const Home = lazy(() => import('@/views/home'))

//解决白屏现象
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<> loading </>}> {children} </Suspense>
}

const routes = [
  {
    path: '/',
    element: (
      <AuthToken>
        <Layout />
      </AuthToken>
    ),
    children: [
      {
        index: true,
        // path: '/home',
        element: lazyLoad(<Home />),
      },
      {
        path: '/my',
        element: <My />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  // 访问其余路径的时候直接404
  {
    path: '*',
    element: <Error404 />,
    // 访问其余路径的时候直接跳到首页
    // element: <Navigate to="/home" />,
  },
]

export default routes
