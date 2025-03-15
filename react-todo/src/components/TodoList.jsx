import React , {useState} from "react";

const initialTodos = [
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Walk the dog" },
    { id: 3, text: "Finish React project" },
    { id: 4, text: "Read a book" },
];

const TodoList= () => {
    const [todos , setTodos] = useState(initialTodos);


    const addTodo = (text) => {
        if (text.trim() === "") return;
        const newTodo = { id : Date.now() ,text, completed:false};
        setTodos([...todos,newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))}

    const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
};
    
    return (
        <div>
        <ul>
        {todos.map((todo) => {
            <li key = {todo.id}
            onClick={() => toggleTodo(todo.id)} >
                {todo.text}
                <button onClick={(e) => {e.stopPropagation(); deleteTodo(todo.id);}}>              ❌
                </button>
                </li>
        })}
        </ul>
        <AddTodoForm addTodo={addTodo} />
        </div>
    )
}


const AddTodoForm = ({ addTodo }) => {
    const [newtext, setNewtext] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTodo(newtext);
      setNewTask("");
    };
  
    return (
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
          Add
        </button>
      </form>
    );    
}
export default TodoList

import {render , screen , fireEvent} from "@testing-library/react";
import TodoList from "../components/TodoList";

test ("render initial todos" , () => {
    render(<TodoList />)
    expect (screen.getByText("Buy groceries")).ToBeInTheDocument();
})

test("add a new todo" , () => {
    render(<TodoList />)
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add")
    fireEvent.change(input, {target :{ value: "New Todo"}});
    fireEvent.click(addButton)

    expect(screen.getByText("New Todo")).ToBeInTheDocument();
})

test("toggle a todo" , () => {
    render(<TodoList />)
    const todo = screen.getByText("Buy groceries");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through")
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle("text-decoration: line-through")
})

test("delets a todo" , () => {
    const todo = screen.getByText("Buy groceries");
    const deletButton = todo.nextSibling;
    fireEvent.click(deletButton);
    expect(todo).not.ToBeInTheDocument();
});
