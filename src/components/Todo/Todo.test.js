import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo'
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
    return (
    <BrowserRouter>
         <Todo />
    </BrowserRouter>
    )
    
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    
    // Ensure tasks is an array
    const tasksArray = Array.isArray(tasks) ? tasks : [tasks];
    
    tasksArray.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });
};

describe("Todo", () => {
    it('should render same text passed into title prop', async () => {
        render(<MockTodo />);
        addTask("Go grocery shopping")
        const divElement = screen.getByText(/Go grocery shopping/i)
        expect(divElement).toBeInTheDocument()
        
      });
    it('should render multiple elements', async () => {
        render(<MockTodo />);
        addTask("Go grocery shopping, Pet my cat, watch TV".split(', '));
        const divElements = screen.getAllByTestId("task-container")
        expect(divElements.length).toBe(3)
        
      });
    it('tasks should not have completed class when initially rendered', async () => {
        render(<MockTodo />);
        addTask("Go grocery shopping")
        const divElement = screen.getByText(/Go grocery shopping/i)
        expect(divElement).not.toHaveClass("todo-item-active")
        
      });
    it('tasks should have completed class when clicked', async () => {
        render(<MockTodo />);
        addTask("Go grocery shopping")
        const divElement = screen.getByText(/Go grocery shopping/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
        
      });
})