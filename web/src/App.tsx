import { Habit } from "./components/Habit"

import './styles/global.css';

function App() {
  return (
    <div>
    <Habit completed={10}/>
    <Habit completed={10}/>
    <Habit completed={10}/>
    </div>
  )
}

export default App
