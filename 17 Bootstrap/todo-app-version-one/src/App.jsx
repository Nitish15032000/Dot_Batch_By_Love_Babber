import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem  from "./components/TodoItem";
import "./App.css"

function App() {
  return <center>
      <header> <AppName /> </header>
      <main><AddTodo />
      <TodoItem /></main>
    
  </center>


}

export default App
