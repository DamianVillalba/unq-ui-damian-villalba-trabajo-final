import BarScene from './components/BarScene/BarScene.jsx'
import GamePage from './pages/GamePage/GamePage.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <BarScene />
      <main className="app__counter">
        <GamePage />
      </main>
    </div>
  )
}

export default App
