import BarScene from './components/BarScene/BarScene.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <BarScene />
      <main className="app__counter">
        <div className="app__content">
          <h1 className="app__title">Palabras encadenadas</h1>
          <p className="app__subtitle">Bar de Shakky, Grove 13, Sabaody</p>
        </div>
      </main>
    </div>
  )
}

export default App
