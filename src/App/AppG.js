import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { Modal } from '../Modal'
import { TodoForm } from "../TodoForm/todoForm";
import { MyLoader } from "../MyLoader/MyLoader";

function AppG () {
  const {error, 
  loading, 
  searchedTodos, 
  completeTodo, 
  deleteTodo,
  openModal,
  setOpenModal
} = React.useContext(TodoContext)
    return (
        <React.Fragment>

        <TodoCounter/>
   
         <TodoSearch/>
           
            <TodoList>
            {error &&  <p>hay un error, como raro</p>}
            {loading &&  <MyLoader/>}
            {(!loading && !searchedTodos) && <p>creea tu tarea</p>}
  
            {searchedTodos.map(todo =>(
              <TodoItem 
                key={todo.text}
                text={todo.text}
                completed= {todo.completed}
                onComplete = {()=>completeTodo(todo.text)}
                onDelete = {()=> deleteTodo(todo.text)}
                />
                  ))}
              </TodoList>
        
            {openModal && (
              <Modal>
                <TodoForm/>
              </Modal>
            )} 
            
   
         <CreateTodoButton
          setOpenModal={setOpenModal}
          />
         
       </React.Fragment>
    )
}

export {AppG}