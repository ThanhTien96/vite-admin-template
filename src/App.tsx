import { Router } from 'components/wrapper'
import './styles/App.scss'
import { pagePath } from 'constants'

function App() {
  return (
    <Router defaultRoute={pagePath.home} />
  )
}

export default App
