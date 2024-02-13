import './App.css';
import { TodoItem } from './components/TodoItem';
import { dummyData } from './data/todos';

function App() {
    return (
        <main className='py-10 h-screen'>
            <h1 className='font-bold text-center text-3x1'>Your todos</h1>
            <div className='max-w-lg mx-auto bg-slate-100 p-5'>
                <div className='space-y-2'>
                    {dummyData.map(({ title, completed }, index) => (
                        <TodoItem
                            completed={completed}
                            title={title}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default App;
