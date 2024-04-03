import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
// import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"
import "./App.css"
function App() {
  let items = [{
    "id":1,
    "name": "Buy Books",
    "date": "3/12/2023"
  },
  {
    "id":2,
    "name": "GO TO HOME",
    "date": "Right Now"
  },
  {
    "id":3,
    "name":"Pleae Learn some New",
    "date":"7/2/2024"
  }
  ]
  return <center className="todo Container"><AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems items={items}></TodoItems>
  </center>
}

export default App
