
import './App.css';
import {useState,useEffect} from "react"
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] = useState("")
  const [todos,setTodos] = useState(initialState)
  const [editTodo,setEditTodo] = useState(null)

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  return (
    <div className="container">
      <header className="App-wrapper">
       <Header/>
     
       <Form
       input={input}
       setInput={setInput}
       todos={todos}
       setTodos={setTodos}
       editTodo={editTodo}
       setEditTodo={setEditTodo}
       />
     <TodoList todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
      </header>
    </div>
  );
}

export default App;
