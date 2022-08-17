import HelloWorld from './components/HelloWorld'
import './styles/global.css'

function App() {
  return (
    <div id='app'>
      <HelloWorld className="w-full h-screen flex justify-center items-center bg-violet-500 snap-center whitespace-nowrap mx-0 my-auto overflow-hidden">
        <h1 className="w-3/5 text-white whitespace-nowrap mx-0 my-auto border-r-4 border-white font-pixel text-3xl font-bold animate-typing sm:text-6xl md:text-8xl overflow-hidden">Hello world!</h1>
      </HelloWorld>

      <HelloWorld className="w-full h-screen flex justify-center items-center bg-red-500 snap-center">
        <h1 className="text-white font-mono text-4xl font-bold animate-bounce sm:text-6xl md:text-8xl">Hello world!</h1>
      </HelloWorld>

      <HelloWorld className="w-full h-screen flex justify-center items-center bg-yellow-400 snap-center">
        <h1 className="text-red-500 font-puff text-5xl font-bold animate-pulse sm:text-7xl md:text-9xl">Hello world!</h1>
      </HelloWorld>

      <HelloWorld className="w-full h-screen flex justify-center items-center bg-zinc-500 overflow-hidden snap-center">
        <h1 className="text-white font-mono text-3xl font-bold animate-ping sm:text-5xl md:text-7xl">Hello world!</h1>
      </HelloWorld>

      <HelloWorld className="w-full h-screen flex justify-center items-center bg-orange-500 overflow-hidden snap-center">
        <h1 className="text-blue-500 font-sans text-4xl font-bold motion-safe:animate-spin sm:text-6xl md:text-8xl">Hello world!</h1>
      </HelloWorld>
    </div>
  )
}

export default App
