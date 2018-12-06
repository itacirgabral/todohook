import { useState, createElement} from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    { text: "ToDo 1"},
    { text: "ToDo 2" },
    { text: "ToDo 3" }
  ])

  const [input, setInput] = useState("")

  const todoPush = e => {
    setTodo([...todo, {text: input}])
  }

  return createElement('div', null, [
    createElement('h1', {key: 'heading'}, 'ToDo'),
    createElement('input', {type: 'text', key: 'inputText', onChange: e => setInput(e.target.value)}),
    createElement('button', {type: 'button', key: 'add', onClick: todoPush}, 'add'),
    createElement('br', {key: 'br'}),
    createElement('ul', {className: 'todo', key: 'list'}, 
      todo.map((e, i) => createElement('li', {className: 'todo-list', key: e.id}, e.text))
    )
  ])
}

export default App
