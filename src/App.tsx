import './App.css';
import { useState } from 'react';
import { TodoItem } from './components/TodoItem';
import { dummyData } from './data/todos';
import { AddTodoForm } from './components/AddTodoForm';

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

    return (
        <main className='py-10 h-screen space-y-5'>
            <h1 className='font-bold text-center text-3x1'>Your todos</h1>
            <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6'>
                <AddTodoForm onSubmit={addToto} />
                <div className='space-y-2'>
                    {todos.map((todo) => (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            onCompletedChange={setTodoCompleted}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default App;
