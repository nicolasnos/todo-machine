import React from "react";
import { TodoContext } from "../App/TodoContext";
import './todoForm.css'

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState('') 

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal (false)
    }

    const onChange = (event) => {
        
        setNewTodoValue(event.target.value)
       
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Recordatorio de tareas</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="pon acà tu tarea"/>

            <div
            className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button">
                        cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add">
                        Agregar tarea
                </button>
            </div>
        </form>
    )
}

export {TodoForm}