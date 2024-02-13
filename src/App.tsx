import './App.css';
import { TodoItem } from './components/TodoItem';
import { dummyData } from './data/todos';

function App() {
    return (
        <main className='py-10 h-screen'>
            <h1 className='font-bold text-center text-3x1'>Your todos</h1>
            <div className='max-w-lg mx-auto'>
                <div className='space-y-2'>
                    {dummyData.map(({ title }, index) => (
                        <TodoItem
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
