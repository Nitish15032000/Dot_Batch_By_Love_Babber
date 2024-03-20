import './App.css'
import Navcontant from './components/Navcontant'
import Fooditem from './components/Fooditem'


function App() {
  let foodItems = ["A second item", "A third item", "A fourth item", "a fifth one"]

  return (
    <>
    <Navcontant  />
    <Fooditem foodItems={foodItems} />

    </>
  )
}

export default App
