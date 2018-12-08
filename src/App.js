import { useState, createElement} from 'react'
import './App.css'

function Item({text, isCompleted, checkClick, id}) {
  return createElement('li', {className: `todo-list${isCompleted ? ' strike' : ''}`, key: `li-${id}`}, [
    createElement('input', {type: 'checkbox', defaultChecked: isCompleted, onClick: () => checkClick(id), key: `check-${id}`}),
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
const mkKeyGen = arr => {
  const keys = new Set(arr)
  return k => {
    if (k) {
      keys.delete(k)
    } else {
      let key = rChar() + rChar() + rChar() + rChar()
      while(keys.has(key)) {
        key = rChar() + rChar() + rChar() + rChar()
      }
      keys.add(key)
      return key
    }
  }
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
    console.log(id)
    const t = todo.find(e => e.id === id)
    keyGen(t.id)
    t.id = keyGen()
    t.isCompleted = !t.isCompleted
    console.dir(todo)
    return [...todo]
  }

  const [input, setInput] = useState("")
  const inputChange = e => setInput(e.target.value)

  return createElement('div', {className: 'app'}, [
    Heading(),
    Input({onChange: inputChange, onClick: todoPush}),
    createElement('ul', {className: 'todo', key: 'list'}, 
      todo.map(e => Item({...e, checkClick: toggleId}))
    )
  ])
}

export default createElement(App)
/**
 * https://scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components
 * https://github.com/mahenrique94/video-react-hooks/blob/master/src/AppHook.js
 * https://reactjs.org/docs/hooks-reference.html#useref
 */