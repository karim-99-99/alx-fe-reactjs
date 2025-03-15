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
