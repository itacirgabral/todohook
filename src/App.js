import { useState, createElement} from 'react'
import './App.css'

function Item({text, isCompleted, id}) {
  return createElement('li', {className: 'todo-list', key: `li-${id}`}, [
    createElement('input', {type: 'checkbox', defaultChecked: isCompleted, key: `check-${id}`}),
    text
  ])
}

function Heading() {
  return createElement('h1', {key: 'heading'}, 'ToDo')
}

function Input({onChange, onClick}) {
  return createElement('div', {className: 'input', key: 'Input'}, [
    createElement('input', {type: 'text', onChange, key: 'fild'}),
    createElement('button', {type: 'button', key: 'add', onClick}, 'add'),
    createElement('br', {key: 'br'}),
  ])  
}


const rChar = () => String.fromCharCode(Math.trunc(Math.random()*26) + 97)
const mkKeyGen = arr => () => {
  let key
  while(arr.includes(key = rChar() + rChar() + rChar() + rChar())){
    
  }
  return key
}
const keyGen = mkKeyGen(['avde', 'dcrg', 'otcj'])

/*   __   ____  ____ 
**  / _\ (  _ \(  _ \
** /    \ ) __/ ) __/
** \_/\_/(__)  (__)  
*/
function App() {
  const [todo, setTodo] = useState([
    { text: 'ToDo 1', isCompleted: true , id: 'avde'},
    { text: 'ToDo 2', isCompleted: false , id: 'dcrg'},
    { text: 'ToDo 3', isCompleted: false , id: 'otcj'}
  ])
  const todoPush = e => {
    setTodo([...todo, {text: input, isCompleted: false , id: keyGen}])
  }
  const toggleId = id => {
    const t = todo.find(e => e.id === id)
    t.isCompleted = !t.isCompleted
    return [...todo]
  }

  const [input, setInput] = useState("")
  const inputChange = e => setInput(e.target.value)

  return createElement('div', {className: 'app'}, [
    Heading(),
    Input({onChange: inputChange, onClick: todoPush}),
    createElement('ul', {className: 'todo', key: 'list'}, 
      todo.map(Item)
    )
  ])
}

export default createElement(App)
