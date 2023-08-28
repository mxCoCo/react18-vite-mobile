import router from './router'
import { useRoutes } from 'react-router-dom'
import '@/App.less'

const App = () => {
  const outlet = useRoutes(router)

  return <div className="app-container">{outlet}</div>
}

export default App
