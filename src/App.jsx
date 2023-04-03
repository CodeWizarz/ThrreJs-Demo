import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home'

function App() {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <Customizer />
      {/* <h1 className=" text-red-400">Three Js</h1> */}
    </main>
  )
}

export default App