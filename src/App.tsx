import './App.css';
import { useState } from 'react';
import { dummyData } from './data/todos';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';

function App() {
    const [todos, setTodos] = useState(dummyData);

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

    return (
        <main className='py-10 h-screen space-y-5'>
            <h1 className='font-bold text-center text-3x1'>Your todos</h1>
            <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6'>
                <AddTodoForm onSubmit={addToto} />
                <div className='space-y-2'>
                    <TodoList
                        todos={todos}
                        onCompletedChange={setTodoCompleted}
                        onDelete={deleteTodo}
                    />
                </div>
            </div>
        </main>
    );
}

export default App;
