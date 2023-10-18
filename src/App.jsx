import background from './assets/wallpaper.jpg'
import './App.css'
import Menu from './Components/Menu'
import Dashboard from './Components/Dashboard'

function App() {

  return (
    <div>
      {/* <div className='fill-background'> */}
        <img src={background} alt='background' className='background'/>
      {/* </div> */}
      <div className='components'>
        <Menu />
        <Dashboard />
      </div>
      
    </div>
  )
}

export default App
