import './App.css';
import { useState } from 'react';
import { TodoItem } from './components/TodoItem';
import { dummyData } from './data/todos';

function App() {
    const [todos, setTodos] = useState(dummyData);

    const setTodoCompleted = (id: number, completed: boolean) =>
        setTodos((prevState) =>
            prevState.map((todo) =>
                todo.id === id ? { ...todo, completed } : todo,
            ),
        );

    return (
        <main className='py-10 h-screen'>
            <h1 className='font-bold text-center text-3x1'>Your todos</h1>
            <div className='max-w-lg mx-auto bg-slate-100 p-5'>
                <div className='space-y-2'>
                    {dummyData.map((todo) => (
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
