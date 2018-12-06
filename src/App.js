import { useState, createElement} from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  console.dir(todos)

  return createElement('div', null, [
    createElement('h1', {key: 'heading'}, 'ToDo'),
    createElement('ul', {className: 'todo', key: 'list'}, 
      todos.map((e, i) => createElement('li', {className: 'todo-list', key: e.text}, e.text))
    )
  ])
}

export default App
