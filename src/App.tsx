import './App.css';
import { useState, useEffect } from 'react';
import { dummyData } from './data/todos';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';
import { TodoSummary } from './components/TodoSummary';
import { TodoItemProps } from './types/todo';

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos: TodoItemProps[] = JSON.parse(
            localStorage.getItem('todos') || '[]',
        );
        return savedTodos.length > 0 ? savedTodos : dummyData;
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const setTodoCompleted = (id: number, completed: boolean) =>
        setTodos((prevState) =>
            prevState.map((todo) =>
                todo.id === id ? { ...todo, completed } : todo,
            ),
        );

    const addToto = (title: string) => {
        setTodos((prevState) => [
            { id: prevState.length + 1, title, completed: false },
            ...prevState,
        ]);
    };

    const deleteTodo = (id: number) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    };

    const deleteTodoCompleted = () => {
        setTodos((prevState) => prevState.filter((todo) => !todo.completed));
    };

    return (
        <main className='py-10 h-screen space-y-5 overflow-y-auto'>
            <h1 className='font-bold text-center text-3xl'>Your todos</h1>
            <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6'>
                <AddTodoForm onSubmit={addToto} />
                <TodoList
                    todos={todos}
                    onCompletedChange={setTodoCompleted}
                    onDelete={deleteTodo}
                />
            </div>
            <TodoSummary
                todos={todos}
                deleteAllComplete={deleteTodoCompleted}
            />
        </main>
    );
}

export default App;
